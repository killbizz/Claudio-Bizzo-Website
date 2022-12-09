import { GetServerSideProps, GetStaticPropsResult } from "next";
import EmailForm from "../../components/email/EmailForm";
import Layout from "../../components/Layout";

const ContactPage = () => {
  return (
    <Layout title="Contattami | I Soli di Claudio">
      <div className="mid mid-background-color">
        <div className="artwork-page-mid">
          <div className="container">
            <EmailForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
