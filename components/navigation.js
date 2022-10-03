import { useState } from 'react'
import styles from '../styles/Navigation.module.css'
import brandIcon from '../assets/brand-icon.png'
import logo from '../assets/Logo-Type.png'
import Image from 'next/image'
import Link from 'next/link'

function Navigation() {
    const [linkState, setLinkState] = useState({home: true, about: false, services: false, careers: false, contact: false});
    const defaultState = {home: false, about: false, services: false, careers: false, contact: false};

    const handleLinkClick = (e) => {
        let clickValue = e.target.name;
        let object = {
            [clickValue]: true,
        }
        const newState = Object.assign(defaultState, object);
        setLinkState(newState);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.brandicon}>
                    <Image src={brandIcon} />
                </div>
                <div className={styles.branding}>
                    <Image src={logo} />
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link href="/">
                                <a name="home" className={linkState.home ? 'active' : null} onClick={handleLinkClick}>Home</a>
                            </Link>
                        </li>
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