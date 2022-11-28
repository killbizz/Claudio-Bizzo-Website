import Layout from '../../components/Layout';

interface AboutPageProps {
    userId: string | null
}

const AboutPage = ({ userId }: AboutPageProps) => {

  return(
      <Layout title="Chi Sono | I Soli di Claudio">
          <div className="mid">
            <p>DAGHE</p>
          </div>
      </Layout>
  );
}

export default AboutPage;