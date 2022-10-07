import styles from '../styles/Form.module.css'

function CruiseportForm() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.formTitle}>Let's Connect</h1>
            <div className={styles.flexWrapper}>
                <div className={styles.formWrapper}>
                    <p>We're here to discuss your needs, answer your questions, and plan our work together.</p>
                    <form className={styles.cpform}>
                        <input name="firstName" type="text" />
                        <input name="lastName" type="text" />
                        <input name="company" type="text" />
                        <input name="title" type="text" />
                    </form>
                </div>
                <div className={styles.formImageWrapper}></div>
            </div>
        </div>
    )
}

export default CruiseportForm;