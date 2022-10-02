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
                                <a name="home" className={linkState.home ? 'active' : 'normal'} onClick={handleLinkClick}>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a name="about" className={linkState.about ? 'active' : 'normal'} onClick={handleLinkClick}>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services">
                                <a name="services" className={linkState.services ? 'active' : 'normal'} onClick={handleLinkClick}>Services</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/careers">
                                <a className={linkState.careers ? 'active' : 'normal'}>Careers</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a className={linkState.contact ? 'active' : 'normal'}>Contact Us</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navigation;