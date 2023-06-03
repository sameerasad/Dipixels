import React from 'react'
import Hero from './compnents/HeroSection/Hero'
import Layout from './compnents/Layout/Layout'
import Technologies from './compnents/Technologies/Technologies'
import Portfolio from './compnents/Portfolio/Portfolio'
import DesignProcess from './compnents/DesignProcess/DesignProcess'
import WebsitePackages from './compnents/WebsitePackages/WebsitePackages'
import ScrollHeadings from './compnents/Scroll/ScrollHeadings'
import PortfolioContent from './compnents/Portfolio/PortfolioContent'
import WebsitePackagesCard from './compnents/WebsitePackages/WebsitePackagesCard'
import Video from '../public/assets/video/WebsiteDesign.mp4'
import styles from '../styles/portfolio.module.css'
import HeroContactus from './compnents/HeroSection/HeroContactus'

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
]

const WebDataPackage = [
  {
    id: 1,
    listItem1: '5 Pages Website Design',
    listItem2: 'HTML Based',
    listItem3: '2 Banner Designs',
    listItem4: 'Contact / Query Form',
    listItem5: '6 Revisions',
    title: 'STARTER WEB',
    packageBlue: 'PACKAGE',
    regularPrice: '$499',
    salePrice: ' $729',
    speakWithUs: 'Speak with us',
    contactNumber: '414 400 3996',
    contactNumberLink: '#',
    chatNow: 'Chat Now',
    chatNowLink: '#',
    btnTxt: 'Get a quote',
    btnLink: '#',
  },
  {
    id: 2,
    listItem1: 'Up to 10 Pages Website Design',
    listItem2: 'CMS (WordPress)',
    listItem3: '3 Banner Designs',
    listItem4: 'Unlimited Revision',
    listItem5: 'Contact/Query Form',
    title: 'PROFESSIONAL WEB',
    packageBlue: 'PACKAGE',
    regularPrice: '$999',
    salePrice: ' $1309',
    speakWithUs: 'Speak with us',
    contactNumber: '414 400 3996',
    contactNumberLink: '#',
    chatNow: 'Chat Now',
    chatNowLink: '#',
    btnTxt: 'Get a quote',
    btnLink: '#',
  },
  {
    id: 3,
    title: 'PREMIUM WEB',
    packageBlue: 'PACKAGE',
    regularPrice: '$2499',
    salePrice: ' $2700',
    listItem1: 'Up to 15 Pages Website Design',
    listItem2: 'WordPress or Php Development',
    listItem3: '10 Banner Designs',
    listItem4: 'Unlimited Revision',
    listItem5: 'Interactive Sliding Banners',
    speakWithUs: 'Speak with us',
    contactNumber: '414 400 3996',
    contactNumberLink: '#',
    chatNow: 'Chat Now',
    chatNowLink: '#',
    btnTxt: 'Get a quote',
    btnLink: '#',
  },
]

const WebDesignDevelopment = () => {
  const marqueeText = 'Portfolio'
  const headingText = 'Web Design'
  const company = 'portfolio'
  const title = 'web design'
  const description =
    'Dipixel is amongst the top logo design agencies in town. With high-quality designs embracing its portfolio, the agency is striving towards making brands shine. We are qualified to produce designs that have the tendency to make eyes pop, heads turn, and leave you in awe of their immense elegance and grace. The process that follows the creation of designs is simple.'
  const packagesHeading = 'website'
  const packagesDescription =
    'We believe in providing affordable logo design services to all. Hence, here we have for you some great custom logo design packages to choose from'
  return (
    <>
      <Layout>
        <Hero
          title='web design and'
          description='An adequate website interface can bring great traffic towards your business. Allow dipixels to build an exemplary interface for you. Have a look at our amazing web design portfolio below.'
          company='development'
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
            <PortfolioContent PortfolioData={WebPortfolioData} />
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
            <WebsitePackagesCard dataPackage={WebDataPackage} />
          </div>
        </div>
        <ScrollHeadings />
      </Layout>
    </>
  )
}

export default WebDesignDevelopment
