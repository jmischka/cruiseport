import client from "../client";
import FeatureImage from '../components/featureImage'

function About({aboutData}) {
    const mainImage = aboutData.mainImage;
    return (
        <div>
            <FeatureImage image={mainImage} />
            <h1>About Page</h1>
        </div>
    )
  }
  
  export default About;

  export async function getStaticProps() {
    const aboutData = await client.fetch(`*[_type == 'aboutPage'][0]`)
    return {
      props: {
        aboutData,
      }
    }
  }