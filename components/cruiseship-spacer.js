import Image from 'next/image';
import brandIcon from '../assets/brand-icon.png'
import styles from '../styles/CruiseShipSpacer.module.css'

function CruiseShipSpacer({offset}) {
    return (
        <div className={styles.wrapper}>
            <figure style={{left: `${offset}%`}}>
                <Image src={brandIcon} alt='Cruiseship graphic' />
            </figure>
        </div>
    )
}

export default CruiseShipSpacer;