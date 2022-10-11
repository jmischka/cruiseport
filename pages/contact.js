import client from '../client'
import CruiseportForm from "../components/cruisport-form";
import FeatureImage from '../components/featureImage'
import PageHeader from "../components/pageHeader";

function Contact({contactData}) {
    const mainImage = contactData.mainImage;
    const pageTitle = contactData.contactIntroTitle;
    const pageIntro = contactData.contactIntroText;
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