import Link from 'next/link';
import { useContext } from 'react';
import client from '../client'
import CruiseportForm from "../components/cruisport-form";
import FeatureImage from '../components/featureImage'
import { NavigationContext } from '../components/navigation-context';
import styles from '../styles/Contact.module.css'

function Contact({contactData}) {
    const mainImage = contactData.mainImage;
    const {handleLinkClick} = useContext(NavigationContext);
    return (
        <div>
            <FeatureImage image={mainImage} />
            <CruiseportForm />
            <div className={styles.careersMention}>
              <p>Interested in joining our team?</p>
              <Link href="/careers"><a name="careers" className={styles.careersButton} onClick={handleLinkClick}>Careers</a></Link>
            </div>
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