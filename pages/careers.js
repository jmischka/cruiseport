import client from '../client'
import FeatureImage from '../components/featureImage';
import PageHeader from '../components/pageHeader';
import styles from '../styles/Careers.module.css'

function Careers({careersData}) {
    const mainImage = careersData.mainImage;
    const pageTitle = careersData.careerIntroTitle;
    const pageIntro = careersData.careerIntroText;

    return (
        <div>
           <FeatureImage image={mainImage} />
           <PageHeader pagetitle={pageTitle} intro={pageIntro} />
           <div className={styles.wrapper}>
                <a href="mailto:info@cruiseportdestinations.com" className={styles.pageButton}>Email Us</a>
           </div>
        </div>
    )
  }
  
  export default Careers;

  export async function getStaticProps() {
    const careersData = await client.fetch(`*[_type == 'careersPage'][0]`)
    return {
      props: {
        careersData,
      },
      revalidate: 60,
    }
  }