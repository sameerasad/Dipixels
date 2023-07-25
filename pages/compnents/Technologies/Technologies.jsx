import React, { useEffect } from 'react'
import Marquee from '../Marquee/Marquee'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import SwiperCore, { Autoplay } from 'swiper'
import { Pagination } from 'swiper'
import 'swiper/swiper.min.css'
import Button from '../Buttons/Button/Button'
import Heading from '../Heading/Heading'
import styles from '../../../styles/Technologies.module.css'
import Link from 'next/link'

const TechnologiesData = [
  {
    title: 'UI/UX Design',
    image: '/assets/arrow-up-right.png',
    para: 'To increase website engagement, the best way is to provide your users with stand-out UI/UX designs. A good user interface and experience will not only make your users happy, but also benefit you in making a distinctive business identity. UI and UX must work together to maximize user interaction. At Dipixels, we create designs that not only meet your business goals but also meet the needs and interests of your audience.',
  },
  {
    title: 'React Native',
    image: '/assets/arrow-up-right.png',
    para: 'DiPixels enlightens to provide you with a slick, smooth, and responsive user interface while significantly reducing load time. We stuff your business with faster and cheaper ways to build apps in React Native. Let us help you with the perfect React Native app just for you.',
  },
  {
    title: 'Logo Design',
    image: '/assets/arrow-up-right.png',
    para: 'For any business or company, its logo plays a vital role in identifying that brand. No matter what your brand is about, a great logo will draw more attention and fully engage your audience. Dipixels offers you an elegant and attractive logo design service that not only strengthens your brand identity but also leaves a lasting impression. Our team consists of professional designers who put customers’ requirements first and turn their ideas into reality!',
  },
  {
    title: 'Video Animation',
    image: '/assets/arrow-up-right.png',
    para: 'At Dipixels, we bring you the most advanced and promising video animation technology and production. Our work speaks more than anything. Visit our portfolio and convince yourself of our incredible work.',
  },
  {
    title: 'ON-Page SEO',
    image: '/assets/arrow-up-right.png',
    para: 'On page optimization (AKA on-page SEO) refers to all measures that can be taken directly within the website in order to improve its position in the search rankings. Examples of this include measures to optimize the content or improve the meta description and title tags.',
  },
  {
    title: 'Web Content',
    image: '/assets/arrow-up-right.png',
    para: 'Website content plays an important role in attracting audiences and increasing business engagement. Dipixels creates unique, informative, and engaging content that comprehensively provide content that visitors are interested in when browsing your site. The quality level of your content affects how long your visitors stay on your site, how many pages they visit, and whether their attention is diverted immediately. ',
  },
]

const Technologies = () => {
  SwiperCore.use([Autoplay])
  return (
    <>
      <div className={styles.Technologies_section}>
        <div className={styles.Technologies_section_wrapper}>
          <Marquee>technologies</Marquee>
        </div>
        <div className={styles.Technologies_section_content}>
          <Swiper
            style={{ width: '100%', height: '450px' }}
            loop={true} // Enable looped swiping
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Set autoplay options here
            speed={1000}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <div className={styles.Technologies_section_content_wrapper}>
              {TechnologiesData.map((item, index) => {
                return (
                  <SwiperSlide key={item.id}>
                    <>
                      <Heading>{item.title}</Heading>
                      <div
                        className={
                          styles.Technologies_section_content_heading_para
                        }
                      >
                        <p>{item.para}</p>
                      </div>
                    </>
                  </SwiperSlide>
                )
              })}
            </div>
          </Swiper>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            marginTop: '30px',
          }}
        >
          <Link href='./start-project'>
            <Button>Start Project</Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Technologies
