import Layout from "../components/Layout";
import Router from "next/router";
import { GetStaticProps, GetStaticPropsResult } from "next";
import { Artwork } from "../types/Artwork";
import Folder from "../types/Folder";
import { getFolder, getPreviewArtwork } from "../services/artwork";
import CustomCarousel from "../components/carousel/CustomCarousel";
import { getEvents } from "../services/event";
import { Event } from "../types/Event";
import Image from "next/image";
import Link from "next/link";
import backgroundImage from "../public/homepage_main_img.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Fragment } from "react";
import { EventJsonLd, NextSeo, ProductJsonLd } from "next-seo";

// SEO
const title: string = "Homepage | Claudio Bizzo";
const description: string = `Claudio Bizzo è un artigiano e creativo risiedente nell'area metropolitana di Venezia.
In questo sito web Claudio mette in mostra le proprie creazioni artigianali Made in Italy, pensate e realizzate a mano nel suo laboratorio utilizzando materiali provenienti dal proprio territorio.
I prodotti realizzati sono tutti pezzi unici e riguardano principalmente cornici per specchi o quadri, coroncine, festoni, lampade e oggetti ornamentali per interni o esterni di diverse forme.
Attraverso l'apposita sezione Contattami è possibile richiedere un preventivo o una personalizzazione dei lavori esposti.`;

interface HomePageProps {
  featuredArtworks: Artwork[];
  featuredEvents: Event[];
}

