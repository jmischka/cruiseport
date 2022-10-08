import styles from '../styles/Service.module.css'

function Service({serviceTitle}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.serviceHeader}>
                <div className={styles.serviceTitle}>
                    <h1>{serviceTitle}</h1>
                </div>
                <div className={styles.serviceImage}></div>
            </div>
        </div>
    )
}

export default Service;