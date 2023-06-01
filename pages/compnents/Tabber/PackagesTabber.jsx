import React, { useState } from 'react'
import WebsitePackagesCard from '../WebsitePackages/WebsitePackagesCard'
import styles from '../../../styles/PackagesTabber.module.css'

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
    btnTxt: 'Place Your order',
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
    btnTxt: 'Place Your order',
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
    btnTxt: 'Place Your order',
    btnLink: '#',
  },
]

const MobileDataPackage = [
  {
    id: 1,
    listItem1: '5 Pages mbile app Design',
    listItem2: 'HTML Based',
    listItem3: '2 Banner Designs',
    listItem4: 'Contact / Query Form',
    listItem5: '6 Revisions',
    title: 'STARTER MOBILE APP',
    packageBlue: 'PACKAGE',
    regularPrice: '$499',
    salePrice: ' $729',
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
    listItem1: 'Up to 10 Pages mobile app Design',
    listItem2: 'CMS (WordPress)',
    listItem3: '3 Banner Designs',
    listItem4: 'Unlimited Revision',
    listItem5: 'Contact/Query Form',
    title: 'STANDARD MOBILE APP',
    packageBlue: 'PACKAGE',
    regularPrice: '$999',
    salePrice: ' $1309',
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
    title: 'PREMIUM MOBILE APP',
    packageBlue: 'PACKAGE',
    regularPrice: '$2499',
    salePrice: ' $2700',
    listItem1: 'Up to 15 Pages mobile app Design',
    listItem2: 'WordPress or Php Development',
    listItem3: '10 Banner Designs',
    listItem4: 'Unlimited Revision',
    listItem5: 'Interactive Sliding Banners',
    speakWithUs: 'Speak with us',
    contactNumber: '414 400 3996',
    contactNumberLink: '#',
    chatNow: 'Chat Now',
    chatNowLink: '#',
    btnTxt: 'Place Your order',
    btnLink: '#',
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

const AnimationDataPackage = [
  {
    id: 1,
    listItem1: '3 Basic Animation Designs',
    listItem2: 'Free Color Options',
    listItem3: 'Free Icons',
    listItem4: '2 to 3 Business Days Rotation',
    listItem5: '10 Revisions',
    title: 'STARTER ANIMATION DESIGN',
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
    listItem1: '5 High Quality Animation Designs',
    listItem2: 'Free Color Options',
    listItem3: 'Free Icons',
    listItem4: 'Free Invoice Design',
    listItem5: 'Unlimited Revisions',
    title: 'STANDARD ANIMATION DESIGN',
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
    title: 'PREMIUM ANIMATION DESIGN',
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
    btnTxt: 'Place Your order',
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
    btnTxt: 'Place Your order',
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
    btnTxt: 'Place Your order',
    btnLink: '#',
  },
]

function PackagesTabber() {
  const [isActive, setIsActive] = useState(0)
  const tabs = [
    {
      label: 'Web design and development',
      content: (
        <div className='web-design-container'>
          <WebsitePackagesCard dataPackage={WebDataPackage} />
        </div>
      ),
    },
    {
      label: 'Mobile apps',
      content: (
        <div className='mobile-apps-container'>
          <WebsitePackagesCard dataPackage={MobileDataPackage} />
        </div>
      ),
    },
    {
      label: 'logo designs',
      content: (
        <div className='logo-designs-container'>
          <WebsitePackagesCard dataPackage={LogoDataPackage} />
        </div>
      ),
    },
    {
      label: 'video animations',
      content: (
        <div className='video-animations-container'>
          <WebsitePackagesCard dataPackage={AnimationDataPackage} />
        </div>
      ),
    },
    {
      label: 'SEO',
      content: (
        <div className='seo-container'>
          <WebsitePackagesCard dataPackage={SeoDataPackage} />
        </div>
      ),
    },
  ]

  return (
    <div className={styles.tabber_section}>
      <div className={styles.tabber_warpper}>
        <div className={styles.tab_buttons}>
          {tabs.map((tab, index) => (
            <div
              style={{
                color: isActive === index ? '#00F3F4' : '',
              }}
              key={index}
              onClick={() => {
                setIsActive(index)
              }}
              className={`${styles.tab_button} ${isActive === index ? 'active' : ''}`}
            >
              {tab.label}
            </div>
          ))}
        </div>
        <div className={styles.tab_content}>{tabs[isActive].content}</div>
      </div>
    </div>
  )
}

export default PackagesTabber
