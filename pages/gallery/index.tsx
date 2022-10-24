import { GetServerSideProps, GetStaticPropsResult } from 'next';
import Layout from '../../components/Layout';

interface GalleryPageProps {
    userId: string | null
}

const GalleryPage = ({ userId }: GalleryPageProps) => {

  return(
      <Layout title="I Soli di Claudio | Galleria">
          <div className="mid">
            <p>${userId}</p>
          </div>
      </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<GalleryPageProps> = async ({params, req }): Promise<GetStaticPropsResult<GalleryPageProps>> => {

    // const accessToken = session?.accessToken;
    // election doesn't exist
    // if(election === undefined){
    //   return {
    //     redirect: {
    //       destination: "/user-dashboard",
    //       permanent: false,
    //     },
    //   };
    // }
    // const id: string | undefined =  session?.user.id;
    return {
      props: {
        userId: "DAGHE"
      }
    };
};

export default GalleryPage;