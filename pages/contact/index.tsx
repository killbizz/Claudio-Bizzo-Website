import { GetServerSideProps, GetStaticPropsResult } from 'next';
import Layout from '../../components/Layout';
import { getSession } from 'next-auth/react';

interface ContactPageProps {
    userId: string | null
}

const ContactPage = ({ userId }: ContactPageProps) => {

  return(
      <Layout title="Contact Page">
          <div className="mid">
            <p>DAGHE</p>
          </div>
      </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<ContactPageProps> = async ({params, req }): Promise<GetStaticPropsResult<ContactPageProps>> => {
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

export default ContactPage;