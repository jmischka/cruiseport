import styles from '../styles/TestimonialSlider.module.css'

function TestimonialSlider({testimonials}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                <div className={styles.sliderWindow}>
                    <div className={styles.slideTray}>
                        {testimonials.map((testimonial, idx) => <span key={idx} className={styles.testimonial}>{testimonial.testimonialText[0].children[0].text}</span>)}
                    </div>
                </div>
            </div>
            <span className={styles.directionalForward}></span>
            <span className={styles.directionalBack}></span>
        </div>
    )
}

export default TestimonialSlider;