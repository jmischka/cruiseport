import { useState } from 'react';
import styles from '../styles/Form.module.css'

function CruiseportForm() {
    const [inputs, setInputs] = useState({firstName: '', lastName: '', company: '', title: '', email: '', phone: '', message: ''})

    const handleInputChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    }

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.formTitle}>Let's Connect</h1>
            <div className={styles.flexWrapper}>
                <div className={styles.formWrapper}>
                    <p>We're here to discuss your needs, answer your questions, and plan our work together.</p>
                    <form className={styles.cpform} onSubmit={handleFormSubmit}>
                        <input name="firstName" type="text" placeholder='First Name' required value={inputs.firstNmae} onChange={handleInputChange} />
                        <input name="lastName" type="text" placeholder='Last Name' required value={inputs.lastName} onChange={handleInputChange} />
                        <input name="company" type="text" placeholder='Company' value={inputs.company} onChange={handleInputChange} />
                        <input name="title" type="text" placeholder='Title' value={inputs.title} onChange={handleInputChange} />
                        <input name="email" type="email" placeholder='Email' required value={inputs.email} onChange={handleInputChange} />
                        <input name="phone" type="phone" placeholder='Phone' value={inputs.phone} onChange={handleInputChange} />
                        <textarea name="message" placeholder='How Can We Help You?' required value={inputs.message} onChange={handleInputChange} />
                        <button type='submit'>Connect</button>
                    </form>
                </div>
                <div className={styles.formImageWrapper}></div>
            </div>
        </div>
    )
}

export default CruiseportForm;