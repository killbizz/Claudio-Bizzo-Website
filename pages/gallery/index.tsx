import { GetStaticProps, GetStaticPropsResult } from 'next';
import Layout from '../../components/Layout';
import { getFolder, getPreviewArtwork } from '../../services/artwork';
import { Artwork } from '../../types/Artwork';
import Folder from '../../types/Folder';
import { Image } from "cloudinary-react";
import { useState } from 'react';
import { startLoadingBar, stopLoadingBar } from '../../lib/loading';
import Router  from 'next/router';

interface GalleryPageProps {
    initialArtworks: Artwork[],
    folders: Folder[]
}

const GalleryPage = ({ initialArtworks, folders }: GalleryPageProps) => {

  const [artworks, setArtworks] = useState(initialArtworks);
  // index to find the first new artwork in folders[i]
  const [artworkIndex, setArtworkIndex] = useState(3);

  async function handleLoadMore(event: any) {
    event.preventDefault();

    startLoadingBar();

    // showing 3 more artworks or the remaining ones
    const newIndex: number = artworkIndex + 3 <= folders.length ? artworkIndex + 3 : artworkIndex + (folders.length - artworkIndex);

    const result = await fetch("/api/cloudinary", {
      method : "POST",
      body : JSON.stringify({
        folders: folders.slice(artworkIndex, newIndex)
      })
    })
    .then((r) => r.json());

    setArtworkIndex(newIndex);
    setArtworks(prev => {
      return [
        ...prev,
        ...(result.newArtworks)
      ];
    });

    stopLoadingBar();

  }

  return(
      <Layout title="I Soli di Claudio | Galleria">
          <div className="mid mid-background-color">
            <h1 className="text-center mt-4 pt-4">Galleria dei Lavori</h1>
            <div id="cards_landscape_wrap-2">
                <div className="container">
                    <div className="row">
                      {
                        artworks.map((artwork) => 
                        <div key={artwork.publicId} className="col-md-4 col-lg-4">
                          <a href='' onClick={(event: any) => {
                            event.preventDefault();
                            Router.push('/artwork/' + artwork.publicId.split("/")[1]);
                          }}>
                              <div className="card-flyer card-block">
                                  <div className="text-box">
                                      <div className="image-box">
                                          <Image
                                            cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                                            alt={artwork.title}
                                            publicId={artwork.publicId}
                                            height="300"
                                            crop="fill"
                                            loading="lazy"
                                          />
                                      </div>
                                      <div className={"text-container"}>
                                          <h6>{artwork.title}</h6>
                                          <button 
                                            className="btn btn-lg custom-button mt-4 mx-auto text-center d-block" 
                                            onClick={() => Router.push('/artwork/' + artwork.publicId.split("/")[1])}
                                          >
                                            Esplora
                                          </button>
                                      </div>
                                      
                                  </div>
                              </div>
                          </a>
                        </div>
                        )
                      }
                    </div>
                </div>
            </div>
            {artworkIndex < folders.length &&
              <button className="btn btn-lg custom-button mb-4 mx-auto text-center d-block" onClick={handleLoadMore} >Carica altri Lavori</button>
            }
          </div>
      </Layout>
  );
}

export const getStaticProps: GetStaticProps<GalleryPageProps> = async (): Promise<GetStaticPropsResult<GalleryPageProps>> => {
    const folders: Folder[] = await getFolder("soli-di-claudio");
    const initialArtworks: Artwork[] = [];

    for (let i = 0; i < 3; i++) {
      initialArtworks.push(await getPreviewArtwork(folders[i].path, "anteprima_galleria"));
    };
    
    return {
      props: {
        initialArtworks,
        folders
      },
      revalidate: 60 * 60 // 1 hour
    };
};

export default GalleryPage;