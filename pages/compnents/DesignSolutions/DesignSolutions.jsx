import React from 'react'
import next from 'next/image'
import Marquee from '../../compnents/Marquee/Marquee'
import Heading from '../Heading/Heading'
import styles from '../../../styles/DesignSolutions.module.css'

const DesignSolutions = () => {
  return (
    <>
      <section className={styles.designSolution}>
        <Marquee> custom </Marquee>
        <div className={styles.container}>
          <Heading>design solutions</Heading>
          <div className={styles.content}>
            <div>
              <h2>
                Surpass the digital world with customized and attractive logo
                designs, adding colors to your business.
              </h2>
            </div>
            <div className={styles.content_list}>
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
