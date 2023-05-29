import React from 'react'
import Hero from './compnents/HeroSection/Hero'
import Layout from './compnents/Layout/Layout'
import Technologies from './compnents/Technologies/Technologies'
import Portfolio from './compnents/Portfolio/Portfolio'
import DesignProcess from './compnents/DesignProcess/DesignProcess'
import WebsitePackages from './compnents/WebsitePackages/WebsitePackages'
import ScrollHeadings from './compnents/Scroll/ScrollHeadings'
import PortfolioContent from './compnents/Portfolio/PortfolioContent'
import StyledButton from './compnents/Buttons/StyledButton/StyledButton'
import Button from './compnents/Buttons/Button/Button'
import WebsitePackagesCard from './compnents/WebsitePackages/WebsitePackagesCard'

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

const MobileDataPackage = [
  {
    id: 1,
    listItem1: '5 Pages mbile app Design',
    listItem2: 'HTML Based',
    listItem3: '2 Banner Designs',
    listItem4: 'Contact / Query Form',
    listItem5: '6 Revisions',
    title: 'STARTER MOBILE APP',
    packageBlue: 'PACKAGE',
    regularPrice: '$499',
    salePrice: ' $729',
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
    listItem1: 'Up to 10 Pages mobile app Design',
    listItem2: 'CMS (WordPress)',
    listItem3: '3 Banner Designs',
    listItem4: 'Unlimited Revision',
    listItem5: 'Contact/Query Form',
    title: 'STANDARD MOBILE APP',
    packageBlue: 'PACKAGE',
    regularPrice: '$999',
    salePrice: ' $1309',
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
    title: 'PREMIUM MOBILE APP',
    packageBlue: 'PACKAGE',
    regularPrice: '$2499',
    salePrice: ' $2700',
    listItem1: 'Up to 15 Pages mobile app Design',
    listItem2: 'WordPress or Php Development',
    listItem3: '10 Banner Designs',
    listItem4: 'Unlimited Revision',
    listItem5: 'Interactive Sliding Banners',
    speakWithUs: 'Speak with us',
    contactNumber: '414 400 3996',
    contactNumberLink: '#',
    chatNow: 'Chat Now',
    chatNowLink: '#',
    btnTxt: 'Place Your order',
    btnLink: '#',
  },
]

const MobileappDesignAndDevelopment = () => {
  const marqueeText = 'Portfolio'
  const headingText = 'App Design'
  const company = 'portfolio'
  const title = 'App Design'
  const description =
    'Dipixel is amongst the top logo design agencies in town. With high-quality designs embracing its portfolio, the agency is striving towards making brands shine. We are qualified in producing designs that have the tendency to make eyes pop, heads turn, and leave you in awe for its immense elegance and grace. The process that follows the creation of designs is simple.'
  const packagesHeading = 'app design'
  const packagesDescription = 'Dipixel is amongst the top logo design agencies in town. With high-quality designs embracing its portfolio, the agency is striving towards making brands shine. We are qualified in producing designs that have the tendency to make eyes pop, heads turn, and leave you in awe for its immense elegance and grace. The process that follows the creation of designs is simple.'
  return (
    <>
      <Layout>
        <Hero
          title='Mobile App Design And'
          company='development'
          description='An adequate website interface can bring great traffic towards your business. Allow dipixels to build an exemplary interface for you. Have a look at our amazing web design portfolio below.'
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
            <PortfolioContent PortfolioData={MobilePortfolioData} />
          </div>
        </div>
        <DesignProcess title={title} description={description} />
        <WebsitePackages packagesHeading={packagesHeading} packagesDescription={packagesDescription}/>

        <div
          style={{
            width: '100%',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ maxWidth: '85%' }}>
            <WebsitePackagesCard dataPackage={MobileDataPackage} />
          </div>
        </div>
        <ScrollHeadings />
      </Layout>
    </>
  )
}

export default MobileappDesignAndDevelopment
