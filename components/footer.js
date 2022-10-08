import { useContext } from 'react'
import Link from 'next/link';
import styles from '../styles/FooterStyles.module.css'
import CruiseShipSpacer from './cruiseship-spacer';
import { NavigationContext } from './navigation-context';

function Footer() {
    const {linkState, handleLinkClick} = useContext(NavigationContext);

    return (
        <div className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                <CruiseShipSpacer offset={2} />
                <div className={styles.footerNavWrapper}>
                    <div className={styles.footerBranding}></div>
                    <div className={styles.footerNavigation}>
                        <div className={styles.site}>
                            <span className={styles.navHeader}>Site</span>
                            <ul className={styles.navList}>
                                <li><Link href="/"><a name="home" onClick={handleLinkClick}>Home</a></Link></li>
                                <li><Link href="/about"><a name="about" onClick={handleLinkClick}>About</a></Link></li>
                                <li><Link href="/services"><a name="services" onClick={handleLinkClick}>Services</a></Link></li>
                                <li><Link href="/careers"><a name="careers" onClick={handleLinkClick}>Careers</a></Link></li>
                                <li><Link href="/contact"><a name="contact" onClick={handleLinkClick}>Contact Us</a></Link></li>
                            </ul>
                        </div>
                        <div className={styles.information}>
                            <span className={styles.navHeader}>Information</span>
                            <ul className={styles.navList}>
                                <li>FAQs</li>
                                <li>Terms & Conditions</li>
                                <li>Covid Considerations</li>
                            </ul>
                        </div>
                        <div className={styles.contact}>
                            <span className={styles.navHeader}>Contact</span>
                            <ul className={styles.navList}>
                                <li>info@cruiseportdestinations.com</li>
                                <li className={styles.phone}>800.222.3456</li>
                                <li>SOCIAL</li>
                                <li>Facebook</li>
                                <li>Instagram</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;