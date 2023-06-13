import React from 'react'
import Button from '../Buttons/Button/Button'
import styles from '../../../styles/portfolio.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const PortfolioContent = ({ PortfolioData }) => {
  return (
    <>
      <div
        data-aos='slide-up'
        className={styles.portfolio_section_content_images}
      >
        {PortfolioData?.map((item) => {
          return (
            <>
              <div
                data-aos='flip-right'
                className={styles.portfolio_section_content_images_img}
              >
                <img src={item.image} alt='' />
              </div>
            </>
          )
        })}
      </div>
      <div
        style={{
          marginTop: '8em',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {/* <Button>view more</Button> */}
      </div>
    </>
  )
}

export default PortfolioContent
