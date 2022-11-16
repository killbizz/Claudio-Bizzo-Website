import { GetStaticProps, GetStaticPropsResult, GetStaticPaths } from 'next';
import CustomCarousel from '../../components/carousel/CustomCarousel';
import Layout from '../../components/Layout';
import { getArtworkInFolder, getFolder } from '../../services/artwork';
import { Artwork } from '../../types/Artwork';
import Folder from '../../types/Folder';

interface ArtworkPageProps {
    artworkItems: Artwork[]
}

const ArtworkPage = ({ artworkItems } : ArtworkPageProps) => {

  console.log(artworkItems);

  const title: string = artworkItems.filter((value) => value.title !== undefined || value.title !== null)[0].title;

  return(
      <Layout title = {`I Soli di Claudio | ${title}`}>
          <div className="artwork-page-mid mid-background-color">
            <div className="container-fluid h-100">
              <div className="row h-100">
                <div className='col-xl-5 border border-primary artwork-page-carousel-container h-100'>
                  <h2 className='mx-auto text-center mt-5'>DAGHENEEEEEEEEEEEE eeeeeeeeeeeeeee EEEEEEEEEEEE</h2>
                  <CustomCarousel artworks={artworkItems} autoplay={false} handleOnClickItem={false} />
                </div>
                <div className='col border border-primary'>
                  DAGHE
                </div>
              </div>
            </div>
          </div>
      </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {

  const folders: Folder[] = await getFolder("soli-di-claudio");

  // Get the paths we want to pre-render
  const paths = folders.map((folder) => ({
    params: { id: folder.name },
  }))

  console.log(paths);

  // pre-render only these paths at build time.
  // { fallback: false } => other routes should 404.
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps<ArtworkPageProps> = async ({ params }): Promise<GetStaticPropsResult<ArtworkPageProps>> => {
  
  return {
    props: {
      artworkItems: await getArtworkInFolder("soli-di-claudio/" + params.id.toString()),
    },
    revalidate: 60 * 60 // 1 hour
  };
};

export default ArtworkPage;