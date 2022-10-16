import { useEffect, useState } from 'react';
import styles from '../styles/TestimonialSlider.module.css'

const backgroundColors = ['#67abae', '#E6EADE', '#3f6990', '#80c4b0'];

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
            // SET TESTIMONIAL INDEX
            if (testimonialIndex < testimonialLength - 1) {
                setTestimonialIndex(testimonialIndex + 1);
            } else {
                setTestimonialIndex(0);
            }
            // SET COLOR INDEX
            if (colorIndex < backgroundColors.length - 1) {
                setColorIndex(colorIndex + 1);
            } else {
                setColorIndex(0);
            }
        }
        
        if (operation === 'back') {
            // SET TESTIMONIAL INDEX AND COLOR INDEX
            if (testimonialIndex > 0) {
                setTestimonialIndex(testimonialIndex - 1);
                if (colorIndex > 0) {
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
                        {testimonials.map((testimonial, idx) => <span key={idx} className={styles.testimonial} style={colorIndex === 1 ? {color: '#1f4463'} : {color: '#f4f2eb'}}>{testimonial.testimonialText[0].children[0].text}</span>)}
                    </div>
                </div>
            </div>
            <span id="forward" className={styles.directionalForward} style={colorIndex === 1 ? {borderRight: '5px solid #1f4463', borderTop: '5px solid #1f4463'} : {borderRight: '5px solid #f4f2eb', borderTop: '5px solid #f4f2eb'}} onClick={handleOperatorClick}></span>
            <span id="back" className={styles.directionalBack} style={colorIndex === 1 ? {borderLeft: '5px solid #1f4463', borderBottom: '5px solid #1f4463'} : {borderLeft: '5px solid #f4f2eb', borderBottom: '5px solid #f4f2eb'}} onClick={handleOperatorClick}></span>
        </div>
    )
}

export default TestimonialSlider;