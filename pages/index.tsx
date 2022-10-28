import dynamic from 'next/dynamic';
import Layout from '../components/Layout'
const Link = dynamic(() => import('next/link'), { ssr: false });

const IndexPage = () => {
  
  let session: boolean = true;

  return (
    <Layout title="I Soli di Claudio | Homepage">
      <div className="homepage-mid">
        <div className='homepage-background-image'>
          <div className='row homepage-title'>
            <h1 className='col '>Claudio Bizzo,<br/>Artigiano e Creativo</h1>
          </div>
          <div className='row homepage-description'>
            <p className='col'>Nel mio sito troverai arredamento per interno/esterno,<br/> in modo completamente artigianale ed ecologico</p>
          </div>
          <div className='row homepage-citation'>
            <blockquote >
              <p className='col' lang="it">“Spesso il mio cuore parla attraverso le mani.<br/>La creatività, la fantasia sono per me passione e gusto per la vita.”</p>
            </blockquote>
          </div>
        </div>
        <div className='scrolldown'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="homepage-separator color-nav">
        <h2>LAVORI IN EVIDENZA</h2>
      </div>
      <div className="homepageMid">
        DAGHE
      </div>
    </Layout>
  );
}

export default IndexPage
