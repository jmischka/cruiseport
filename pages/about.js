import client from '../client'
import CruiseportForm from '../components/cruisport-form';
import FeatureImage from '../components/featureImage'
import PageHeader from "../components/pageHeader";

function About({aboutData}) {
    const mainImage = aboutData.mainImage;
    const pageTitle = aboutData.aboutIntroTitle;
    const pageIntro = aboutData.aboutIntroText;
    const formImage = aboutData.aboutFooterContactImage;
    return (
        <div>
            <FeatureImage image={mainImage} />
            <PageHeader pagetitle={pageTitle} intro={pageIntro} />
            <CruiseportForm formImage={formImage} />
        </div>
    )
  }
  
  export default About;

  export async function getStaticProps() {
    const aboutData = await client.fetch(`*[_type == 'aboutPage'][0]`)
    return {
      props: {
        aboutData,
      },
      revalidate: 60,
    }
  }