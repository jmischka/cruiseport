import client from "../client";
import CruiseShipSpacer from "../components/cruiseship-spacer";
import CruiseportForm from "../components/cruisport-form";
import FeatureImage from '../components/featureImage'
import PageHeader from "../components/pageHeader";
import Service from "../components/service";

function Services({servicesData}) {
    const mainImge = servicesData.mainImage;
    const pageTitle = servicesData.servicesIntroTitle;
    const pageIntro = servicesData.servicesIntroText;
    const services = servicesData.servicesOffered;
    const formImage = servicesData.servicesFooterContactImage;

    return (
        <div>
            <FeatureImage image={mainImge} />
            <PageHeader pagetitle={pageTitle} intro={pageIntro} />
            {services.map((service,idx) => {
              return (
                <>
                  <Service key={idx} serviceTitle={service.serviceTitle} />
                  <CruiseShipSpacer key={idx} offset={(idx + 1) * 20} />
                </>
              )
            })}
            <CruiseportForm formImage={formImage} />
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