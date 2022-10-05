import { GetServerSideProps, GetStaticPropsResult } from 'next';
import { isAdmin, isUserLoggedIn } from '../../services/auth';
import { getSession, signOut, useSession } from 'next-auth/react';
import { NextPageWithAuth } from '../../types/auth-types';
import Layout from '../../components/Layout';

interface AdminDashboardProps {
  boh: string
}

const AdminDashboard: NextPageWithAuth<AdminDashboardProps> = ({ boh } : AdminDashboardProps) => {

  const { data: session } = useSession();

  return (
    <Layout title="Admin Dashboard">
        <div className="mid">
            <p>{boh}</p>
        </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<AdminDashboardProps> = async ({ req }): Promise<GetStaticPropsResult<AdminDashboardProps>> => {
  const session = await getSession({ req });

  if(!(isUserLoggedIn(session) && isAdmin(session))) {
    signOut({ callbackUrl: '/login', redirect: false });
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const accessToken = session?.accessToken;
  return {
    props: {
      boh: "DAGHE"
    }
  };
};

AdminDashboard.auth = true;

export default AdminDashboard;