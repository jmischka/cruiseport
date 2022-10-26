import { useContext } from 'react'
import styles from '../styles/Navigation.module.css'
import logotwo from '../public/CPD_logotwo.png'
import Image from 'next/image'
import Link from 'next/link'
import { NavigationContext } from './navigation-context'

function Navigation() {
    const {linkState, handleLinkClick} = useContext(NavigationContext);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.branding}>
                    <Link href="/">
                        <a name="home" className={styles.brandingLink} onClick={handleLinkClick}>
                            <Image name="home" src={logotwo} alt='branding' priority='true' onClick={handleLinkClick} />
                        </a>
                    </Link>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link href="/about">
                                <a name="about" className={linkState.about ? 'active' : null} onClick={handleLinkClick}>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services">
                                <a name="services" className={linkState.services ? 'active' : null} onClick={handleLinkClick}>Services</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/careers">
                                <a name="careers" className={linkState.careers ? 'active' : null} onClick={handleLinkClick}>Careers</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a name="contact" className={linkState.contact ? 'active' : null} onClick={handleLinkClick}>Contact Us</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navigation;