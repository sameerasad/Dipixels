import React from 'react'
import Marquee from '../Marquee/Marquee'
import Heading from '../Heading/Heading'
import styles from '../../../styles/portfolio.module.css'

const Portfolio = ({ marqueeText, headingText, company }) => {
  return (
    <>
      <div className={styles.portfolio_section}>
        <Marquee>{marqueeText}</Marquee>
        <div className={styles.portfolio_section_content}>
          <div className={styles.portfolio_section_mobile_content_wrapper}>
              <Heading>
                <span> {headingText} </span> {company}
              </Heading>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
