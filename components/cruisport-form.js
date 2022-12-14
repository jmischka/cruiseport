import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
import { useState } from 'react';
import styles from '../styles/Form.module.css'
import Image from 'next/image';

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

function CruiseportForm({formImage}) {
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
            <h1 className={styles.formTitle}>Let&rsquo;s Connect</h1>
            <div className={styles.flexWrapper}>
                <div className={styles.formWrapper}>
                    <p>We&rsquo;re here to discuss your needs, answer your questions, and plan our work together.</p>
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
                <div className={styles.formImageWrapper}>
                    {formImage 
                        ? <figure><Image src={urlFor(formImage).url()} alt="Footer Image" layout="fill" objectFit="cover" objectPosition="50% 50%" /></figure> 
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default CruiseportForm;