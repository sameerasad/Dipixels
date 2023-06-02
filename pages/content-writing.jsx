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

const ContentDataPackage = [
  {
    id: 1,
    listItem1: "Up to 1000 words",
    listItem2: "Additional pages",
    listItem3: "Banner writing",
    listItem4: "Meta Description ",
    listItem5: "Satsfaction policy",
    listItem6: "Search engine optimization words",
    listItem7: "Unique Content protected",
    title: "one page site content",
    packageBlue: "PACKAGE",
    regularPrice: "$400",
    salePrice: " $699",
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
    listItem1: "Up to 2500 words total",
    listItem2: "Additional pages",
    listItem3: "Banner writing",
    listItem4: "Meta Description ",
    listItem5: "Satsfaction policy",
    listItem6: "Search engine optimization words",
    listItem7: "Unique Content protected",
    title: "Start-Up site Content package",
    packageBlue: "PACKAGE",
    regularPrice: "$999",
    salePrice: " $1299",
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
    listItem1: "Up to 5000 words total",
    listItem2: "Additional pages",
    listItem3: "Banner writing",
    listItem4: "Meta Description ",
    listItem5: "Satsfaction policy",
    listItem6: "Search engine optimization words",
    listItem7: "Unique Content protected",
    title: "Business site Content package",
    packageBlue: "PACKAGE",
    regularPrice: "$1500",
    salePrice: " $1899",
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
          title="content"
          company="writing"
          description="Vibrant and Unique website content that drives search results"
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
          <div className={styles.websitepackagescard_wrapper}>
            <WebsitePackagesCard dataPackage={ContentDataPackage} />
          </div>
        </div>
        <ScrollHeadings />
      </Layout>
    </>
  );
};

export default contentWriting;
