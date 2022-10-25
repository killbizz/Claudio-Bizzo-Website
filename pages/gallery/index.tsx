import { GetStaticProps, GetStaticPropsResult } from 'next';
import Layout from '../../components/Layout';
import { getFolder, getPreviewArtwork } from '../../services/artwork';
import { Artwork } from '../../types/Artwork';
import Folder from '../../types/Folder';
import { Image } from "cloudinary-react";

interface GalleryPageProps {
    artworks: Artwork[]
}

const GalleryPage = ({ artworks }: GalleryPageProps) => {

  return(
      <Layout title="I Soli di Claudio | Galleria">
          <div className="mid">
            <h1 className="text-center mt-4 pt-4">Galleria dei Lavori</h1>
            <div id="cards_landscape_wrap-2">
                <div className="container">
                    <div className="row">
                      {
                        artworks.map((artwork) => 
                        <div key={artwork.publicId} className="col-md-4 col-lg-4">
                          <a href="">
                              <div className="card-flyer card-block">
                                  <div className="text-box">
                                      <div className="image-box">
                                          {/* <img alt="Image" /> */}
                                          <Image
                                            // onClick={() => {
                                            //   setModalShow(true);
                                            //   setIndexImageSelected(index);
                                            // }}
                                            cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                                            // className="photoInGallery shadow-1-strong rounded mb-4"
                                            alt={artwork.title}
                                            publicId={artwork.publicId}
                                            // width="400"
                                            height="300"
                                            crop="fill"
                                            // gravity="face"
                                            loading="lazy"
                                          />
                                      </div>
                                      <div className={"text-container"}>
                                          <h6>{artwork.title}</h6>
                                          <button className="btn btn-lg custom-button mt-4 mx-auto text-center d-block" >Esplora</button>
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
            <button className="btn btn-lg custom-button mb-4 mx-auto text-center d-block" >Carica altri Lavori</button>
          </div>
      </Layout>
  );
}

export const getStaticProps: GetStaticProps<GalleryPageProps> = async (): Promise<GetStaticPropsResult<GalleryPageProps>> => {
    const folders: Folder[] = await getFolder("soli-di-claudio");
    const artworks: Artwork[] = [];

    /* eslint-disable no-await-in-loop */
    for (let i = 0; i < folders.length; i++) {
      artworks.push(await getPreviewArtwork(folders[i].path));
    };
    /* eslint-enable no-await-in-loop */
    
    return {
      props: {
        artworks
      },
      revalidate: 30
    };
};

export default GalleryPage;