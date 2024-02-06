import React from 'react'
import styles from './css/community.module.css'
import Link from 'next/link'

const Community = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Community</h2>
      <div className={styles.boxes_container}>
        <div id='sponsorship' className={`${styles.boxLayout} ${styles.boxBG_sponsor}`}>
          <h3>Sponsorship</h3>
          <p>Your generous support would drive us to excellence, ensuring we deliver nothing but the best. Interested in being a sponsor?</p>
          <button className={`${styles.BtnLayout} ${styles.BtnBlue}`}>
            Sponsor
          </button>
        </div>
        <div className={`${styles.boxLayout} ${styles.boxBG_blog}`}>
          <h3>Blog</h3>
          <p>At ECX, we're dedicated to sharing easy-to-understand articles about diverse topics written by knowledgeable writers looking for a platform to share their experiences.</p>
          <Link href="https://medium.com/@engcareerexpo/" target="_blank" className={`button ${styles.BtnLayout} ${styles.BtnRed}`}>
            Read Now
          </Link>
        </div>
        <div className={`${styles.boxLayout} ${styles.boxBG_sponsor} ${styles.box_center}`}>
          <h3>Chat series</h3>
          <p>In our Chat Series, we will cover diverse and uncommon topics. Join us as we delve into these topics with speakers who will provide their unique perspectives.</p>
          <button className={`${styles.BtnLayout} ${styles.BtnBlue}`}>
            Begin
          </button>
        </div>
      </div>
    </section>
  )
}

export default Community
