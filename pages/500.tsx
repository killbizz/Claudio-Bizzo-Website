import Link from "next/link";
import Router from "next/router";
import Layout from "../components/Layout"

const CustomError500 = () => {
  return (
    <>
      <Layout title="Errore | I Soli di Claudio">
        <div className="error-page-mid mid-background-color justify-content-center">
          <div className="container col-xxl-8">
            <div className="row flex-lg-row-reverse align-items-center g-5">
                <div className="col-10 col-sm-8 col-lg-5 justify-content-center my-auto mx-auto pt-5">
                    <img src="/500_mascotte.png" className="d-block img-fluid ml-4" alt="500 Internal Server Error" width="1200" height="900" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 text-center fw-bold lh-1 mb-5">Si è verificato un errore</h1>
                    <p className="lead">
                     Per favore
                     <Link legacyBehavior href="/contact?reason=errore-sito"> 
                        <a className="custom-darkblue-link"> contattami </a>
                      </Link>
                     spiegando il problema che hai incontrato per permettermi di migliorare il servizio.
                    </p>
                    <p className="lead text-center mt-5">Mi scuso per il disagio.</p>
                    <div className="d-grid gap-3 d-md-flex justify-content-md-start my-5 py-2">
                        <button 
                            className="btn btn-lg custom-button custom-button-dark-secondary my-auto mx-auto text-center d-block"
                            onClick={() => Router.push('/')}
                        >
                            Torna alla Homepage
                        </button>
                        <button 
                            className="btn btn-lg custom-button custom-button-dark my-auto mx-auto text-center d-block"
                            onClick={() => Router.push('/gallery')}
                        >
                            Esplora la Galleria
                        </button>
                    </div>
                </div>
            </div>
          </div>
          {/* <h1 className="text-center mt-5">Oooops ...</h1>
          <h2 className="text-center my-2">
            Si è verificato un errore 🤔
          </h2>
          <div className="image-cropper mx-auto text-center">
            <img src="/500_mascotte.png" className="d-block rounded" alt="500 Internal Server Error" width="300" height="300" loading="lazy" />
          </div>
          <div className="text-center mt-2 mb-3 mx-auto row w-75">
              <h3 className="d-inline col">
                Per favore
                <Link className="simpleLink" href="/contact?reason=errore-sito"> contattami </Link>
                spiegando il problema che hai incontrato per permettermi di migliorare il servizio.
              </h3>
              <div className="w-100" />
              <h3 className="d-inline mt-5 col">Mi scuso per il disagio.</h3>
          </div>
          <button 
              className="btn btn-lg custom-button mt-2 mb-4 mx-auto text-center d-block"
              onClick={() => Router.push('/')}
            >
                Torna alla Homepage
            </button> */}
        </div>
      </Layout>
    </>
  );
};

export default CustomError500;