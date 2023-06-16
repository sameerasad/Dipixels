import React from 'react'
import Layout from './compnents/Layout/Layout'
import Hero from './compnents/HeroSection/Hero'
import Technologies from './compnents/Technologies/Technologies'
import Portfolio from './compnents/Portfolio/Portfolio'
import PortfolioContent from './compnents/Portfolio/PortfolioContent'
import Button from './compnents/Buttons/Button/Button'
import DesignProcess from './compnents/DesignProcess/DesignProcess'
import WebsitePackages from './compnents/WebsitePackages/WebsitePackages'
import ScrollHeadings from './compnents/Scroll/ScrollHeadings'
import WebsitePackagesCard from './compnents/WebsitePackages/WebsitePackagesCard'
import Video from '../public/assets/video/VideoAnimation.mp4'
import styles from '../styles/portfolio.module.css'
import HeroContactus from './compnents/HeroSection/HeroContactus'

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

const AnimationDataPackage = [
  {
    id: 1,
    title: 'STARTER ANIMATION DESIGN',
    packageBlue: 'PACKAGE',
    regularPrice: '$49',
    salePrice: ' $129',
    speakWithUs: 'Speak with us',
    contactNumber: '414 400 3996',
    contactNumberLink: '#',
    chatNow: 'Chat Now',
    chatNowLink: '#',
    btnTxt: 'get in touch',
    btnLink: '#',
    listItems: ['30sec Video', 'Script', 'Storyboard', 'Animation'],
  },
  {
    id: 2,
    title: 'STANDARD ANIMATION DESIGN',
    packageBlue: 'PACKAGE',
    regularPrice: '$199',
    salePrice: ' $309',
    speakWithUs: 'Speak with us',
    contactNumber: '414 400 3996',
    contactNumberLink: '#',
    chatNow: 'Chat Now',
    chatNowLink: '#',
    btnTxt: 'get in touch',
    btnLink: '#',
    listItems: [
      '60sec Video',
      'Script',
      'Storyboard',
      'Animation',
      'Background Music',
    ],
  },
  {
    id: 3,
    title: 'PREMIUM ANIMATION DESIGN',
    packageBlue: 'PACKAGE',
    regularPrice: '$299',
    salePrice: ' $459',
    speakWithUs: 'Speak with us',
    contactNumber: '414 400 3996',
    contactNumberLink: '#',
    chatNow: 'Chat Now',
    chatNowLink: '#',
    btnTxt: 'get in touch',
    btnLink: '#',
    listItems: [
      '90sec Video',
      'Script',
      'Storyboard',
      'Animation',
      'Background Music',
      'Voice Over',
    ],
  },
]

const videoAnimationProduction = () => {
  const marqueeText = 'Portfolio'
  const headingText = 'video animation'
  const company = 'portfolio'
  const title = 'video animation'
  const description =
    'We have a very seamless process when it comes to animation and video production. Our team understands the importance of step by step covering all the necessary spots and leaving no gaps. Our expert techniques and exceptional design skills provide animation services highlights for helping your brand to achieve your business goals quickly and efficiently.'
  const packagesHeading = 'video animation'
  const packagesDescription =
    'We believe in service-for-all. Therefore, we offer you pocket-friendly packages so you choose the one that best suits your business. Check out our amazing packages below.'

  return (
    <>
      <Layout>
        <Hero
          title='video animation and'
          company='production'
          description='With our creative expertise and state-of-the-art technology, we create captivating and impactful videos that engage your audience and deliver your message effectively.'
          videoLink={Video}
        />
        <Technologies />
        <Portfolio
          marqueeText={marqueeText}
          headingText={headingText}
          company={company}
        />
        <div className={styles.portfolioContent_wrapper_section}>
          <div className={styles.portfolioContent_wrapper}>
            <PortfolioContent PortfolioData={VideoPortfolioData} />
          </div>
        </div>
        <DesignProcess title={title} description={description} />
        <WebsitePackages
          packagesHeading={packagesHeading}
          packagesDescription={packagesDescription}
        />
        <div
          style={{
            width: '100%',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className={styles.websitepackagescard_wrapper}>
            <WebsitePackagesCard dataPackage={AnimationDataPackage} />
          </div>
        </div>
        <ScrollHeadings />
      </Layout>
    </>
  )
}

export default videoAnimationProduction
