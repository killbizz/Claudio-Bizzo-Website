import { BreadcrumbJsonLd, NextSeo, OrganizationJsonLd, WebPageJsonLd } from "next-seo";
import EmailForm from "../../components/email/EmailForm";
import Layout from "../../components/Layout";

// SEO
const title: string = "Contattami | Claudio Bizzo";
const description: string = `Contatta direttamente Claudio Bizzo per chiedere informazioni, un preventivo o personalizzazioni sui lavori compilando l'apposito form online.`;

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
              alt: "Claudio Bizzo, artigiano e creativo di opere in legno della provincia di Venezia",
              type: "image/jpeg",
            },
          ],
          siteName: title,
        }}
      />
      {/* JSON-LD */}
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: "Homepage",
            item: "https://www.claudiobizzo.com",
          },
          {
            position: 2,
            name: "Contattami",
            item: "https://www.claudiobizzo.com/contact",
          }
        ]}
        key={`contactBreadcrumb`}
      />
      <OrganizationJsonLd
        type="Corporation"
        logo="https://www.claudiobizzo.com/logo_full_2.png"
        legalName="Claudio Bizzo"
        name="Claudio Bizzo"
        address={{
          addressLocality: "Scorze",
          addressRegion: "VE",
          postalCode: "30037",
          addressCountry: "IT",
        }}
        contactPoint={[
          {
            telephone: "+39-345-283-9043",
            contactType: "customer service",
            email: "claudio.bizzo58@gmail.com",
            areaServed: "IT",
            availableLanguage: ["Italian"],
          },
        ]}
        // sameAs={["LINK SOCIAL (Facebook + Pinterest"]}
        url="https://www.claudiobizzo.com"
      />
      <WebPageJsonLd
        description={description}
        id={`https://www.claudiobizzo.com/contact`}
      />
      {/* PAGE */}
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
