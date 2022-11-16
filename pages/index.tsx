import dynamic from 'next/dynamic';
import { Carousel } from 'react-responsive-carousel';
import Layout from '../components/Layout'
const Link = dynamic(() => import('next/link'), { ssr: false });
// import { Image } from "cloudinary-react";
import Image from "next/image";
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
            <h1 className='col'>Claudio Bizzo,<br/>Artigiano e Creativo</h1>
          </div>
          <div className='row justify-content-center homepage-description hide-under-half-width'>
            <p className='col'>Nel mio sito troverai arredamento per interno ed esterno, in modo completamente artigianale ed ecologico.</p>
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
    const artwork: Artwork = await getPreviewArtwork(folders[i].path, "evidenza_home");
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
