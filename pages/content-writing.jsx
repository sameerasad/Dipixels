<<<<<<< HEAD
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
import Video from '../public/assets/video/ContentWriting.mp4'
=======
import React from "react";
import Layout from "./compnents/Layout/Layout";
import Hero from "./compnents/HeroSection/Hero";
import Technologies from "./compnents/Technologies/Technologies";
import Portfolio from "./compnents/Portfolio/Portfolio";
import PortfolioContent from "./compnents/Portfolio/PortfolioContent";
import Button from "./compnents/Buttons/Button/Button";
import DesignProcess from "./compnents/DesignProcess/DesignProcess";
import WebsitePackages from "./compnents/WebsitePackages/WebsitePackages";
import ScrollHeadings from "./compnents/Scroll/ScrollHeadings";
import WebsitePackagesCard from "./compnents/WebsitePackages/WebsitePackagesCard";
>>>>>>> 6861d57eb042424c2329e409ab1c05053799978f

const LogoPortfolioData = [
  {
    image: "/assets/LogoPortfolio1.png",
  },
  {
    image: "/assets/LogoPortfolio2.png",
  },
  {
    image: "/assets/LogoPortfolio3.png",
  },
  {
    image: "/assets/LogoPortfolio4.png",
  },
  {
    image: "/assets/LogoPortfolio5.png",
  },
  {
    image: "/assets/LogoPortfolio6.png",
  },
];

const LogoDataPackage = [
  {
    id: 1,
    listItem1: "3 Basic Logo Designs",
    listItem2: "Free Color Options",
    listItem3: "Free Icons",
    listItem4: "2 to 3 Business Days Rotation",
    listItem5: "10 Revisions",
    title: "STARTER LOGO DESIGN",
    packageBlue: "PACKAGE",
    regularPrice: "$49",
    salePrice: " $129",
    speakWithUs: "Speak with us",
    contactNumber: "414 400 3996",
    contactNumberLink: "#",
    chatNow: "Chat Now",
    chatNowLink: "#",
    btnTxt: "Get a quote",
    btnLink: "#",
  },
  {
    id: 2,
    listItem1: "5 High Quality Logo Designs",
    listItem2: "Free Color Options",
    listItem3: "Free Icons",
    listItem4: "Free Invoice Design",
    listItem5: "Unlimited Revisions",
    title: "STANDARD LOGO DESIGN",
    packageBlue: "PACKAGE",
    regularPrice: "$199",
    salePrice: " $309",
    speakWithUs: "Speak with us",
    contactNumber: "414 400 3996",
    contactNumberLink: "#",
    chatNow: "Chat Now",
    chatNowLink: "#",
    btnTxt: "Get a quote",
    btnLink: "#",
  },
  {
    id: 3,
    title: "PREMIUM LOGO DESIGN",
    packageBlue: "PACKAGE",
    regularPrice: "$299",
    salePrice: " $459",
    listItem1: "10 Premium Logo Designs",
    listItem2: "Free Color Options",
    listItem3: "Free Icons",
    listItem4: "Free Invoice Design",
    listItem5: "Unlimited Revisions",
    title: "STANDARD LOGO DESIGN",
    speakWithUs: "Speak with us",
    contactNumber: "414 400 3996",
    contactNumberLink: "#",
    chatNow: "Chat Now",
    chatNowLink: "#",
    btnTxt: "Get a quote",
    btnLink: "#",
  },
];

const contentWriting = () => {
  const marqueeText = "Portfolio";
  const headingText = "content writing";
  const company = "portfolio";
  const title = "content writing";
  const description =
    "Website content plays an important role in attracting audiences and increasing business engagement. Dipixels creates unique, informative, and engaging content that comprehensively provide content that visitors are interested in when browsing your site. The quality level of your content affects how long your visitors stay on your site, how many pages they visit, and whether their attention is diverted immediately. Our professional content writers can fulfil your expectations of quality and SEO-driven content, that enhances your distinctive identity in the market.";
  const packagesHeading = "content writing";
  const packagesDescription =
    "Want reliable written content for your business, blog, or website? Avail the best content writing packages today and let us do the work for you.";

  return (
    <>
      <Layout>
        <Hero
<<<<<<< HEAD
          title='content'
          company='writing'
          description='Vibrant and Unique website content that drives search results'
          videoLink={Video}
=======
          title="content"
          company="writing"
          description="Vibrant and Unique website content that drives search results"
>>>>>>> 6861d57eb042424c2329e409ab1c05053799978f
        />
        <Technologies />
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
          <div style={{ maxWidth: "85%" }}>
            <WebsitePackagesCard dataPackage={LogoDataPackage} />
          </div>
        </div>
        <ScrollHeadings />
      </Layout>
    </>
  );
};

export default contentWriting;
