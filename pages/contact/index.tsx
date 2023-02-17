import { NextSeo } from "next-seo";
import EmailForm from "../../components/email/EmailForm";
import Layout from "../../components/Layout";

// SEO
const title: string = "Contattami | Claudio Bizzo";
const description: string = `Nella pagina web Contattami è possibile contattare direttamente Claudio Bizzo.
Attraverso la compilazione dell'apposito form è possibile richiedere informazioni, un preventivo o personalizzazioni sui lavori.`;

const ContactPage = () => {
  return (
    <>
      {/* SEO */}
      <NextSeo
        title={title}
        description={description}
        canonical="https://www.claudiobizzo.com/contact"
        openGraph={{
          url: "https://www.claudiobizzo.com/contact",
          title: title,
          description: description,
          images: [
            {
              url: "https://www.claudiobizzo.com/homepage_zoom_img.jpg",
              width: 1527,
              height: 1527,
              alt: "Claudio Bizzo",
              type: "image/jpeg",
            },
          ],
          siteName: "Claudio Bizzo",
        }}
      />
      <Layout>
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
    </>
  );
};

export default ContactPage;
