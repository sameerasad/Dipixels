import React, { useState } from "react";
import WebsitePackagesCard from "../WebsitePackages/WebsitePackagesCard";

const WebDataPackage = [
  {
    id: 1,
    listItem1: "5 Pages Website Design",
    listItem2: "HTML Based",
    listItem3: "2 Banner Designs",
    listItem4: "Contact / Query Form",
    listItem5: "6 Revisions",
    title: "STARTER WEB",
    packageBlue: "PACKAGE",
    regularPrice: "$499",
    salePrice: " $729",
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
    listItem1: "Up to 10 Pages Website Design",
    listItem2: "CMS (WordPress)",
    listItem3: "3 Banner Designs",
    listItem4: "Unlimited Revision",
    listItem5: "Contact/Query Form",
    title: "PROFESSIONAL WEB",
    packageBlue: "PACKAGE",
    regularPrice: "$999",
    salePrice: " $1309",
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
    title: "PREMIUM WEB",
    packageBlue: "PACKAGE",
    regularPrice: "$2499",
    salePrice: " $2700",
    listItem1: "Up to 15 Pages Website Design",
    listItem2: "WordPress or Php Development",
    listItem3: "10 Banner Designs",
    listItem4: "Unlimited Revision",
    listItem5: "Interactive Sliding Banners",
    speakWithUs: "Speak with us",
    contactNumber: "414 400 3996",
    contactNumberLink: "#",
    chatNow: "Chat Now",
    chatNowLink: "#",
    btnTxt: "Get a quote",
    btnLink: "#",
  },
];

const MobileDataPackage = [
  {
    id: 1,
    listItem1: "5 Pages mobile application",
    listItem2: "React native or Flutter based",
    listItem3: "Api Intefrations",
    listItem4: "Testing and bug fixing",
    listItem5: "3 Revisions",
    title: "STARTER MOBILE APP",
    packageBlue: "PACKAGE",
    regularPrice: "$1999",
    salePrice: " $2299",
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
    listItem1: "Up to 10 screens of mobile app Design",
    listItem2: "React native or Flutter based",
    listItem3: "Api Integrations, Third party api's",
    listItem4: "Testing and debugging",
    listItem5: "5 revisions",
    title: "STANDARD MOBILE APP",
    packageBlue: "PACKAGE",
    regularPrice: "$2400",
    salePrice: " $2699",
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
    title: "PREMIUM MOBILE APP",
    packageBlue: "PACKAGE",
    regularPrice: "$3200",
    salePrice: " $3399",
    listItem1: "Up to 15 screens mobile app Design",
    listItem2: "React native Expo cli, ignite or flutter based",
    listItem3: "Api Integrations, Third party api's",
    listItem4: "Testing and debugging",
    listItem5: "Interactive Sliding Banners",
    speakWithUs: "Speak with us",
    contactNumber: "414 400 3996",
    contactNumberLink: "#",
    chatNow: "Chat Now",
    chatNowLink: "#",
    btnTxt: "Get a quote",
    btnLink: "#",
  },
];

const LogoDataPackage = [
  {
    id: 1,
    listItem1: "3 Basic Logo Designs",
    listItem2: "Free Color Options",
    listItem3: "Free Icons",
    listItem4:
      "Testing debugging and performance optimization and deployment on the app and playstore",
    listItem5: "upto 15 Revisions",
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

const AnimationDataPackage = [
  {
    id: 1,
    listItem1: "30 Second Video",
    listItem2: "Professional Script",
    listItem3: "Storyboard",
    listItem4: "2 to 3 Business Days Rotation",
    listItem5: "Animation",
    title: "STARTER ANIMATION DESIGN",
    packageBlue: "PACKAGE",
    regularPrice: "$699",
    salePrice: " $999",
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
    listItem1: "60 Second Video",
    listItem2: "Professional Script",
    listItem3: "Storyboard",
    listItem4: "Animation",
    listItem5: "Voice – Over & Sound Effects",
    title: "STANDARD ANIMATION DESIGN",
    packageBlue: "PACKAGE",
    regularPrice: "$1399",
    salePrice: " $1609",
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
    title: "PREMIUM ANIMATION DESIGN",
    packageBlue: "PACKAGE",
    regularPrice: "$1999",
    salePrice: " $2299",
    listItem1: "90 Second Video",
    listItem2: "Professional Script",
    listItem3: "Storyboard",
    listItem4: "Animation",
    listItem5: "Voice – Over & Sound Effects",
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

const SeoDataPackage = [
  {
    id: 1,
    listItem1: "3 Basic Seo Designs",
    listItem2: "Free Color Options",
    listItem3: "Free Icons",
    listItem4: "2 to 3 Business Days Rotation",
    listItem5: "10 Revisions",
    title: "STARTER SEO PACKAGE",
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
    listItem1: "5 High Quality Seo Designs",
    listItem2: "Free Color Options",
    listItem3: "Free Icons",
    listItem4: "Free Invoice Design",
    listItem5: "Unlimited Revisions",
    title: "STANDARD SEO PACKAGE",
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
    title: "PREMIUM SEO DESIGN",
    packageBlue: "PACKAGE",
    regularPrice: "$299",
    salePrice: " $459",
    listItem1: "10 Premium Seo Designs",
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

function PackagesTabber() {
  const [isActive, setIsActive] = useState(0);
  const tabs = [
    {
      label: "Web design and development",
      content: (
        <div className="web-design-container">
          <WebsitePackagesCard dataPackage={WebDataPackage} />
        </div>
      ),
    },
    {
      label: "Mobile apps",
      content: (
        <div className="mobile-apps-container">
          <WebsitePackagesCard dataPackage={MobileDataPackage} />
        </div>
      ),
    },
    {
      label: "logo designs",
      content: (
        <div className="logo-designs-container">
          <WebsitePackagesCard dataPackage={LogoDataPackage} />
        </div>
      ),
    },
    {
      label: "video animations",
      content: (
        <div className="video-animations-container">
          <WebsitePackagesCard dataPackage={AnimationDataPackage} />
        </div>
      ),
    },
    {
      label: "SEO",
      content: (
        <div className="seo-container">
          <WebsitePackagesCard dataPackage={SeoDataPackage} />
        </div>
      ),
    },
  ];

  return (
    <div className="tabber-section">
      <div className="tabber-warpper">
        <div className="tab-buttons">
          {tabs.map((tab, index) => (
            <div
              style={{
                color: isActive === index ? "#00F3F4" : "",
                // fontFamily: 'Monument Extended Regula',
              }}
              key={index}
              onClick={() => {
                setIsActive(index);
              }}
              className={`tab-button ${isActive === index ? "active" : ""}`}
            >
              {tab.label}
            </div>
          ))}
        </div>
        <div className="tab-content">{tabs[isActive].content}</div>
      </div>
    </div>
  );
}

export default PackagesTabber;
