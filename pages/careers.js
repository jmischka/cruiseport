import client from '../client'
import CruiseShipSpacer from '../components/cruiseship-spacer';
import CruiseportForm from '../components/cruisport-form';
import FeatureImage from '../components/featureImage';
import PageHeader from '../components/pageHeader';
import styles from '../styles/Careers.module.css'

function Careers({careersData}) {
    const mainImage = careersData.mainImage;
    const pageTitle = careersData.careerIntroTitle;
    const pageIntro = careersData.careerIntroText;
    const formImage = careersData.careersFooterContactImage;

    return (
        <div>
           <FeatureImage image={mainImage} />
           <div className='contentWrapper'>
            <PageHeader pagetitle={pageTitle} intro={pageIntro} />
            <div className={styles.wrapper}>
                <a href="mailto:info@cruiseportdestinations.com" className={styles.pageButton}>Email Us</a>
            </div>
            <CruiseShipSpacer offset={30} />
            <CruiseportForm formImage={formImage} />
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