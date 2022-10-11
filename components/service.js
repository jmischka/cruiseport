import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
import styles from '../styles/Service.module.css'
import Image from 'next/image'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

function Service({serviceId, serviceTitle, serviceImage, serviceIntro, serviceItems}) {
    return (
        <div id={serviceId} className={styles.wrapper}>
            <div className={styles.serviceHeader}>
                <div className={styles.serviceTitle}>
                    <h1>{serviceTitle}</h1>
                    <p>{serviceIntro[0].children[0].text}</p>
                </div>
                <div className={styles.serviceImage}>
                    <figure>
                        <Image 
                            src={urlFor(serviceImage).url()}  
                            alt="Service Image" 
                            layout="fill" 
                            objectFit="cover" 
                            objectPosition="50% 50%" 
                        />
                    </figure>
                </div>
            </div>
            <div className={styles.serviceList}>
                <ul>
                    {serviceItems.map((service,idx) => <li key={idx} className={styles.listItem}>{service.blockText[0].children[0].text}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Service;