import Link from "next/link";
import Layout from "../components/Layout"

const CustomError = () => {
  return (
    <>
      <Layout title="Error">
        <h1 className="text-center my-5">Oooops ...</h1>
        <h2 className="text-center mb-5">
          An Internal Server Error occurred 🤔
        </h2>
        <div className="image-cropper mx-auto text-center">
          <img src="/images/500_error_2.png" className="d-block rounded" alt="500 Internal Server Error" width="400" height="300" loading="lazy" />
        </div>
        <ul className="text-center my-4">
            <li className="my-2"><h3 className="d-inline">Please remember that this is a PROTOTYPE website</h3></li>
            <li className="my-2"><h3 className="d-inline">There may be server-side errors or performance problems due to the database</h3></li>
        </ul>
        <h4 className="text-center my-4">
          Go back to the
          <Link href="/"> Homepage </Link>
        </h4>
      </Layout>
    </>
  );
};

export default CustomError;