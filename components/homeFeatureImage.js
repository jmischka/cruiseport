import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
import styles from '../styles/Featureimage.module.css'
import Marquee from "react-fast-marquee";
import Image from 'next/image'

const words = ['Welcome', 'Bienvenidos', 'Wilkommen', 'Yokoso', 'Benvenuto', 'Merhaba', 'Kalos', 'Irthate', 'Huanying', 'Shalom'];

const Ticker = ({words}) => {
    return (
        <div className={styles.tickerWrapper}>
            {words.map((word,idx) => <span key={idx}>{word}</span>)}
        </div>
    )
}

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
                <Marquee gradient={false} speed={40}>
                    <Ticker words={words} />
                </Marquee>
            </div>
        </div>
    )
}

export default HomeFeatureImage;