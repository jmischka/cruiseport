import client from "../client"
import imageUrlBuilder from '@sanity/image-url'
import styles from '../styles/FeatureImage.module.css'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

function FeatureImage({image}) {
    return (
        <div className={styles.imageWrapper}>
            <figure className={styles.image}>
                <img src={urlFor(image)} />
            </figure>
        </div>
    )
}

export default FeatureImage;