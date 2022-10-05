import client from "../client";
import FeatureImage from '../components/featureImage'
import PageHeader from "../components/pageHeader";

function Contact({contactData}) {
    const mainImage = contactData.mainImage;
    const pageTitle = contactData.contactIntroTitle;
    const pageIntro = contactData.contactIntroText;
    return (
        <div>
            <FeatureImage image={mainImage} />
            <PageHeader pagetitle={pageTitle} intro={pageIntro} />
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