import Layout from "../components/Layout";
import Router from "next/router";
import { GetStaticProps, GetStaticPropsResult } from "next";
import { Artwork } from "../types/Artwork";
import Folder from "../types/Folder";
import { getFolder, getPreviewArtwork } from "../services/artwork";
import CustomCarousel from "../components/carousel/CustomCarousel";
import CustomTimeline from "../components/timeline/CustomTimeline";
import { getEvents } from "../services/event";
import { Event } from "../types/Event";

interface HomePageProps {
  featuredArtworks: Artwork[];
  events: Event[];
}

const IndexPage = ({ featuredArtworks, events }: HomePageProps) => {
  return (
    <Layout title="Claudio Bizzo">
      <div className="homepage-mid">
        <div className="homepage-background-image">
          <div className="row homepage-title resize-under-400-width">
            <div className="col">
              <h1>CLAUDIO BIZZO</h1>
              <h3 className="homepage-subtitle">Artigiano e Creativo</h3>
            </div>
          </div>
          {/* <div className='row justify-content-center homepage-description center-about-explorer-btn-under-half-width'>
            <p className='col hide-under-half-width'>Decorazioni per arredamento da interno ed esterno, create utilizzando tecniche produttive artigianali e completamente eco-sostenibili.</p>
            <div className='w-100' />
            <button 
              className="col-sm-3 btn btn-lg custom-button about-explorer-btn"
              onClick={() => Router.push('/about')}
            >
              Approfondisci
            </button>
          </div> */}
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
              if (item.key.startsWith(process.env.NEXT_PUBLIC_CLOUDINARY_MAIN_FOLDER)) {
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
          <h1 className="text-center text-light mb-1">EVENTI</h1>
        </div>
        <CustomTimeline events={events} />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async (): Promise<
  GetStaticPropsResult<HomePageProps>
> => {
  const folders: Folder[] = await getFolder(`${process.env.NEXT_PUBLIC_CLOUDINARY_MAIN_FOLDER}/LAVORI`);
  const featuredArtworks: Artwork[] = [];

  const events: Event[] = await getEvents(`${process.env.NEXT_PUBLIC_CLOUDINARY_MAIN_FOLDER}/EVENTI`);

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
      events,
    },
    revalidate: 60 * 60 * 6, // 6 hour
  };
};

export default IndexPage;
