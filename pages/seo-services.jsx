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
import Video from '../public/assets/video/SEO.mp4'
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

const SeoDataPackage = [
  {
    id: 1,
    listItem1: '3 Basic Seo Designs',
    listItem2: 'Free Color Options',
    listItem3: 'Free Icons',
    listItem4: '2 to 3 Business Days Rotation',
    listItem5: '10 Revisions',
    title: 'STARTER SEO PACKAGE',
    packageBlue: 'PACKAGE',
    regularPrice: '$49',
    salePrice: ' $129',
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
    listItem1: '5 High Quality Seo Designs',
    listItem2: 'Free Color Options',
    listItem3: 'Free Icons',
    listItem4: 'Free Invoice Design',
    listItem5: 'Unlimited Revisions',
    title: 'STANDARD SEO PACKAGE',
    packageBlue: 'PACKAGE',
    regularPrice: '$199',
    salePrice: ' $309',
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
    title: 'PREMIUM SEO DESIGN',
    packageBlue: 'PACKAGE',
    regularPrice: '$299',
    salePrice: ' $459',
    listItem1: '10 Premium Seo Designs',
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
    btnTxt: 'Get a quote',
    btnLink: '#',
  },
]

const seoServices = () => {
  const marqueeText = 'Portfolio'
  const headingText = 'seo'
  const company = 'portfolio'
  const title = 'seo'
  const description =
    'On page optimization (AKA on-page SEO) refers to all measures that can be taken directly within the website in order to improve its position in the search rankings. Examples of this include measures to optimize the content or improve the meta description and title tags.'
  const packagesHeading = 'seo'
  const packagesDescription =
    'Search engine optimization (SEO) helps to bring your website in the limelight. All the efforts you do to make a catchy website are fruitful only when it is able to receive traffic. The basic precursor for having a successful site is that more people are visiting and taking benefits from its contents, which in turn is profitable for you. SEO plays an important role in order to bring the vagrant net surfers on your website.'

  return (
    <>
      <Layout>
        <Hero
          title='seo'
          company='services'
          description='Achieve higher search engine rankings and boost your online visibility with our proven SEO strategies.'
          videoLink={Video}
        />
        <Technologies />
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
            <WebsitePackagesCard dataPackage={SeoDataPackage} />
          </div>
        </div>
        <ScrollHeadings />
      </Layout>
    </>
  )
}

export default seoServices
