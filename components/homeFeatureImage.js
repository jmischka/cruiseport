import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
import styles from '../styles/Featureimage.module.css'
import Image from 'next/image'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

function HomeFeatureImage({image}) {
    return (
        <div className={styles.imageWrapper}>
            <figure className={styles.homeimage}>
                <Image src={urlFor(image).url()} 
                    alt="Hero Image" 
                    layout="fill" 
                    objectFit="cover" 
                    objectPosition="50% 100%" 
                    unoptimized={true}
                    priority 
                />
            </figure>
            <div className={styles.featureImageTitleWrapper}>
                <span className={styles.featureImageTitleMinor}>Your Bespoke Cruise Partner</span>
                <span className={styles.featureImageTitleMajor}>Best On Land And In Port</span>
                <span className={styles.featureImageTitleLocation}>Miami, South & Central Florida</span>
            </div>
            <div className={styles.homeWelcomeTicker}>
                <span>Welcome</span>
                <span>Bienvenidos</span>
                <span>Wilkommen</span>
                <span>Yokoso</span>
                <span>Benvenuto</span>
                <span>Merhaba</span>
                <span>Kalos</span>
                <span>Irthate</span>
                <span>Huanying</span>
                <span>Shalom</span>
            </div>
        </div>
    )
}

export default HomeFeatureImage;