import { GetStaticProps, GetStaticPropsResult } from "next";
import Layout from "../../components/Layout";
import { getFolder, getPreviewArtwork } from "../../services/artwork";
import { Artwork } from "../../types/Artwork";
import Folder from "../../types/Folder";
import Image from "next/image";
import { useState } from "react";
import { startLoadingBar, stopLoadingBar } from "../../lib/loading";
import Router from "next/router";
import Link from "next/link";
import {
  BreadcrumbJsonLd,
  NextSeo,
  OrganizationJsonLd,
  SocialProfileJsonLd,
  WebPageJsonLd,
} from "next-seo";

// SEO
const title: string = "Galleria dei Lavori | Claudio Bizzo";
const description: string = `Scopri tutte le creazioni artigianali di Claudio Bizzo.
Ogni prodotto in mostra nel sito web è un pezzo unico ed è stato pensato e realizzato a mano nel suo laboratorio.
Tra le opere elencate sono presenti cornici per specchi o quadri, coroncine, festoni, lampade e oggetti ornamentali per interni di diverse forme.
Seleziona un lavoro per visualizzarne i dettagli.`;

interface GalleryPageProps {
  initialArtworks: Artwork[];
  folders: Folder[];
}

const GalleryPage = ({ initialArtworks, folders }: GalleryPageProps) => {
  const [artworks, setArtworks] = useState(initialArtworks);
  // index to find the first new artwork in folders[i]
  const [artworkIndex, setArtworkIndex] = useState(3);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  async function handleLoadMore(event: any) {
    event.preventDefault();

    startLoadingBar();

    setIsLoadingMore(true);

    // showing 3 more artworks or the remaining ones
    const newIndex: number =
      artworkIndex + 3 <= folders.length
        ? artworkIndex + 3
        : artworkIndex + (folders.length - artworkIndex);

    const result = await fetch("/api/cloudinary", {
      method: "POST",
      body: JSON.stringify({
        folders: folders.slice(artworkIndex, newIndex),
      }),
    }).then((r) => r.json());

    setArtworkIndex(newIndex);
    setArtworks((prev) => {
      return [...prev, ...result.newArtworks];
    });

    setIsLoadingMore(false);

    stopLoadingBar();
  }

  return (
    <>
      {/* SEO */}
      <NextSeo
        title={title}
        description={description}
        canonical="https://www.claudiobizzo.com/artworks"
        openGraph={{
          url: "https://www.claudiobizzo.com/artworks",
          title: title,
          description: description,
          images: [
            {
              url: "https://www.claudiobizzo.com/homepage_zoom_img.jpg",
              width: 1527,
              height: 1527,
              alt: "Claudio Bizzo, artigiano e creativo di opere in legno della provincia di Venezia",
              type: "image/jpeg",
            },
          ],
          siteName: title,
        }}
      />
      {/* JSON-LD */}
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: "Homepage",
            item: "https://www.claudiobizzo.com",
          },
          {
            position: 2,
            name: "Galleria dei Lavori",
            item: "https://www.claudiobizzo.com/artworks",
          },
        ]}
        key={`galleryBreadcrumb`}
      />
      <OrganizationJsonLd
        type="Corporation"
        logo="https://www.claudiobizzo.com/logo_full_2.png"
        legalName="Claudio Bizzo"
        name="Claudio Bizzo"
        address={{
          addressLocality: "Scorze",
          addressRegion: "VE",
          postalCode: "30037",
          addressCountry: "IT",
        }}
        contactPoint={[
          {
            telephone: "+39-345-283-9043",
            contactType: "customer service",
            email: "claudio.bizzo58@gmail.com",
            areaServed: "IT",
            availableLanguage: ["Italian"],
          },
        ]}
        // sameAs={["LINK SOCIAL (Facebook + Pinterest"]}
        url="https://www.claudiobizzo.com"
      />
      <WebPageJsonLd
        description={description}
        id={`https://www.claudiobizzo.com/artworks`}
      />
      <SocialProfileJsonLd
        type="Person"
        name="Claudio Bizzo"
        url="https://www.claudiobizzo.com"
        sameAs={[
          'https://www.facebook.com/profile.php?id=100090776381452',
          'https://www.pinterest.it/claudiobizzo58'
        ]}
      />
      {/* PAGE */}
      <Layout>
        <div className="mid mid-background-color gallery-page-mid">
          <div className="title-container">
            <h1 className="my-auto text-center">GALLERIA DEI LAVORI</h1>
          </div>
          <div id="gallery_cards_wrapper">
            <div className="container-fluid mt-2 mb-4">
              <div className="row">
                {artworks.map((artwork) => {
                  const name: string = artwork.imageFiles[0].name;
                  return (
                    <div
                      key={artwork.imageFiles[0].publicId}
                      className="col-lg-4"
                    >
                      <Link
                        href={
                          "/artworks/" +
                          (name === "no_image_available"
                            ? "not_available"
                            : artwork.imageFiles[0].publicId.split("/")[2])
                        }
                      >
                        <a>
                          <div className="card-flyer card-block">
                            <div className="text-box">
                              <div className="image-box">
                                <Image
                                  src={artwork.imageFiles[0].url}
                                  alt={artwork.data.title}
                                  layout="fill"
                                  objectFit="cover"
                                  placeholder="blur"
                                  blurDataURL="/spinner-1s-200px.gif"
                                />
                              </div>
                              <div className="text-container">
                                <h6>{artwork.data.title}</h6>
                                <button
                                  className="btn btn-lg custom-button custom-button-dark-secondary mt-4 mx-auto text-center d-block"
                                  onClick={() =>
                                    Router.push(
                                      "/artworks/" +
                                      (name === "no_image_available"
                                        ? "not_available"
                                        : artwork.imageFiles[0].publicId.split(
                                          "/"
                                        )[2])
                                    )
                                  }
                                >
                                  Esplora
                                </button>
                              </div>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {artworkIndex < folders.length && (
            <>
              <button
                className="btn btn-lg custom-button custom-button-dark my-5 mx-auto text-center d-block"
                onClick={handleLoadMore}
                disabled={isLoadingMore}
              >
                Carica altri Lavori
              </button>
            </>
          )}
          {artworkIndex >= folders.length && <div className="w-100 my-4" />}
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<
  GalleryPageProps
> = async (): Promise<GetStaticPropsResult<GalleryPageProps>> => {
  const folders: Folder[] = await getFolder(
    `${process.env.NEXT_PUBLIC_CLOUDINARY_MAIN_FOLDER}/LAVORI`
  );
  const initialArtworks: Artwork[] = [];

  for (let i = 0; i < 3; i++) {
    initialArtworks.push(
      await getPreviewArtwork(folders[i].path, "anteprima_galleria")
    );
  }

  return {
    props: {
      initialArtworks,
      folders,
    },
    revalidate: 60 * 60, // 1 hour
  };
};

export default GalleryPage;
