import React, { useEffect } from 'react'
import Marquee from '../../compnents/Marquee/Marquee'
import Heading from '../Heading/Heading'
import styles from '../../../styles/DesignSolutions.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const DesignSolutions = () => {
  useEffect(() => {
    AOS.init({ duration: 1800 })
  }, [])
  return (
    <>
      <section className={styles.designSolution}>
        <Marquee> custom </Marquee>
        <div className={styles.container}>
          <Heading>design solutions</Heading>
          <div className={styles.content}>
            <div data-aos='fade-left' className={styles.content_left}>
              <h2>
                Surpass the digital world with customized and attractive logo
                designs, adding colors to your business.
              </h2>
            </div>
            <div data-aos='fade-right' className={styles.content_list}>
              <ul>
                <li>Constant Client Coordination</li>
                <li>Supreme Customer Satisfaction</li>
                <li>100% Ownership Rights</li>
                <li>Industry Proven Professionals</li>
                <li>Secure Money Back Guarantee</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DesignSolutions
