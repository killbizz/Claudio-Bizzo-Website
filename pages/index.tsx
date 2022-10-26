import dynamic from 'next/dynamic';
import Layout from '../components/Layout'
const Link = dynamic(() => import('next/link'), { ssr: false });

const IndexPage = () => {
  
  let session: boolean = true;

  return (
    <Layout title="I Soli di Claudio | Homepage">
      <div className="mid homepageBackgroundImage">
        
      </div>
    </Layout>
  );
}

export default IndexPage
