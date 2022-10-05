import Link from 'next/link';
import { useContext } from 'react';
import styles from '../styles/PageHeader.module.css'
import { NavigationContext } from './navigation-context';

function PageHeader({pagetitle, intro, headerButton}) {
    const {handleLinkClick} = useContext(NavigationContext);
    const pageIntro = intro[0].children[0].text;
    
    return (
        <div className={styles.wrapper}>
            <h1>{pagetitle}</h1>
            <p>{pageIntro}</p>
            {headerButton ? <Link href="/about"><a name="about" className={styles.pageHeaderButton} onClick={handleLinkClick}>{headerButton}</a></Link> : null}
        </div>
    )
}

export default PageHeader;