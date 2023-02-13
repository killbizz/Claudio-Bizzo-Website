import EmailForm from "../../components/email/EmailForm";
import Layout from "../../components/Layout";

// SEO
const title: string = "Contattami | Claudio Bizzo";
const description: string = `Nella pagina web Contattami è possibile contattare direttamente Claudio Bizzo.
Attraverso la compilazione dell'apposito form è possibile richiedere informazioni, preventivi e personalizzazioni dei lavori.`;

const ContactPage = () => {
  return (
    <Layout title={title} description={description}>
      <div className="mid mid-background-color">
        <div className="artwork-page-mid">
          <div className="title-container">
            <h1 className="my-auto text-center">CONTATTAMI</h1>
          </div>
          <div className="container text-center">
            <EmailForm />
          </div> 
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
