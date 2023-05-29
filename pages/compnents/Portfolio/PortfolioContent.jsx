import React from 'react'
import Button from '../Buttons/Button/Button'

// const PortfolioData = [
//   {
//     image: '/assets/WebPortfolio1.png',
//   },
//   {
//     image: '/assets/WebPortfolio2.png',
//   },
//   {
//     image: '/assets/WebPortfolio3.png',
//   },
//   {
//     image: '/assets/WebPortfolio4.png',
//   },
//   {
//     image: '/assets/WebPortfolio5.png',
//   },
//   {
//     image: '/assets/WebPortfolio6.png',
//   },
// ]

const PortfolioContent = ({PortfolioData}) => {
  return (
    <>
      <div className='portfolio-section-content-images'>
        {PortfolioData?.map((item) => {
          return (
            <>
              <div className='portfolio-section-content-images-img'>
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
              <Button>view more</Button>
            </div>
    </>
  )
}

export default PortfolioContent
