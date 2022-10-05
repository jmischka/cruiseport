import client from "../client";
import FeatureImage from '../components/featureImage'
import PageHeader from "../components/pageHeader";

function Services({servicesData}) {
    const mainImge = servicesData.mainImage;
    const pageTitle = servicesData.servicesIntroTitle;
    const pageIntro = servicesData.servicesIntroText;
    return (
        <div>
            <FeatureImage image={mainImge} />
            <PageHeader pagetitle={pageTitle} intro={pageIntro} />
        </div>
    )
  }
  
  export default Services;

  export async function getStaticProps() {
    const servicesData = await client.fetch(`*[_type == 'servicesPage'][0]`)
    return {
      props: {
        servicesData,
      }
    }
  }