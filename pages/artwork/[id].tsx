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

  const artwork = artworkItems.filter((value) => value.title !== undefined || value.title !== null)[0];

  return(
      <Layout title = {`I Soli di Claudio | ${artwork.title}`}>
        <div className="mid mid-background-color">
          <div className="container-fluid h-100">
            <div className="row h-100">
              <div className='col-xl-5 artwork-page-container h-100'>
                <div className="artwork-page-mid">
                  <div className='artwork-title-container'>
                    <h2 className='artwork-title my-auto'>DAGHENEEEE EEEEEEEE eeeee eeeeee eeee EEEEEE EEE EEE</h2>
                  </div>
                  <CustomCarousel artworks={artworkItems} autoplay={false} handleOnClickItem={false} />
                </div>
              </div>
              <div className='col artwork-page-container artwork-right-section-background'>
                <div className='artwork-right-section-container'>
                  <div className='artwork-features-container mt-4 pt-2'>
                    <div className='row justify-content-center'>
                      <div className='col col-sm-auto'>
                        <i className="fa fa-check-circle fa-2x artwork-feature-icon" />
                      </div>
                      <div className='col'>
                        <p>Disponibile</p>
                      </div>
                    </div>

                    <div className='row justify-content-center'>
                      <div className='col col-sm-auto'>
                        <i className="fa fa-check-circle fa-2x artwork-feature-icon" />
                      </div>
                      <div className='col'>
                        <p>Legno, oro 24K, bronzo, zefiro, corda di bambù</p>
                      </div>
                    </div>

                    <div className='row justify-content-center'>
                      <div className='col col-sm-auto'>
                        <i className="fa fa-check-circle fa-2x artwork-feature-icon" />
                      </div>
                      <div className='col'>
                        <p>Dimensioni: 150x150x10 cm (Larghezza/Altezza/Profondità)</p>
                      </div>
                    </div>

                    <div className='row justify-content-center'>
                      <div className='col col-sm-auto'>
                        <i className="fa fa-check-circle fa-2x artwork-feature-icon" />
                      </div>
                      <div className='col'>
                        <p>Prodotto puramente con materiali eco-sostenibili</p>
                      </div>
                    </div>

                    <div className='row justify-content-center'>
                      <div className='col col-sm-auto'>
                        <i className="fa fa-check-circle fa-2x artwork-feature-icon" />
                      </div>
                      <div className='col'>
                        <p>Materiali e manodopera Italiana</p>
                      </div>
                    </div>
                  </div>
                  <div className='artwork-description-container mt-4 pt-2'>
                    <div>
                      {artwork.description}
                    </div>
                  </div>
                </div>
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