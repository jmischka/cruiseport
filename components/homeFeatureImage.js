import client from "../client"
import imageUrlBuilder from '@sanity/image-url'
import styles from '../styles/FeatureImage.module.css'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

function HomeFeatureImage({image}) {
    return (
        <div className={styles.imageWrapper}>
            <figure className={styles.homeimage}>
                <img src={urlFor(image)} />
            </figure>
            <div className={styles.featureImageTitleWrapper}>
                <span className={styles.featureImageTitleMinor}>Your Bespoke Cruise Partner</span>
                <span className={styles.featureImageTitleMajor}>Best On Land And In Port</span>
                <span className={styles.featureImageTitleLocation}>Miami, South & Central Florida</span>
            </div>
            <div className={styles.welcomeTicker}>
                <span>Welcome</span>
            </div>
        </div>
    )
}

export default HomeFeatureImage;