import Image from "next/image";
import aboutMain from '../../public/about_main_img.jpg'
import aboutLab from '../../public/about_lab_img.png'
import Layout from "../../components/Layout";
import history from "../../data/about";
import Router from "next/router";

const AboutPage = () => {
  return (
    <Layout title="Chi Sono | Claudio Bizzo">
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
              <div id="about-contacts-box-big-screen" className="px-0 mid-background-color about-contacts-box d-flex justify-content-center align-items-center flex-grow-1">
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
                      <a href="mailto:claudio.bizzo58@gmail.com" className="emailLink custom-link font-italic" >claudio.bizzo58@gmail.com</a>
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
                        onClick={() => Router.push("/gallery")}
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
              <div id="about-contacts-box-small-screen" className="px-0 mid-background-color about-contacts-box d-none justify-content-center align-items-center flex-grow-1">
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
                      <a href="mailto:claudio.bizzo58@gmail.com" className="emailLink custom-link font-italic" >claudio.bizzo58@gmail.com</a>
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
                        onClick={() => Router.push("/gallery")}
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
  );
};

export default AboutPage;
