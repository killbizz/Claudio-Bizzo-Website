import Image from "next/image";
import Layout from "../../components/Layout";
import history from "../../data/about";

const AboutPage = () => {
  return (
    <Layout title="Chi Sono | Claudio Bizzo">
      <div className="mid mid-background-color">
        <div className="row mx-0">
          <div className="col-lg-6 px-0 my-0">
            <div className="row mx-0">
              <div className="col-12 px-0 my-0 about-image">
                <Image
                  src="/about_main_img.jpg"
                  id="aboutImg"
                  alt="Claudio Bizzo about image"
                  priority
                  layout="fill"
                  objectFit="cover"
                  objectPosition={"0% 25%"}
                />
              </div>
              <div className="col px-0 my-0 h-100 mid-background-color">
                NOME-COGNOME, CONTATTI (email, indirizzo) + BUTTONS (contattami, esplora la galleria)
              </div>
            </div>
          </div>
          <div className="col-lg-6 px-0 my-0">
            <div className="title-container">
              <h1 className="my-auto text-center">CHI SONO</h1>
            </div>
            <div className="about-history-container mid-dark-background-color py-2">
              <div>{history}</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
