import Layout from '../components/Layout'
import Router  from 'next/router';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import { Artwork } from '../types/Artwork';
import Folder from '../types/Folder';
import { getFolder, getPreviewArtwork } from '../services/artwork';
import CustomCarousel from '../components/carousel/CustomCarousel';

interface HomePageProps {
  featuredArtworks: Artwork[]
}

const IndexPage = ({ featuredArtworks }: HomePageProps) => {

  return (
    <Layout title="I Soli di Claudio | Homepage">
      <div className="homepage-mid">
        <div className='homepage-background-image'>
          <div className='row homepage-title center-under-half-width'>
            <div className='col'>
              <h1>CLAUDIO BIZZO</h1>
              <h1 className='homepage-subtitle'>Artigiano e Creativo</h1>
            </div>
          </div>
          <div className='row justify-content-center homepage-description center-about-explorer-btn-under-half-width'>
            <p className='col hide-under-half-width'>Decorazioni per arredamento da interno ed esterno, create utilizzando tecniche produttive artigianali e completamente eco-sostenibili.</p>
            <div className='w-100' />
            <button 
              className="col-sm-3 btn btn-lg custom-button about-explorer-btn"
              onClick={() => Router.push('/about')}
            >
                Approfondisci
            </button>
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
        <CustomCarousel artworks={featuredArtworks} autoplay={true} handleOnClickItem={true} />
        <button 
          className="btn btn-lg custom-button gallery-explorer-btn"
          onClick={() => Router.push('/gallery')}
        >
            Esplora la Galleria
        </button>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async (): Promise<GetStaticPropsResult<HomePageProps>> => {
  const folders: Folder[] = await getFolder("soli-di-claudio");
  const featuredArtworks: Artwork[] = [];

  for (let i = 0; i < folders.length; i++) {
    const artwork: Artwork = await getPreviewArtwork(folders[i].path, "anteprima_home");
    if(artwork !== null)
      featuredArtworks.push(artwork);
  };
  
  return {
    props: {
      featuredArtworks
    },
    revalidate: 60 * 60 * 2 // 2 hour
  };
};

export default IndexPage
