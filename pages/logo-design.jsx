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
    listItem1: '3 Basic Logo Designs',
    listItem2: 'Free Color Options',
    listItem3: 'Free Icons',
    listItem4: '2 to 3 Business Days Rotation',
    listItem5: '10 Revisions',
    title: 'STARTER LOGO DESIGN',
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
    listItem1: '5 High Quality Logo Designs',
    listItem2: 'Free Color Options',
    listItem3: 'Free Icons',
    listItem4: 'Free Invoice Design',
    listItem5: 'Unlimited Revisions',
    title: 'STANDARD LOGO DESIGN',
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
    title: 'PREMIUM LOGO DESIGN',
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

const logoDesign = () => {
  const marqueeText = 'Portfolio'
  const headingText = 'logo Design'
  const company = 'portfolio'
  const title = 'Logo Design'
  const description =
  'Dipixel is amongst the top logo design agencies in town. With high-quality designs embracing its portfolio, the agency is striving towards making brands shine. We are qualified in producing designs that have the tendency to make eyes pop, heads turn, and leave you in awe for its immense elegance and grace. The process that follows the creation of designs is simple.'
  const packagesHeading = 'logo design'
    const packagesDescription='We believe in providing affordable app design services to all. Hence, here we have for you some great custom app design packages to choose from'

  return (
    <>
      <Layout>
        <Hero
          title='logo'
          company='design'
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
            <PortfolioContent PortfolioData={LogoPortfolioData} />
          </div>
        </div>
        <DesignProcess title={title} description={description}/>
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
            <WebsitePackagesCard dataPackage={LogoDataPackage} />
          </div>
        </div>
        <ScrollHeadings />
      </Layout>
    </>
  )
}

export default logoDesign
