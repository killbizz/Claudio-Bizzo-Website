import Layout from "../../components/Layout";
import { GetStaticProps, GetStaticPropsResult } from "next";
import CustomTimeline from "../../components/timeline/CustomTimeline";
import { getEvents } from "../../services/event";
import { Event } from "../../types/Event";
import { Fragment } from "react";
import { EventJsonLd, NextSeo } from "next-seo";

// SEO
const title: string = "Eventi | Claudio Bizzo";
const description: string = `Scopri tutti gli eventi passati e futuri di Claudio Bizzo.`;

interface EventsPageProps {
  events: Event[];
}

const EventsPage = ({ events }: EventsPageProps) => {
  return (
    <>
      {/* SEO */}
      <NextSeo
        title={title}
        description={description}
        canonical="https://www.claudiobizzo.com/events"
        openGraph={{
          url: "https://www.claudiobizzo.com/events",
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
      {/* EVENTS JSON-LD */}
      {events.map((value) => (
        <Fragment key={value.nome_evento}>
          <EventJsonLd
            name={value.nome_evento}
            keyOverride={value.nome_evento}
            startDate={`${value.data_inizio.split("/").join("-")}T00:00:00.000Z`}
            endDate={`${value.data_fine.split("/").join("-")}T00:00:00.000Z`}
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
      <div className="events-page-mid mid-dark-background-color">
        <div className="title-container">
          <h1 className="text-center mb-1" style={{"color" : "white"}}>EVENTI</h1>
        </div>
        <CustomTimeline events={events} />
      </div>
    </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<EventsPageProps> = async (): Promise<
  GetStaticPropsResult<EventsPageProps>
> => {

  const events: Event[] = await getEvents(
    `${process.env.NEXT_PUBLIC_CLOUDINARY_MAIN_FOLDER}/EVENTI`
  );

  return {
    props: {
      events
    },
    revalidate: 60 * 60, // 1 hour
  };
};

export default EventsPage;
