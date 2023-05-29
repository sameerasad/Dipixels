import React from 'react'
import Marquee from '../Marquee/Marquee'
import Image from 'next/image'
import Arrow from '../../../public/assets/arrow-up-right.png'
import StyledButton from '../Buttons/StyledButton/StyledButton'
import Heading from '../Heading/Heading'
// import PortfolioContent from './PortfolioContent'

const Portfolio = ({ marqueeText, headingText, company }) => {
  return (
    <>
      <div className='portfolio-section'>
        <Marquee>{marqueeText}</Marquee>
        <div className='portfolio-section-content'>
          <div className='portfolio-section-content-wrapper'>
            <div className='portfolio-section-content-heading'>
              <Heading>
                <span> {headingText} </span> {company}
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
