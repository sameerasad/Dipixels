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
    listItem1: '3 Basic Animation Designs',
    listItem2: 'Free Color Options',
    listItem3: 'Free Icons',
    listItem4: '2 to 3 Business Days Rotation',
    listItem5: '10 Revisions',
    title: 'STARTER ANIMATION DESIGN',
    packageBlue: 'PACKAGE',
    regularPrice: '$49',
    salePrice: ' $129',
    speakWithUs: 'Speak with us',
    contactNumber: '414 400 3996',
    contactNumberLink: '#',
    chatNow: 'Chat Now',
    chatNowLink: '#',
    btnTxt: 'Place Your order',
    btnLink: '#',
  },
  {
    id: 2,
    listItem1: '5 High Quality Animation Designs',
    listItem2: 'Free Color Options',
    listItem3: 'Free Icons',
    listItem4: 'Free Invoice Design',
    listItem5: 'Unlimited Revisions',
    title: 'STANDARD ANIMATION DESIGN',
    packageBlue: 'PACKAGE',
    regularPrice: '$199',
    salePrice: ' $309',
    speakWithUs: 'Speak with us',
    contactNumber: '414 400 3996',
    contactNumberLink: '#',
    chatNow: 'Chat Now',
    chatNowLink: '#',
    btnTxt: 'Place Your order',
    btnLink: '#',
  },
  {
    id: 3,
    title: 'PREMIUM ANIMATION DESIGN',
    packageBlue: 'PACKAGE',
    regularPrice: '$299',
    salePrice: ' $459',
    listItem1: '10 Premium Logo Designs',
    listItem2: 'Free Color Options',
    listItem3: 'Free Icons',
    listItem4: 'Free Invoice Design',
    listItem5: 'Unlimited Revisions',
    title: 'STANDARD LOGO DESIGN',
    speakWithUs: 'Speak with us',
    contactNumber: '414 400 3996',
    contactNumberLink: '#',
    chatNow: 'Chat Now',
    chatNowLink: '#',
    btnTxt: 'Place Your order',
    btnLink: '#',
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
          description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.'
          videoLink={Video}
        />
        <Technologies />
        <Portfolio
          marqueeText={marqueeText}
          headingText={headingText}
          company={company}
        />
        <div
          style={{
            width: '100%',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ maxWidth: '85%' }}>
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
          <div style={{ maxWidth: '85%' }}>
            <WebsitePackagesCard dataPackage={AnimationDataPackage} />
          </div>
        </div>
        <ScrollHeadings />
      </Layout>
    </>
  )
}

export default videoAnimationProduction
