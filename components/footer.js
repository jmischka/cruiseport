import { useContext } from 'react'
import logothree from '../public/CPD_logothree.png'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/FooterStyles.module.css'
import { NavigationContext } from './navigation-context';

function Footer() {
    const {linkState, handleLinkClick} = useContext(NavigationContext);

    return (
        <div className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                <div className={styles.footerNavWrapper}>
                    <div className={styles.footerBranding}>
                        <Image src={logothree} alt='branding' />
                    </div>
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
                                <li><a href="mailto:info@cruiseportdestinations.com">info@cruiseportdestinations.com</a></li>
                                <li className={styles.phone}>800.222.3456</li>
                                <li>SOCIAL</li>
                                <li><a target="_blank" href='https://www.facebook.com/cruiseportdestinationsgroundhandler/'>Facebook</a></li>
                                <li><a target="_blank" href='https://www.instagram.com/cruiseportdestinations/?hl=en'>Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;