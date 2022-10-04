import client from "../client";
import FeatureImage from '../components/featureImage'

function Services({servicesData}) {
    const mainImge = servicesData.mainImage;
    return (
        <div>
            <FeatureImage image={mainImge} />
            <h1>Services Page</h1>
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