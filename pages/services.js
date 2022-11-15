import client from "../client";
import CruiseShipSpacer from "../components/cruiseship-spacer";
import CruiseportForm from "../components/cruisport-form";
import FeatureImage from '../components/featureImage'
import PageHeader from "../components/pageHeader";
import Service from "../components/service";
import styles from '../styles/Services.module.css'

function Services({servicesData}) {
    const mainImge = servicesData.mainImage;
    const pageTitle = servicesData.servicesIntroTitle;
    const pageIntro = servicesData.servicesIntroText;
    const services = servicesData.servicesOffered;
    const formImage = servicesData.servicesFooterContactImage;

    return (
        <div>
            <FeatureImage image={mainImge} />
            <div className="contentWrapper">
              <PageHeader pagetitle={pageTitle} intro={pageIntro} />
              <CruiseShipSpacer offset={7} />
              {services.map((service,idx) => {
                return (
                  <div key={idx} className={styles.serviceWrapper}>
                    <Service 
                      key={idx} 
                      serviceId={`service-${idx}`}
                      serviceTitle={service.serviceTitle} 
                      serviceImage={service.servicePageImage} 
                      serviceIntro={service.serviceIntro} 
                      serviceItems={service.serviceOffered}
                    />
                    <CruiseShipSpacer key={idx} offset={(idx + 1) * 20} />
                  </div>
                )
              })}
              <CruiseportForm formImage={formImage} />
            </div>
        </div>
    )
  }
  
  export default Services;

  export async function getStaticProps() {
    const servicesData = await client.fetch(`*[_type == 'servicesPage'][0]`)
    return {
      props: {
        servicesData,
      },
      revalidate: 60,
    }
  }