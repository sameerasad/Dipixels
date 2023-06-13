import React from 'react'
import Image from 'next/image'
import Play from '../../../public/assets/Icon-play.png'
import Marquee from '../../compnents/Marquee/Marquee'
import Heading from '../../compnents/Heading/Heading'
import styles from '../../../styles/AboutUs.module.css'
const Aboutus = () => {
  return (
    <>
      <div className={styles.aboutus_section}>
        <Marquee>about us</Marquee>
        <div className={styles.aboutus_wrapper}>
          <div className={styles.aboutus_content}>
            <div style={{ display: 'flex', justifyContent: 'left' }}>
              <Heading> about us </Heading>
            </div>
            <div className={styles.aboutus_content_para}>
              <p>
                <span>
                  Dipixels is a one-stop portal for all your tech needs.
                </span>
                We don’t just provide a service to our clients; we build and
                establish their business’ online appearance through multiple
                steps, letting it be a successful part of the business world of
                the newest age.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class={styles.play_container}>
        <span class={styles.play_icon}>
          <Image src={Play} width='50' height='50' alt='' />
        </span>
        <span class={styles.play_text}>lay me</span>
      </div>
    </>
  )
}

export default Aboutus
