import client from '../client'
import CruiseportForm from "../components/cruisport-form";
import FeatureImage from '../components/featureImage'

function Contact({contactData}) {
    const mainImage = contactData.mainImage;

    return (
        <div>
            <FeatureImage image={mainImage} />
            <CruiseportForm />
        </div>
    )
  }
  
  export default Contact;

  export async function getStaticProps() {
    const contactData = await client.fetch(`*[_type == 'contactPage'][0]`)
    return {
      props: {
        contactData,
      },
      revalidate: 60,
    }
  }