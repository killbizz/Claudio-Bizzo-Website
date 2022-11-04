import dynamic from 'next/dynamic';
import { Carousel } from 'react-responsive-carousel';
import Layout from '../components/Layout'
const Link = dynamic(() => import('next/link'), { ssr: false });
import Image from 'next/image';

const IndexPage = () => {
  
  let session: boolean = true;

  return (
    <Layout title="I Soli di Claudio | Homepage">
      <div className="homepage-mid">
        <div className='homepage-background-image'>
          <div className='row homepage-title center-under-half-width'>
            <h1 className='col'>Claudio Bizzo,<br/>Artigiano e Creativo</h1>
          </div>
          <div className='row homepage-description hide-under-half-width'>
            <p className='col'>Nel mio sito troverai arredamento per interno/esterno,<br/> in modo completamente artigianale ed ecologico</p>
          </div>
          <div className='row homepage-citation hide-under-half-width'>
            <blockquote>
              <p className='col' lang="it">“Spesso il mio cuore parla attraverso le mani.<br/>La creatività, la fantasia sono per me passione <br/>e gusto per la vita.”</p>
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
      <div className="homepage-mid-2 mid-background-color">
        <Carousel showArrows={true} showStatus={false} showThumbs={false} interval={3500} transitionTime={1500} 
          autoPlay infiniteLoop useKeyboardArrows
          // onClickItem={onClickItem}
        >
          <div key={1}>
              <Image src={"/home_hq_blur.jpg"} layout='fill' objectFit="cover" />
              <p className="legend">Legend 1</p>
          </div>
          <div key={2}>
              <Image src={"/homepage.png"} layout='fill' objectFit="cover" />
              <p className="legend">Legend 2</p>
          </div>
          <div key={3}>
              <Image src={"/homepage.png"} layout='fill' objectFit="cover" />
              <p className="legend">Legend 3</p>
          </div>
        </Carousel>
        <button className="btn btn-lg custom-button gallery-explorer-btn" >Esplora la Galleria</button>
      </div>
    </Layout>
  );
}

export default IndexPage
