import client from "../client";
import HomeFeatureImage from "../components/homeFeatureImage";
import PageHeader from "../components/pageHeader";
import styles from '../styles/Home.module.css'

export default function Home({homeData}) {
  const mainImage = homeData.mainImage;
  const pageTitle = homeData.homeIntroTitle;
  const pageIntro = homeData.homeIntroText;
  const headerButton = homeData.homeIntroButtonText;

  return (
    <div>
      <HomeFeatureImage image={mainImage} />
      <PageHeader pagetitle={pageTitle} intro={pageIntro} headerButton={headerButton} />
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
