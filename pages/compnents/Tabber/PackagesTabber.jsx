import React, { useState } from 'react'
import WebsitePackagesCard from '../WebsitePackages/WebsitePackagesCard'
import styles from '../../../styles/PackagesTabber.module.css'

const WebDataPackage = [
  {
    id: 1,
    title: 'STARTER WEB ',
    packageBlue: 'PACKAGE',
    regularPrice: '$499',
    salePrice: '$729',
    speakWithUs: 'Speak with us',
    contactNumber: '414 400 3996',
    contactNumberLink: '#',
    chatNow: 'Chat Now',
    chatNowLink: '#',
    btnTxt: 'get in touch',
    btnLink: '#',
    listItems: [
      '5 Pages Website Design',
      'HTML Based',
      '2 Banner Designs',
      'Contact / Query Form',
      '6 Revisions',
    ],
  },
  {
    id: 2,
    title: 'PROFESSIONAL WEB PACKAGE',
    packageBlue: '',
    regularPrice: '$999',
    salePrice: '$1309',
    speakWithUs: 'Speak with us',
    contactNumber: '414 400 3996',
    contactNumberLink: '#',
    chatNow: 'Chat Now',
    chatNowLink: '#',
    btnTxt: 'get in touch',
    btnLink: '#',
    listItems: [
      'Up to 10 Pages Website Design',
      'CMS (WordPress)',
      '3 Banner Designs',
      'Unlimited Revision',
      'Contact/Query Form',
    ],
  },
  {
    id: 3,
    title: 'PREMIUM WEB PACKAGE',
    packageBlue: '',
    regularPrice: '$2499',
    salePrice: '$2700',
    speakWithUs: 'Speak with us',
    contactNumber: '414 400 3996',
    contactNumberLink: '#',
    chatNow: 'Chat Now',
    chatNowLink: '#',
    btnTxt: 'get in touch',
    btnLink: '#',
    listItems: [
      'Up to 15 Pages Website Design',
      'WordPress or PHP Development',
      '10 Banner Designs',
      'Unlimited Revision',
      'Interactive Sliding Banners',
    ],
  },
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


const AnimationDataPackage = [
  {
    id: 1,
    title: 'STARTER ANIMATION DESIGN',
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
    listItems: ['30sec Video', 'Script', 'Storyboard', 'Animation'],
  },
  {
    id: 2,
    title: 'STANDARD ANIMATION DESIGN',
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
      '60sec Video',
      'Script',
      'Storyboard',
      'Animation',
      'Background Music',
    ],
  },
  {
    id: 3,
    title: 'PREMIUM ANIMATION DESIGN',
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
      '90sec Video',
      'Script',
      'Storyboard',
      'Animation',
      'Background Music',
      'Voice Over',
    ],
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
      'Landing Page Creation',
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

const ContentDataPackage = [
  {
    id: 1,
    title: 'ONE PAGE SITE CONTENT ',
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


function PackagesTabber() {
  const [isActive, setIsActive] = useState(0)
  const tabs = [
    {
      label: 'Websites',
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
    {
      label: 'Content Writing',
      content: (
        <div className='content-writing-container'>
          <WebsitePackagesCard dataPackage={ContentDataPackage} />
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
              className={`${styles.tab_button} ${
                isActive === index ? 'active' : ''
              }`}
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
