import Link from 'next/link';
import { useContext } from 'react';
import styles from '../styles/PageHeader.module.css'
import { NavigationContext } from './navigation-context';

function PageHeader({pagetitle, intro, headerButton}) {
    const {handleLinkClick} = useContext(NavigationContext);
    
    return (
        <div className={styles.wrapper}>
            <h1>{pagetitle}</h1>
            {intro ? intro.map((block, idx) => <p key={idx}>{block.children[0].text}</p>) : null}
            {headerButton ? <Link href="/about"><a name="about" className={styles.pageHeaderButton} onClick={handleLinkClick}>{headerButton}</a></Link> : null}
        </div>
    )
}

export default PageHeader;