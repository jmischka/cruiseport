import { useEffect, useState } from 'react';
import styles from '../styles/TestimonialSlider.module.css'

const backgroundColors = ['#a6cfc5', '#558aa8', '#8cc1c3', '#1f4463'];

function TestimonialSlider({testimonials}) {
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);
    const testimonialLength = testimonials.length;

    const widthStyle = {
        width: `${100 * testimonialLength}%`,
    }

    const handleOperatorClick = (e) => {
        const operation = e.target.id;

        if (operation === 'forward') {
            if (testimonialIndex < testimonialLength - 1) {
                setTestimonialIndex(testimonialIndex + 1);
                if (colorIndex < backgroundColors.length - 1) {
                    setColorIndex(colorIndex + 1);
                } else {
                    setColorIndex(0);
                }
            } else {
                setTestimonialIndex(0);
            }
        }
        
        if (operation === 'back') {
            if (testimonialIndex > 0) {
                setTestimonialIndex(testimonialIndex - 1);
                if (colorIndex > 0 && testimonialIndex !== 0) {
                    setColorIndex(colorIndex - 1);
                } else {
                    setColorIndex(backgroundColors.length - 1);
                }
            }
        }
    }

    useEffect(() => {
        const tray = document.querySelector('.slide-tray');
        const testimonials = Array.from(document.querySelector('.slide-tray').children);
        tray.style.left = `-${testimonials[testimonialIndex].offsetLeft}px`;
    }, [testimonialIndex])
    
    return (
        <div className={styles.wrapper} style={{backgroundColor: `${backgroundColors[colorIndex]}`}}>
            <div className={styles.innerWrapper}>
                <div className={styles.sliderWindow}>
                    <div className={styles.slideTray + " slide-tray"} style={widthStyle}>
                        {testimonials.map((testimonial, idx) => <span key={idx} className={styles.testimonial}>{testimonial.testimonialText[0].children[0].text}</span>)}
                    </div>
                </div>
            </div>
            <span id="forward" className={styles.directionalForward} onClick={handleOperatorClick}></span>
            <span id="back" className={styles.directionalBack} onClick={handleOperatorClick}></span>
        </div>
    )
}

export default TestimonialSlider;