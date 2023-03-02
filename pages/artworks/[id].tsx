import { GetStaticProps, GetStaticPropsResult, GetStaticPaths } from "next";
import CustomCarousel from "../../components/carousel/CustomCarousel";
import Layout from "../../components/Layout";
import { getArtworkInFolder, getFolder } from "../../services/artwork";
import { Artwork } from "../../types/Artwork";
import Folder from "../../types/Folder";
import Router from "next/router";
import {
  BreadcrumbJsonLd,
  ImageJsonLd,
  NextSeo,
  OrganizationJsonLd,
  WebPageJsonLd,
} from "next-seo";
import ShareButton from "../../components/share/ShareButton";

interface ArtworkPageProps {
  artwork: Artwork;
  id: string;
}

const ArtworkPage = ({ artwork, id }: ArtworkPageProps) => {
  return (
    <>
      {/* SEO */}
      <NextSeo
        title={`${artwork.data.title} | Claudio Bizzo`}
        description={`${artwork.data.title} : ${artwork.data.description}`}
        canonical={`https://www.claudiobizzo.com/artworks/${id}`}
        openGraph={{
          url: `https://www.claudiobizzo.com/artworks/${id}`,
          title: `${artwork.data.title} | Claudio Bizzo`,
          description: `${artwork.data.title} : ${artwork.data.description}`,
          images: [
            {
              url: artwork.imageFiles[0].url,
              alt:
                artwork.imageFiles[0].name +
                " : opera di Claudio Bizzo, artigiano e creativo della provincia di Venezia",
              type: `image/${artwork.imageFiles[0].extension}`,
            },
          ],
          siteName: `${artwork.data.title} | Claudio Bizzo`,
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
          {
            position: 3,
            name: `${artwork.data.title} | Claudio Bizzo`,
            item: `https://www.claudiobizzo.com/artworks/${id}`,
          },
        ]}
        key={`${id}Breadcrumb`}
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
        description={`${artwork.data.title} : ${artwork.data.description}`}
        id={`https://www.claudiobizzo.com/artworks/${id}`}
      />
      <ImageJsonLd
        images={artwork.imageFiles.map((value) => ({
          contentUrl: value.url,
          creator: {
            "@type": "Person",
            name: "Claudio Bizzo",
          },
          creditText: "Claudio Bizzo",
          copyrightNotice: "© Claudio Bizzo",
        }))}
      />
      {/* PAGE */}
      <Layout>
        <div className="mid mid-background-color">
          <div className="container-fluid h-100">
            <div className="row h-100">
              <div className="col-xl artwork-page-container h-100">
                <div className="artwork-page-mid">
                  <div className="title-container">
                    <h1 className="my-auto text-center">
                      {artwork.data.title}
                    </h1>
                  </div>
                  <div className="artwork-page-carousel-container row justify-content-center align-items-center">
                    <CustomCarousel
                      artworks={Array<Artwork>().concat(artwork)}
                      autoplay={false}
                    />
                  </div>
                </div>
              </div>
              <div className="col artwork-page-container artwork-right-section-background">
                <div className="artwork-right-section-container">
                  <div className="artwork-share-and-info-container row">
                    <div className="col-md d-flex justify-content-center align-items-center">
                      <div className="artwork-get-info-container row justify-content-center align-items-center">
                        <p className="col text-center mb-2">Sei interessato?</p>
                        <div className="w-100" />
                        <button
                          className="btn btn-lg custom-button custom-button-dark artwork-get-info-btn mx-auto text-center d-block col"
                          onClick={() => Router.push("/contact")}
                        >
                          Chiedi Informazioni
                        </button>
                      </div>
                    </div>
                    <div className="artwork-page-share-button-container col-md d-flex justify-content-center align-items-center">
                      <ShareButton
                        urlToShare={`https://www.claudiobizzo.com/artworks/${id}`}
                        titleToShare={`${artwork.data.title} | Claudio Bizzo`}
                        descriptionToShare={`${artwork.data.title} : ${artwork.data.description}`}
                        imageToShare={artwork.imageFiles[0].url}
                        hashtagToShare="#artigianato"
                      />
                    </div>
                  </div>
                  <div className="artwork-features-container pt-2">
                    <div className="row justify-content-center">
                      <div className="col bigScreen col-sm-auto">
                        <i className="fa fa-info-circle fa-2x artwork-feature-icon" />
                      </div>
                      <div className="col smallScreen col-3">
                        <i className="fa fa-info-circle fa-2x artwork-feature-icon" />
                      </div>
                      <div className="col">
                        <p>{artwork.data.availability}</p>
                      </div>
                    </div>

                    <div className="row justify-content-center">
                      <div className="col bigScreen col-sm-auto pt-1">
                        <span className="material-symbols-outlined artwork-feature-icon">
                          handyman
                        </span>
                      </div>
                      <div className="col smallScreen col-3 pt-2">
                        <span className="material-symbols-outlined artwork-feature-icon">
                          handyman
                        </span>
                      </div>
                      <div className="col">
                        <p>{artwork.data.materials}</p>
                      </div>
                    </div>

                    <div className="row justify-content-center">
                      <div className="col bigScreen col-sm-auto pt-1">
                        <i className="fa fa-arrows-alt fa-2x artwork-feature-icon" />
                      </div>
                      <div className="col smallScreen col-3 pt-2">
                        <i className="fa fa-arrows-alt fa-2x artwork-feature-icon" />
                      </div>
                      <div className="col">
                        <p>{artwork.data.dimensions}</p>
                      </div>
                    </div>

                    <div className="row justify-content-center">
                      <div
                        className="col bigScreen col-sm-auto"
                        style={{ paddingLeft: "11px" }}
                      >
                        <i className="fa fa-leaf fa-2x artwork-feature-icon" />
                      </div>
                      <div className="col smallScreen col-3">
                        <i className="fa fa-leaf fa-2x artwork-feature-icon" />
                      </div>
                      <div className="col">
                        <p>Manodopera eco-sostenibile</p>
                      </div>
                    </div>

                    <div className="row justify-content-center">
                      <div
                        className="col bigScreen col-sm-auto"
                        style={{ paddingLeft: "11px" }}
                      >
                        <i className="fa fa-recycle fa-2x artwork-feature-icon" />
                      </div>
                      <div className="col smallScreen col-3">
                        <i className="fa fa-recycle fa-2x artwork-feature-icon" />
                      </div>
                      <div className="col">
                        <p>Utilizzo di materiali riciclati</p>
                      </div>
                    </div>
                  </div>
                  <div className="artwork-description-container py-3">
                    <div className="my-auto">{artwork.data.description}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  let folders: Folder[] = [];

  try {
    folders = await getFolder(
      `${process.env.NEXT_PUBLIC_CLOUDINARY_MAIN_FOLDER}/LAVORI`
    );
  } catch (error) {
    console.error(error);
    throw error;
  }

  // Get the paths we want to pre-render
  const paths = folders.map((folder) => ({
    params: { id: folder.name },
  }));

  // pre-render only these paths at build time.
  // { fallback: "blocking" } => new paths not returned by getStaticPaths will wait for the HTML to be generated, identical to SSR (hence why blocking),
  // and then be cached for future requests so it only happens once per path
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<ArtworkPageProps> = async ({
  params,
}): Promise<GetStaticPropsResult<ArtworkPageProps>> => {
  let a: Artwork = null;
  try {
    a = await getArtworkInFolder(
      `${process.env.NEXT_PUBLIC_CLOUDINARY_MAIN_FOLDER}/LAVORI/` +
        params.id.toString()
    );
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
  return {
    props: {
      artwork: a,
      id: params.id.toString(),
    },
    revalidate: 60 * 60, // 1 hour
  };
};

export default ArtworkPage;
