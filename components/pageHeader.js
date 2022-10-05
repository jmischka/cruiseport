import Link from 'next/link';
import styles from '../styles/PageHeader.module.css'

function PageHeader({pagetitle, intro, headerButton}) {
    const pageIntro = intro[0].children[0].text;
    return (
        <div className={styles.wrapper}>
            <h1>{pagetitle}</h1>
            <p>{pageIntro}</p>
            {headerButton ? <Link href="/about"><a className={styles.pageHeaderButton}>{headerButton}</a></Link> : null}
        </div>
    )
}

export default PageHeader;