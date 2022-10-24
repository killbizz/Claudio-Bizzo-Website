import { GetServerSideProps, GetStaticPropsResult } from 'next';
import Layout from '../../components/Layout';

interface ArtworkPageProps {
    artworkName: string
}

const ArtworkPage = ({ artworkName } : ArtworkPageProps) => {

  return(
      <Layout title = {`I Soli di Claudio | ${artworkName}`}>
          <div className="mid">
            <p>${artworkName}</p>
          </div>
      </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<ArtworkPageProps> = async ({params, req }): Promise<GetStaticPropsResult<ArtworkPageProps>> => {

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
        artworkName : "DAGHE"
      }
    };
};

export default ArtworkPage;