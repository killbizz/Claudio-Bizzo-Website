import dynamic from 'next/dynamic';
import Layout from '../components/Layout'
const Link = dynamic(() => import('next/link'), { ssr: false });

const IndexPage = () => {
  
  let session: boolean = true;

  return (
    <Layout title="I Soli di Claudio | Homepage">
      <div className="mid">
        <div className='homepageBackgroundImage'>
          <div className='row homepageTitle'>
            <h1 className='col '>Claudio Bizzo,<br/>Artigiano e Creativo</h1>
          </div>
          <div className='row homepageDescription'>
            <p className='col'>Nel mio sito troverai arredamento per interno/esterno,<br/> in modo completamente artigianale ed ecologico</p>
          </div>
          <div className='row homepageCitation'>
            <blockquote >
              <p className='col' lang="it">“Sono un artigiano. Divento artista <br/>quando la gente guarda quello che faccio.”</p>
            </blockquote>
          </div>
        </div>
      </div>
      {/* <div>
        DAGHE
      </div> */}
    </Layout>
  );
}

export default IndexPage
