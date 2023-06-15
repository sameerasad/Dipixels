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
    title: 'STARTER SEO PACKAGE',
    packageBlue: '',
    regularPrice: '$550',
    salePrice: ' $650',
    speakWithUs: 'Speak with us',
    contactNumber: '414 400 3996',
    contactNumberLink: '#',
    chatNow: 'Chat Now',
    chatNowLink: '#',
    btnTxt: 'Get a quote',
    btnLink: '#',
    listItems: [
      '10 Targeted Keywords',
      '10 Taget Pages',
      '2 Paid Submissions',
      '600 Quality Backlinks',
      'Reporting Weekly',
      'Meta Title',
      'Meta Description',
      'Keywords Research',
      'Image Alt-Tag',
      '5 Page Rank',
      'Pages Indexed on Google',
      'Keyword Density',
      'Anchor Text Linking',
      'Google Analytics Set Up',
      'Site Map XML',
      'Robots.txt',
      'Canonical Issues',
    ],
  },
  {
    id: 2,
    title: 'EXECUTIVE SEO PACKAGE',
    packageBlue: '',
    regularPrice: '$750',
    salePrice: ' $850',
    speakWithUs: 'Speak with us',
    contactNumber: '414 400 3996',
    contactNumberLink: '#',
    chatNow: 'Chat Now',
    chatNowLink: '#',
    btnTxt: 'Get a quote',
    btnLink: '#',
    listItems: [
      '20 Targeted Keywords',
      '20 Taget Pages',
      '5 Paid Submissions',
      '1200 Quality Backlinks',
      'Reporting Weekly',
      'Mobile Site Optimization',
      'Content Writing',
      '3 website BLogs',
      'Meta Title',
      'Meta Description',
      'Keywords Research',
      'Image Alt-Tag',
      'Header (H1/H2)',
      'HTML Validations',
      '10 Page Rank',
      'Pages Indexed on Google',
      'Keyword Density',
      'Anchor Text Linking',
      'Google Analytics Set Up',
      'Google Webmaster Set Up',
      'Site Map XML',
      'Robots.txt',
      'Canonical Issues',
      'Fix Broken Links 404',
    ],
  },
  {
    id: 3,
    title: 'CORPORATE SEO PACKAGE',
    packageBlue: '',
    regularPrice: '$1300',
    salePrice: ' $1400',
    speakWithUs: 'Speak with us',
    contactNumber: '414 400 3996',
    contactNumberLink: '#',
    chatNow: 'Chat Now',
    chatNowLink: '#',
    btnTxt: 'Get a quote',
    btnLink: '#',
    listItems: [
      '50 Targeted Keywords',
      'Unlimited Taget Pages',
      '10 Paid Submissions',
      '2500 Quality Backlinks',
      'Mobile Site Optimization',
      'Content Writing',
      '5 website BLogs',
      'Social Media Posting',
      'Reporting Weekly',
      'Meta Title',
      'Meta Description',
      'Keywords Research',
      'Image Alt-Tag',
      'Header (H1/H2)',
      'HTML Validations',
      'SEO Content Writing',
      '10 Page Rank',
      'Pages Indexed on Google',
      'Keyword Density',
      'Anchor Text Linking',
      'ALnding Page Creation',
      'Google Analytics Set Up',
      'Google Webmaster Set Up',
      'Customise 404 Error',
      'Site Map XML',
      'Google Alert setting',
      'Robots.txt',
      'Canonical Issues',
      'Fix Broken Links 404',
      'Social Media Post Ceation',
      'Availability of Search Facility',
      'Breadcrumbs Navigation',
      'XML RSS Feeds',
      'Script Optimization',
      'Website Form Validation',
    ],
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
          description='Search engine optimization (SEO) helps to bring your website in the limelight. All the efforts you do to make a catchy website are fruitful only when it is able to receive trafficThe basic precursor for having a successful site is that more people are visiting and taking benefits from its contentswhich in turn is profitable for youSEO plays an important role in order to bring the vagrant net surfers on your website.'
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
