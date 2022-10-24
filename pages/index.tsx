import dynamic from 'next/dynamic';
import Layout from '../components/Layout'
const Link = dynamic(() => import('next/link'), { ssr: false });

const IndexPage = () => {
  
  let session: boolean = true;

  return (
    <Layout title="I Soli di Claudio | Homepage">
      <div className="mid">
        <div className="container col-xxl-8 px-4 py-4">
          <div className="row flex-lg-row-reverse align-items-center g-5 pt-5">
            <div className="col-10 col-sm-8 col-lg-5">
              <img src="/images/colored-ballots.jpg" className="d-block mx-lg-auto img-fluid" alt="Voting Image" width="1200" height="900" loading="lazy" />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">Welcome to the Online Voting Web Application</h1>
              <p className="lead">In this website you can <b>Sign Up</b> to become a registered user and take part in all <b>elections</b> open to date. The admin of the platform can use the appropriate <b>dashboard</b> to manage the votes and the political parties.</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                {session &&
                <Link href="/sign-up">
                  <a><button type="button" className="btn btn-outline-danger btn-lg px-4 me-md-2">Sign Up to Vote!</button></a>
                </Link>
                }
                {session &&
                <Link href="/login">
                  <a type="button" className="btn btn-outline-secondary btn-lg px-4">Login with your credentials</a>
                </Link>
                }
                {session &&
                <Link href="/admin-dashboard">
                  <a type="button" className="btn btn-outline-secondary btn-lg px-4">Manage the elections</a>
                </Link>
                }
                {session &&
                <Link href="/user-dashboard">
                  <a type="button" className="btn btn-outline-secondary btn-lg px-4">Go and vote!</a>
                </Link>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage
