import { GetServerSideProps, GetStaticPropsResult } from 'next';
import Layout from '../../components/Layout';

const ContactPage = () => {

  return(
      <Layout title="I Soli di Claudio | Contattami">
          <div className="mid">
            <p>DAGHE</p>
          </div>
      </Layout>
  );
}

export default ContactPage;