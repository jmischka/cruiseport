import client from "../client";
import FeatureImage from '../components/featureImage'

function Contact({contactData}) {
    const mainImage = contactData.mainImage;
    return (
        <div>
            <FeatureImage image={mainImage} />
            <h1>Contact Page</h1>
        </div>
    )
  }
  
  export default Contact;

  export async function getStaticProps() {
    const contactData = await client.fetch(`*[_type == 'contactPage'][0]`)
    return {
      props: {
        contactData,
      }
    }
  }