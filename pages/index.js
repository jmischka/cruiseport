import Link from "next/link";
import { useContext } from "react";
import client from "../client";
import imageUrlBuilder from '@sanity/image-url'
import CruiseShipSpacer from "../components/cruiseship-spacer";
import CruiseportForm from "../components/cruisport-form";
import HomeFeatureImage from "../components/homeFeatureImage";
import { NavigationContext } from "../components/navigation-context";
import PageHeader from "../components/pageHeader";
import TestimonialSlider from "../components/testimonial-slider";
import styles from '../styles/Home.module.css'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

export default function Home({homeData}) {
  const mainImage = homeData.mainImage;
  const pageTitle = homeData.homeIntroTitle;
  const pageIntro = homeData.homeIntroText;
  const headerButton = homeData.homeIntroButtonText;
  const servicesTitle = homeData.homeServicesTitle;
  const servicesIntro = homeData.homeServicesText;
  const servicesList = homeData.homeServicesReference;
  const testimonials = homeData.homeTestimonials;
  const formImage = homeData.footerContactImage;

  const {handleLinkClick} = useContext(NavigationContext);

  return (
    <div>
      <HomeFeatureImage image={mainImage} />
      <PageHeader pagetitle={pageTitle} intro={pageIntro} headerButton={headerButton} />
      <CruiseShipSpacer offset={30} />
      <PageHeader pagetitle={servicesTitle} intro={servicesIntro} />
      <ul className={styles.servicesList}>
        {servicesList.map((listItem, idx) => {
          return (
            <li key={idx}>
              <Link href="/services">
                <a name="services" className={styles.homeServiceLink} onClick={handleLinkClick}>
                  <figure name="services" className={styles.homeServiceImage}>
                    <img name="services" src={urlFor(listItem.homepageServiceImage)} />
                  </figure>
                  <span name="services" className={styles.homeServiceTitle}>{listItem.homepageServiceTitle}</span>
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
      <CruiseShipSpacer offset={60} />
      <TestimonialSlider testimonials={testimonials} />
      <CruiseShipSpacer offset={85} />
      <CruiseportForm formImage={formImage} />
    </div>
  )
}

export async function getStaticProps() {
  const homeData = await client.fetch(`*[_type == 'homePage'][0]`)
  return {
    props: {
      homeData,
    }
  }
}
