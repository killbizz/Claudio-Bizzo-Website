import { GetServerSideProps, GetStaticPropsResult } from 'next';
import Layout from '../../components/Layout';
import { getSession } from 'next-auth/react';

interface GalleryPageProps {
    userId: string | null
}

const GalleryPage = ({ userId }: GalleryPageProps) => {

  return(
      <Layout title="Gallery Page">
          <div className="mid">
            <p>DAGHE</p>
          </div>
      </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<GalleryPageProps> = async ({params, req }): Promise<GetStaticPropsResult<GalleryPageProps>> => {
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

export default GalleryPage;