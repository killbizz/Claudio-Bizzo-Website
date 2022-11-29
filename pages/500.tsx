import Link from "next/link";
import Router from "next/router";
import Layout from "../components/Layout"

const CustomError = () => {
  return (
    <>
      <Layout title="Error">
        <div className="error-page-mid mid-background-color align">
          <h1 className="text-center mt-5">Oooops ...</h1>
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
              onClick={() => Router.push('/about')}
            >
                Torna alla Homepage
            </button>
        </div>
      </Layout>
    </>
  );
};

export default CustomError;