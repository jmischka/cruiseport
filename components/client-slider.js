import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
import styles from '../styles/ClientSlider.module.css'
import Image from 'next/future/image'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

function ClientSlider({clients}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                <ul className={styles.clientList}>
                    {clients.map((client,idx) => {
                        return (
                            <li key={idx}>
                                <a target="_blank" rel="noreferrer" href={client.homepageClientUrl} className={styles.clientLink}>
                                    <figure className={styles.clientLogo}>
                                        <img src={urlFor(client.homepageClientLogo).url()} alt="Client Logo" />
                                    </figure>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ClientSlider;