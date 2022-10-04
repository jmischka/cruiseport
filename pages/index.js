import client from "../client";
import HomeFeatureImage from "../components/homeFeatureImage";
import styles from '../styles/Home.module.css'

export default function Home({homeData}) {
  const mainImage = homeData.mainImage;
  return (
    <div>
      <HomeFeatureImage image={mainImage} />
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
