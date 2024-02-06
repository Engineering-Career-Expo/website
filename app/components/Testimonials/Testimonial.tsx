import React from 'react'
import styles from './css/testimonials.module.css'
import Image from 'next/image'

interface props {
  Bg: string
}

const Testimonial = ({Bg}:props) => {
  return (
    <div className={`${Bg} ${styles.BoxLayout}`}>
      <div className={styles.Box_UpperContentLayout}>
        <div className={styles.Box_Img_Ctn}>
          <Image
            src='/our-team/ifihan-oluseye.jpg'
            alt='img'
            objectFit='cover'
            objectPosition='center'
            fill
          />
        </div>
        <div>
          <h3 className={styles.Box_Name}>Azeem Lanre</h3>
          <p className={styles.Box_Role}>Web Developer</p>
        </div>
      </div>
      <p className={styles.Box_Para}>Lorem ipsum dolor sit amet consectetur. Morbi quis molestie mattis mattis ultrices ipsum. Lobortis euismod ultrices porta vitae risu</p>
    </div>
  )
}

export default Testimonial
