import React from 'react'
import styles from './css/testimonials.module.css'
import Testimonial from './Testimonial'
import Marquee from 'react-fast-marquee'

const Testimonials = () => {
  const boxes = Array.from({ length: 10 }, (_, index) => index + 1);

  const TestimonialEL = boxes.map((_, idx) => {
    return <Testimonial 
            key={idx}
            Bg={
              idx % 2 === 0 ? styles.even : styles.odd
            }
          />
  })
  return (
    <section className={styles.section}>
      <h3 className={styles.section_header}>Testimonials</h3>
      <p className={styles.section_para}>Lorem ipsum dolor sit amet consectetur. Morbi quis molestie mattis mattis ultrices ipsum. Lobortis euismod ultrices porta vitae risu</p>
      
      <Marquee
        pauseOnHover={true}
        pauseOnClick={true}
        className={styles.marquee}
      >
        {TestimonialEL}
        {TestimonialEL}
      </Marquee>  
    </section>
  )
}

export default Testimonials