const IndexPage = ({ featuredArtworks, featuredEvents }: HomePageProps) => {
  return (
    <>
      {/* SEO */}
      <NextSeo
        title={title}
        description={description}
        canonical="https://www.claudiobizzo.com"
        openGraph={{
          url: "https://www.claudiobizzo.com",
          title: title,
          description: description,
          images: [
            {
              url: "https://www.claudiobizzo.com/homepage_zoom_img.jpg",
              width: 1527,
              height: 1527,
              alt: "Claudio Bizzo",
              type: "image/jpeg",
            },
          ],
          siteName: "Claudio Bizzo",
        }}
      />
      {/* ARTWORKS JSON-LD */}
      {featuredArtworks.map((value) => (
        <Fragment key={value.data.title}>
          <ProductJsonLd
            productName={value.data.title}
            keyOverride={value.data.title}
            images={Array.from(value.imageFiles, (v) => v.url)}
            description={value.data.description}
            brand="Claudio Bizzo"
            manufacturerName="Claudio Bizzo"
            manufacturerLogo="https://www.claudiobizzo.com/logo_full_2.png"
            material={value.data.materials}
          />
        </Fragment>
      ))}
      {/* EVENTS JSON-LD */}
      {featuredEvents.map((value) => (
        <Fragment key={value.nome_evento}>
          <EventJsonLd
            name={value.nome_evento}
            keyOverride={value.nome_evento}
            startDate={`${value.data_inizio.split("/").join("-")}T00:00:00.000Z`}
            endDate={`${value.data_fine.split("/").join("-")}T00:00:00.000Z`}
            performers={[
              {
                name: 'Claudio Bizzo',
              }
            ]}
            organizer={{
              type: 'Organization',
              name: 'Claudio Bizzo',
              url: 'https://www.claudiobizzo.com',
            }}
            location={{
              name: value.nome_evento,
              address: value.luogo,
            }}
            description={value.descrizione}
          />
        </Fragment>
      ))}
      {/* PAGE */}
      <Layout>
        <div className="homepage-mid">
          <div className="homepage-background-image">
            <Image
              src={backgroundImage}
              alt="Claudio Bizzo"
              className="homepage-background-image"
              priority={true}
              unoptimized
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="row homepage-title resize-under-400-width">
              <div className="col">
                <h1>CLAUDIO BIZZO</h1>
                <h3 className="homepage-subtitle">Artigiano e Creativo</h3>
              </div>
            </div>
            <div className="row homepage-citation justify-content-center hide-under-half-width">
              <blockquote style={{ marginBottom: "0px" }}>
                <p
                  className="col text-center"
                  lang="it"
                  style={{ marginBottom: "0px" }}
                >
                  “Spesso il mio cuore parla attraverso le mani.
                  <br />
                  La creatività, la fantasia sono per me passione <br />e gusto
                  per la vita.”
                </p>
              </blockquote>
            </div>
          </div>
          <div className="scrolldown">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="homepage-mid-2 mid-background-color">
          <div className="title-container">
            <h1 className="my-auto text-center">LAVORI IN EVIDENZA</h1>
          </div>
          <div className="homepage-carousel-container row justify-content-center align-items-center mx-auto">
            <CustomCarousel
              artworks={featuredArtworks}
              autoplay={true}
              handleOnClickItem={(index, item: any) => {
                if (
                  item.key.startsWith(
                    process.env.NEXT_PUBLIC_CLOUDINARY_MAIN_FOLDER
                  )
                ) {
                  // redirect to the item page
                  Router.push("/artwork/" + item.key.split("/")[2]);
                }
              }}
            />
          </div>
          <div className="homepage-gallery-explorer-container row justify-content-center align-items-center">
            <button
              className="btn btn-lg custom-button custom-button-dark gallery-explorer-btn mx-auto mb-5 text-center d-block col"
              onClick={() => Router.push("/gallery")}
            >
              Esplora la Galleria
            </button>
          </div>
        </div>
        <div className="homepage-mid-3 mid-dark-background-color">
          <div className="title-container">
            <h1 className="text-center mb-5" style={{ color: "white" }}>
              EVENTI PRINCIPALI
            </h1>
          </div>
          {/* <h3 className="homepage-subtitle text-light text-center my-5">
            Dove sono stato
          </h3> */}
          <VerticalTimeline className="vertical-timeline-custom-line mt-2 ">
            {featuredEvents.map((value) => (
              <Fragment key={value.nome_evento}>
                <VerticalTimelineElement
                  id={value.nome_evento}
                  className="vertical-timeline-element--work vertical-timeline-element-dark"
                  visible
                  contentStyle={{ background: "#ffefde", color: "black" }}
                  date={
                    value.data_inizio.split("/").reverse().join("/") +
                    (value.data_inizio !== value.data_fine
                      ? "   -   " +
                        value.data_fine.split("/").reverse().join("/")
                      : "")
                  }
                  iconStyle={{ background: "#c29f7a", color: "#ffefde" }}
                  icon={
                    <span
                      key={value.nome_evento}
                      className="material-symbols-outlined"
                    >
                      location_on
                    </span>
                  }
                >
                  <h3 className="vertical-timeline-element-title mb-4">
                    {value.nome_evento}
                  </h3>
                  <p className="vertical-timeline-element-subtitle mb-4 font-italic">
                    {value.luogo}
                  </p>
                  {value.descrizione !== "" && <p>{value.descrizione}</p>}
                </VerticalTimelineElement>
              </Fragment>
            ))}
          </VerticalTimeline>
          <div className="artwork-get-info-container w-50 row justify-content-center align-items-center">
            <h3
              className="homepage-subtitle text-center mb-4"
              style={{ color: "white" }}
            >
              Vuoi incontrarmi?
            </h3>
            <div className="w-100" />
            <button
              className="btn btn-lg custom-button custom-button-dark-secondary artwork-get-info-btn mt-4 mx-auto text-center d-block col"
              onClick={() => Router.push("/contact")}
            >
              Contattami
            </button>
            <button
              className="btn btn-lg custom-button custom-button-dark artwork-get-info-btn mt-4 mx-auto text-center d-block col"
              onClick={() => Router.push("/events")}
            >
              Eventi Futuri
            </button>
          </div>
        </div>
        <div className="homepage-sponsors mid-background-color">
          <div className="title-container">
            <h1 className="my-auto text-center">SPONSORS</h1>
          </div>
          <div className="container-fluid sponsors-container px-0">
            <div className="row">
              <div className="col-md-6 d-flex my-2 justify-content-center align-items-center">
                <Link href="https://www.trevigianacollanti.it/">
                  <a>
                    <div>
                      <Image
                        src="/trevigiana_collanti_logo.webp"
                        alt="Trevigiana Collanti logo"
                        priority
                        width={167}
                        height={110}
                      />
                    </div>
                  </a>
                </Link>
              </div>
              <div className="col-md-6 d-flex my-2 justify-content-center align-items-center">
                <Link href="http://www.rubyklein.it/">
                  <a>
                    <div>
                      <Image
                        src="/ruby_klein_logo.png"
                        alt="Ruby Klein logo"
                        priority
                        width={167}
                        height={110}
                      />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async (): Promise<
  GetStaticPropsResult<HomePageProps>
> => {
  const folders: Folder[] = await getFolder(
    `${process.env.NEXT_PUBLIC_CLOUDINARY_MAIN_FOLDER}/LAVORI`
  );
  const featuredArtworks: Artwork[] = [];

  const featuredEvents: Event[] = await getEvents(
    `${process.env.NEXT_PUBLIC_CLOUDINARY_MAIN_FOLDER}/EVENTI`,
    "anteprima_eventi"
  );

  for (let i = 0; i < folders.length; i++) {
    const artwork: Artwork = await getPreviewArtwork(
      folders[i].path,
      "anteprima_home"
    );
    if (artwork !== null) featuredArtworks.push(artwork);
  }

  return {
    props: {
      featuredArtworks,
      featuredEvents,
    },
    revalidate: 60 * 60, // 1 hour
  };
};

export default IndexPage;
