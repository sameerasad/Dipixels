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
import Video from '../public/assets/video/LogoDesigning.mp4'
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

const LogoDataPackage = [
  {
    id: 1,
    title: 'STARTER LOGO DESIGN',
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
    listItems: [
      '3 Basic Logo Designs',
      'Free Color Options',
      'Free Icons',
      'Free Invoice Design',
      'upto 15 Revisions',
    ],
  },
  {
    id: 2,
    title: 'STANDARD LOGO DESIGN',
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
      '5 High Quality Logo Designs',
      'Free Color Options',
      'Free Icons',
      'Free Invoice Design',
      'Unlimited Revisions',
    ],
  },
  {
    id: 3,
    title: 'PREMIUM LOGO DESIGN',
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
      '10 Premium Logo Designs',
      'Free Color Options',
      'Free Icons',
      'Free Invoice Design',
      'Unlimited Revisions',
    ],
  },
];

const logoDesign = () => {
  const marqueeText = 'Portfolio'
  const headingText = 'logo Design'
  const company = 'portfolio'
  const title = 'Logo Design'
  const description =
    'Dipixel is amongst the top logo design agencies in town. With high-quality designs embracing its portfolio, the agency is striving towards making brands shine. We are qualified in producing designs that have the tendency to make eyes pop, heads turn, and leave you in awe for its immense elegance and grace. The process that follows the creation of designs is simple.'
  const packagesHeading = 'logo design'
  const packagesDescription =
    'We believe in providing affordable app design services to all. Hence, here we have for you some great custom app design packages to choose from'

  return (
    <>
      <Layout>
        <Hero
          title='logo'
          company='design'
          description='For any business or company, its logo plays a vital role in identifying that brand. No matter what your brand is about, a great logo will draw more attention and fully engage your audience. Dipixels offers you an elegant and attractive logo design service that not only strengthens your brand identity but also leaves a lasting impression.'
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
            <PortfolioContent PortfolioData={LogoPortfolioData} />
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
            <WebsitePackagesCard dataPackage={LogoDataPackage} />
          </div>
        </div>
        <ScrollHeadings />
      </Layout>
    </>
  )
}

export default logoDesign
