import React, { useState } from 'react'
import PortfolioContent from '../Portfolio/PortfolioContent'

const AllPortfolioData = [
  {
    image: '/assets/WebPortfolio1.png',
  },
  {
    image: '/assets/WebPortfolio2.png',
  },
  {
    image: '/assets/WebPortfolio3.png',
  },
  {
    image: '/assets/MobilePortfolio1.png',
  },
  {
    image: '/assets/MobilePortfolio2.png',
  },
  {
    image: '/assets/MobilePortfolio3.png',
  },
  {
    image: '/assets/VideoPortfolio1.png',
  },
  {
    image: '/assets/VideoPortfolio2.png',
  },
  {
    image: '/assets/VideoPortfolio3.png',
  },
]

const WebPortfolioData = [
  {
    image: '/assets/WebPortfolio1.png',
  },
  {
    image: '/assets/WebPortfolio2.png',
  },
  {
    image: '/assets/WebPortfolio3.png',
  },
  {
    image: '/assets/WebPortfolio4.png',
  },
  {
    image: '/assets/WebPortfolio5.png',
  },
  {
    image: '/assets/WebPortfolio6.png',
  },
  {
    image: '/assets/VideoPortfolio1.png',
  },
  {
    image: '/assets/VideoPortfolio2.png',
  },
  {
    image: '/assets/VideoPortfolio3.png',
  },
]

const MobilePortfolioData = [
  {
    image: '/assets/MobilePortfolio1.png',
  },
  {
    image: '/assets/MobilePortfolio2.png',
  },
  {
    image: '/assets/MobilePortfolio3.png',
  },
  {
    image: '/assets/MobilePortfolio4.png',
  },
  {
    image: '/assets/MobilePortfolio5.png',
  },
]

const LogoPortfolioData = [
  {
    image: '/assets/LogoPortfolio1.png',
  },
  {
    image: '/assets/LogoPortfolio2.png',
  },
  {
    image: '/assets/LogoPortfolio3.png',
  },
  {
    image: '/assets/LogoPortfolio4.png',
  },
  {
    image: '/assets/LogoPortfolio5.png',
  },
  {
    image: '/assets/LogoPortfolio6.png',
  },
]

const VideoPortfolioData = [
  {
    image: '/assets/VideoPortfolio1.png',
  },
  {
    image: '/assets/VideoPortfolio2.png',
  },
  {
    image: '/assets/VideoPortfolio3.png',
  },
  {
    image: '/assets/VideoPortfolio4.png',
  },
  {
    image: '/assets/VideoPortfolio5.png',
  },
  {
    image: '/assets/VideoPortfolio6.png',
  },
]
function Tabber() {
  const [isActive, setIsActive] = useState(0)
  const tabs = [
    {
      label: 'All',
      content: (
        <div className='All-container'>
          <PortfolioContent PortfolioData={AllPortfolioData} />
        </div>
      ),
    },
    {
      label: 'Web design and development',
      content: (
        <div className='web-design-container'>
          <PortfolioContent PortfolioData={WebPortfolioData} />
        </div>
      ),
    },
    {
      label: 'Mobile apps',
      content: (
        <div className='mobile-apps-container'>
          <PortfolioContent PortfolioData={MobilePortfolioData} />
        </div>
      ),
    },
    {
      label: 'logo designs',
      content: (
        <div className='logo-designs-container'>
          <PortfolioContent PortfolioData={LogoPortfolioData} />
        </div>
      ),
    },
    {
      label: 'video animations',
      content: (
        <div className='video-animations-container'>
          <PortfolioContent PortfolioData={VideoPortfolioData} />
        </div>
      ),
    },
  ]

  return (
    <div className='tabber-section'>
      <div className='tabber-warpper'>
        <div className='tab-buttons'>
          {tabs.map((tab, index) => (
            <div
              style={{
                color: isActive === index ? '#00F3F4' : '',
                // fontFamily: 'Monument Extended Regula',
              }}
              key={index}
              onClick={() => {
                setIsActive(index)
              }}
              className={`tab-button ${isActive === index ? 'active' : ''}`}
            >
              {tab.label}
            </div>
          ))}
        </div>
        <div className='tab-content'>{tabs[isActive].content}</div>
      </div>
    </div>
  )
}

export default Tabber
