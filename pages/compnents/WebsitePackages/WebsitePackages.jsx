// import './WebsitePackages.css'
import React, { useEffect } from 'react'
import Marquee from '../../compnents/Marquee/Marquee'
import Heading from '../Heading/Heading'
import styles from '../../../styles/WebsitePackagesCard.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function WebsitePackages({ packagesHeading, packagesDescription }) {
  useEffect(() => {
    AOS.init({ duration: 1400 })
  }, [])
  return (
    <>
      <Marquee>best</Marquee>
      <section className={`${styles.webPackage} ${styles.wrapper}`}>
        <div className='webpackages-section-content-heading'>
          <Heading>
            <span> {packagesHeading} </span> packages
          </Heading>
        </div>
        <div data-aos='slide-right' className='package-section-content-para'>
          <p>{packagesDescription}</p>
        </div>
        {/* <div className='packagesCards'>
          {dataPackage.map((item) => {
            return (
              <div className='card'>
                <div className='packagetitle'>
                  <h2>
                    {item.title}
                    <span className='colorBlue'> {item.packageBlue}</span>
                  </h2>
                </div>
                <div className='packagePrice'>
                  <h4 className='salePrice'>{item.regularPrice}</h4>
                  <p className='regularPrice'>{item.salePrice}</p>
                </div>

                <div className='packageListing'>
                  <ul>
                    <li>{item.listItem1}</li>
                    <li>{item.listItem2}</li>
                    <li>{item.listItem3}</li>
                    <li>{item.listItem4}</li>
                    <li>{item.listItem5}</li>
                  </ul>
                </div>

                <div className='packagecontact'>
                  <div className='speakWithUS'>
                    <h3>{item.speakWithUs}</h3>
                    <a href={item.contactNumberLink}>{item.contactNumber}</a>
                  </div>
                  <div className='chatNow'>
                    <a href={item.chatNowLink}>{item.chatNow}</a>
                  </div>
                  <div className='packagebtn'>
                    <a href={item.btnLink}>{item.btnTxt}</a>
                  </div>
                </div>
              </div>
            )
          })}
        </div> */}
        {/* <WebsitePackagesCard dataPackage={dataPackage}/> */}
        {/* <div style={{ marginTop: '6em' }}>
          <Button>view more packages</Button>
        </div> */}
      </section>
    </>
  )
}

export default WebsitePackages
