import { GetServerSideProps, GetStaticPropsResult } from 'next';
import Layout from '../../components/Layout';
import { getSession } from 'next-auth/react';

interface AboutPageProps {
    userId: string | null
}

const AboutPage = ({ userId }: AboutPageProps) => {

  return(
      <Layout title="About Page">
          <div className="mid">
            <p>DAGHE</p>
          </div>
      </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<AboutPageProps> = async ({params, req }): Promise<GetStaticPropsResult<AboutPageProps>> => {
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

export default AboutPage;