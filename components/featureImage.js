import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
import styles from '../styles/Featureimage.module.css'
import Image from 'next/image'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

function FeatureImage({image}) {
    return (
        <div className={styles.imageWrapper}>
            <figure className={styles.image}>
                <Image src={urlFor(image).url()} alt="Hero Image" layout="fill" objectFit="cover" objectPosition="50% 50%" priority />
            </figure>
        </div>
    )
}

export default FeatureImage;