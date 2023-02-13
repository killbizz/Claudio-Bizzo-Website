import Layout from "../../components/Layout";
import { GetStaticProps, GetStaticPropsResult } from "next";
import CustomTimeline from "../../components/timeline/CustomTimeline";
import { getEvents } from "../../services/event";
import { Event } from "../../types/Event";

// SEO
const title: string = "Eventi | Claudio Bizzo";
const description: string = `Nella pagina web Eventi sono presenti tutti gli eventi passati e futuri di Claudio Bizzo.`;

interface EventsPageProps {
  events: Event[];
}

const EventsPage = ({ events }: EventsPageProps) => {
  return (
    <Layout title={title} description={description}>
      <div className="events-page-mid mid-dark-background-color">
        <div className="title-container">
          <h1 className="text-center mb-1" style={{"color" : "white"}}>EVENTI</h1>
        </div>
        <CustomTimeline events={events} />
      </div>
    </Layout>
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
