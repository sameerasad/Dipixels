import React from "react";
import Hero from "./compnents/HeroSection/Hero";
import Layout from "./compnents/Layout/Layout";
import Technologies from "./compnents/Technologies/Technologies";
import Portfolio from "./compnents/Portfolio/Portfolio";
import DesignProcess from "./compnents/DesignProcess/DesignProcess";
import WebsitePackages from "./compnents/WebsitePackages/WebsitePackages";
import ScrollHeadings from "./compnents/Scroll/ScrollHeadings";
import PortfolioContent from "./compnents/Portfolio/PortfolioContent";
import StyledButton from "./compnents/Buttons/StyledButton/StyledButton";
import Button from "./compnents/Buttons/Button/Button";
import WebsitePackagesCard from "./compnents/WebsitePackages/WebsitePackagesCard";
import styles from "../styles/portfolio.module.css";
import HeroContactus from "./compnents/HeroSection/HeroContactus";
import Video from "../public/assets/video/MobileApplications.mp4";

const MobilePortfolioData = [
  {
    image: "/assets/MobilePortfolio1.png",
  },
  {
    image: "/assets/MobilePortfolio2.png",
  },
  {
    image: "/assets/MobilePortfolio3.png",
  },
  {
    image: "/assets/MobilePortfolio4.png",
  },
  // {
  //   image: "/assets/MobilePortfolio5.png",
  // },
];

const MobileDataPackage = [
  {
    id: 1,
    title: 'STARTER MOBILE APP',
    packageBlue: 'PACKAGE',
    regularPrice: '$1999',
    salePrice: ' $2299',
    speakWithUs: 'Speak with us',
    contactNumber: '414 400 3996',
    contactNumberLink: '#',
    chatNow: 'Chat Now',
    chatNowLink: '#',
    btnTxt: 'get in touch',
    btnLink: '#',
    listItems: [
      '5 Pages mobile application',
      'React native or Flutter based',
      'Api Integrations',
      'Testing and bug fixing',
      '3 Revisions',
    ],
  },
  {
    id: 2,
    title: 'STANDARD MOBILE APP',
    packageBlue: 'PACKAGE',
    regularPrice: '$2400',
    salePrice: ' $2699',
    speakWithUs: 'Speak with us',
    contactNumber: '414 400 3996',
    contactNumberLink: '#',
    chatNow: 'Chat Now',
    chatNowLink: '#',
    btnTxt: 'get in touch',
    btnLink: '#',
    listItems: [
      'Up to 10 screens of mobile app Design',
      'React native or Flutter based',
      "Api Integrations, Third party api's",
      'Testing and debugging',
      '5 revisions',
    ],
  },
  {
    id: 3,
    title: 'PREMIUM MOBILE APP',
    packageBlue: 'PACKAGE',
    regularPrice: '$3200',
    salePrice: ' $3399',
    speakWithUs: 'Speak with us',
    contactNumber: '414 400 3996',
    contactNumberLink: '#',
    chatNow: 'Chat Now',
    chatNowLink: '#',
    btnTxt: 'get in touch',
    btnLink: '#',
    listItems: [
      'Up to 15 screens mobile app Design',
      'React native Expo cli, ignite or flutter based',
      "Api Integrations, Third party api's",
      'Testing and debugging',
      'Interactive Sliding Banners',
    ],
  },
];


const MobileappDesignAndDevelopment = () => {
  const marqueeText = "Portfolio";
  const headingText = "App Design";
  const company = "portfolio";
  const title = "App Design";
  const description =
    "Dipixel is amongst the top logo design agencies in town. With high-quality designs embracing its portfolio, the agency is striving towards making brands shine. We are qualified in producing designs that have the tendency to make eyes pop, heads turn, and leave you in awe for its immense elegance and grace. The process that follows the creation of designs is simple.";
  const packagesHeading = "app design";
  const packagesDescription =
    "Dipixel is amongst the top logo design agencies in town. With high-quality designs embracing its portfolio, the agency is striving towards making brands shine. We are qualified in producing designs that have the tendency to make eyes pop, heads turn, and leave you in awe for its immense elegance and grace. The process that follows the creation of designs is simple.";
  return (
    <>
      <Layout>
        <Hero
          title="Mobile App Design"
          company="development"
          description="An adequate website interface can bring great traffic towards your business. Allow dipixels to build an exemplary interface for you. Have a look at our amazing web design portfolio below."
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
            <PortfolioContent PortfolioData={MobilePortfolioData} />
          </div>
        </div>
        <DesignProcess title={title} description={description} />
        <WebsitePackages
          packagesHeading={packagesHeading}
          packagesDescription={packagesDescription}
        />

        <div
          style={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className={styles.websitepackagescard_wrapper}>
            <WebsitePackagesCard dataPackage={MobileDataPackage} />
          </div>
        </div>
        <ScrollHeadings />
      </Layout>
    </>
  );
};

export default MobileappDesignAndDevelopment;
