import client from "../client";
import FeatureImage from '../components/featureImage'
import styles from '../styles/Home.module.css'

export default function Home({homeData}) {
  const mainImge = homeData.mainImage;
  return (
    <div>
      <FeatureImage image={mainImge} />
      <h1>Home Page</h1>
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
