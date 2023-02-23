import Image from "next/image";
import aboutMain from "../../public/about_main_img.jpg";
import aboutLab from "../../public/about_lab_img.png";
import Layout from "../../components/Layout";
import history from "../../data/about";
import Router from "next/router";
import { BreadcrumbJsonLd, ImageJsonLd, NextSeo, OrganizationJsonLd, WebPageJsonLd } from "next-seo";

// SEO
const title: string = "Chi Sono | Claudio Bizzo";
const description: string = `Scopri la storia di Claudio Bizzo attraverso una sua breve biografia e delle immagini che ritraggono Claudio nel suo laboratorio.`;

const AboutPage = () => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical="https://www.claudiobizzo.com/about"
        openGraph={{
          url: "https://www.claudiobizzo.com/about",
          title: title,
          description: description,
          images: [
            {
              url: "https://www.claudiobizzo.com/about_main_img.jpg",
              width: 3024,
              height: 4032,
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
            name: "Chi Sono",
            item: "https://www.claudiobizzo.com/about",
          },
        ]}
        key={`aboutBreadcrumb`}
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
        id={`https://www.claudiobizzo.com/about`}
      />
      <ImageJsonLd
        images={[
          {
            contentUrl: "https://www.claudiobizzo.com/about_main_img.jpg",
            creator: {
              "@type": "Person",
              name: "Claudio Bizzo",
            },
            creditText: "Claudio Bizzo",
            copyrightNotice: "© Claudio Bizzo",
          },
          {
            contentUrl: "https://www.claudiobizzo.com/about_lab_img.jpg",
            creator: {
              "@type": "Person",
              name: "Claudio Bizzo",
            },
            creditText: "Claudio Bizzo",
            copyrightNotice: "© Claudio Bizzo",
          }
        ]}
      />
      {/* PAGE */}
      <Layout>
        <div className="mid about-page-mid mid-background-color">
          {/* grid layout */}
          <div className="row mx-0">
            {/* left column */}
            <div className="col-lg-6 px-0 my-0">
              {/* flexbox with flex-direction-column */}
              <div className="d-flex flex-column h-100">
                {/* flex element with fixed height */}
                <div className="about-image my-0">
                  <Image
                    src={aboutMain}
                    id="aboutMainImg"
                    alt="Claudio Bizzo ad un mercatino"
                    // priority
                    placeholder="blur"
                    layout="fill"
                    objectFit="cover"
                    objectPosition={"0% 25%"}
                  />
                  {/* title for small screen */}
                  <div className="title-container about-page-small-screen">
                    <h1 className="my-auto text-center">CHI SONO</h1>
                  </div>
                </div>
                {/* flex element with flex-grow-1 to fill all the vertical remaining space of the column */}
                <div
                  id="about-contacts-box-big-screen"
                  className="px-0 mid-background-color about-contacts-box d-flex justify-content-center align-items-center flex-grow-1"
                >
                  <div className="about-contacts-container my-4">
                    <div className="row mx-0 mb-2">
                      <div className="col-12 mt-auto text-center">
                        <span className="font-weight-bold text-center">
                          CLAUDIO BIZZO
                        </span>
                      </div>
                    </div>
                    <div className="row mx-0">
                      <div className="col-12 text-center mt-4 mb-2">
                        <span className="text-center">
                          30037 , Scorzè (VE) , Italia
                        </span>
                      </div>
                      <div className="col-12 text-center mb-4">
                        <a
                          href="mailto:claudio.bizzo58@gmail.com"
                          className="emailLink custom-link font-italic"
                        >
                          claudio.bizzo58@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="row mx-0 mt-3">
                      <div className="d-grid gap-3 d-md-flex justify-content-md-start mb-2">
                        <button
                          className="btn btn-lg custom-button custom-button-dark-secondary my-auto mx-auto text-center d-block"
                          onClick={() => Router.push("/contact")}
                        >
                          Contattami
                        </button>
                        <button
                          className="btn btn-lg custom-button custom-button-dark my-auto mx-auto text-center d-block"
                          onClick={() => Router.push("/artworks")}
                        >
                          Esplora la Galleria
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* right column */}
            <div className="col-lg-6 px-0 my-0">
              {/* flexbox with flex-direction-column */}
              <div className="d-flex flex-column h-100">
                {/* flex element with fixed height */}
                <div className="title-container">
                  <h1 className="my-auto text-center">CHI SONO</h1>
                </div>
                {/* flex element with flex-grow-1 to fill all the vertical remaining space of the column */}
                <div className="about-history-container mid-dark-background-color flex-grow-1">
                  <div className="font-italic">{history}</div>
                </div>
                {/* flex element with flex-grow-1 to fill all the vertical remaining space of the column */}
                <div className="lab-image my-0 flex-grow-1">
                  <Image
                    src={aboutLab}
                    id="aboutLabImg"
                    alt="Claudio Bizzo nel suo laboratorio"
                    // priority
                    placeholder="blur"
                    layout="fill"
                    objectFit="cover"
                    objectPosition={"0% 15%"}
                  />
                </div>
                {/* about-contacts-box for small screen */}
                {/* flex element with flex-grow-1 to fill all the vertical remaining space of the column */}
                <div
                  id="about-contacts-box-small-screen"
                  className="px-0 mid-background-color about-contacts-box d-none justify-content-center align-items-center flex-grow-1"
                >
                  <div className="about-contacts-container my-4">
                    <div className="row mx-0 mb-2">
                      <div className="col-12 mt-auto text-center">
                        <span className="font-weight-bold text-center">
                          CLAUDIO BIZZO
                        </span>
                      </div>
                    </div>
                    {/* Decorazioni per arredamento da interno ed esterno, create utilizzando tecniche produttive artigianali e completamente eco-sostenibili */}
                    <div className="row mx-0">
                      <div className="col-12 text-center mt-4 mb-2">
                        <span className="text-center">
                          30037 , Scorzè (VE) , Italia
                        </span>
                      </div>
                      <div className="col-12 text-center mb-4">
                        <a
                          href="mailto:claudio.bizzo58@gmail.com"
                          className="emailLink custom-link font-italic"
                        >
                          claudio.bizzo58@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="row mx-0 mt-3">
                      <div className="d-grid gap-3 d-md-flex justify-content-md-start mb-2">
                        <button
                          className="btn btn-lg custom-button custom-button-dark-secondary my-auto mx-auto text-center d-block"
                          onClick={() => Router.push("/contact")}
                        >
                          Contattami
                        </button>
                        <button
                          className="btn btn-lg custom-button custom-button-dark my-auto mx-auto text-center d-block"
                          onClick={() => Router.push("/artworks")}
                        >
                          Esplora la Galleria
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AboutPage;
