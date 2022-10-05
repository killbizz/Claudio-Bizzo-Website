import { GetServerSideProps, GetStaticPropsResult } from 'next';
import Layout from '../../components/Layout';
import { getSession } from 'next-auth/react';

interface ArtworkPageProps {
    userId: string | null
}

const ArtworkPage = ({ userId }: ArtworkPageProps) => {

  return(
      <Layout title="Artwork Page">
          <div className="mid">
            <p>DAGHE</p>
          </div>
      </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<ArtworkPageProps> = async ({params, req }): Promise<GetStaticPropsResult<ArtworkPageProps>> => {
    const session = await getSession({ req });

    const accessToken = session?.accessToken;
    // election doesn't exist
    // if(election === undefined){
    //   return {
    //     redirect: {
    //       destination: "/user-dashboard",
    //       permanent: false,
    //     },
    //   };
    // }
    const id: string | undefined =  session?.user.id;
    return {
      props: {
        userId: id === undefined ? null : id
      }
    };
};

export default ArtworkPage;