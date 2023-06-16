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
import styles from '../styles/portfolio.module.css'
import HeroContactus from './compnents/HeroSection/HeroContactus'
import Video from '../public/assets/video/ContentWriting.mp4'

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

const ContentDataPackage = [
  {
    id: 1,
    title: 'ONE PAGE SITE CONTENT',
    packageBlue: 'PACKAGE',
    regularPrice: '$400',
    salePrice: ' $699',
    speakWithUs: 'Speak with us',
    contactNumber: '414 400 3996',
    contactNumberLink: '#',
    chatNow: 'Chat Now',
    chatNowLink: '#',
    btnTxt: 'get in touch',
    btnLink: '#',
    listItems: [
      'Up to 1000 words',
      'Additional pages',
      'Banner writing',
      'Meta Description ',
      'Satisfaction policy',
      'Search engine optimization words',
      'Unique Content protected',
    ],
  },
  {
    id: 2,
    title: 'START-UP SITE CONTENT',
    packageBlue: 'PACKAGE',
    regularPrice: '$999',
    salePrice: ' $1299',
    speakWithUs: 'Speak with us',
    contactNumber: '414 400 3996',
    contactNumberLink: '#',
    chatNow: 'Chat Now',
    chatNowLink: '#',
    btnTxt: 'get in touch',
    btnLink: '#',
    listItems: [
      'Up to 2500 words total',
      'Additional pages',
      'Banner writing',
      'Meta Description ',
      'Satisfaction policy',
      'Search engine optimization words',
      'Unique Content protected',
    ],
  },
  {
    id: 3,
    title: 'BUSINESS SITE CONTENT',
    packageBlue: 'PACKAGE',
    regularPrice: '$1500',
    salePrice: ' $1899',
    speakWithUs: 'Speak with us',
    contactNumber: '414 400 3996',
    contactNumberLink: '#',
    chatNow: 'Chat Now',
    chatNowLink: '#',
    btnTxt: 'get in touch',
    btnLink: '#',
    listItems: [
      'Up to 5000 words total',
      'Additional pages',
      'Banner writing',
      'Meta Description ',
      'Satisfaction policy',
      'Search engine optimization words',
      'Unique Content protected',
    ],
  },
];


const contentWriting = () => {
  const marqueeText = 'Portfolio'
  const headingText = 'content writing'
  const company = 'portfolio'
  const title = 'content writing'
  const description =
    'Website content plays an important role in attracting audiences and increasing business engagement. Dipixels creates unique, informative, and engaging content that comprehensively provide content that visitors are interested in when browsing your site. The quality level of your content affects how long your visitors stay on your site, how many pages they visit, and whether their attention is diverted immediately.'
  const packagesHeading = 'content writing'
  const packagesDescription =
    'Want reliable written content for your business, blog, or website? Avail the best content writing packages today and let us do the work for you.'

  return (
    <>
      <Layout>
        <Hero
          title='content'
          company='writing'
          description='Vibrant and Unique website content that drives search results'
          videoLink={Video}
        />
        <Technologies />
        
        <DesignProcess title={title} description={description} />
        <div className={styles.packagesSection}>
        <WebsitePackages
          packagesHeading={packagesHeading}
          packagesDescription={packagesDescription}
        />
        </div>
        <div
          style={{
            width: '100%',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className={styles.websitepackagescard_wrapper}>
            <WebsitePackagesCard dataPackage={ContentDataPackage} />
          </div>
        </div>
        <ScrollHeadings />
      </Layout>
    </>
  )
}

export default contentWriting
