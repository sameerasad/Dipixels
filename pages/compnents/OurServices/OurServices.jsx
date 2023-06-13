import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { useRouter } from 'next/router'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'
import Marquee from '../../compnents/Marquee/Marquee'
import Heading from '../Heading/Heading'
import styles from '../../../styles/OurServices.module.css'
import SwiperCore, { Autoplay } from 'swiper'
import AOS from 'aos'
import 'aos/dist/aos.css'

const servicesData = [
  {
    title: 'app designs',
    image: '/assets/ServiceFour.png',
    url: '/mobile-app-design-development',
  },
  {
    title: 'web designs',
    image: '/assets/ServiceThree.png',
    url: '/web-design-development',
  },
  {
    title: 'logo designs',
    image: '/assets/ServiceTwo.png',
    url: '/logo-design',
  },
  {
    title: 'video animation',
    image: '/assets/ServiceOne.png',
    url: '/video-animation-production',
  },
  {
    title: 'app designs',
    image: '/assets/ServiceFour.png',
    url: '/mobile-app-design-development',
  },
  {
    title: 'web designs',
    image: '/assets/ServiceThree.png',
    url: '/web-design-development',
  },
  {
    title: 'logo designs',
    image: '/assets/ServiceTwo.png',
    url: '/logo-design',
  },
  {
    title: 'video animation',
    image: '/assets/ServiceOne.png',
    url: '/video-animation-production',
  },
]

const OurServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const router = useRouter()
  const handleServiceHover = (index) => {
    setHoveredIndex(index)
  }

  const handleServiceLeave = () => {
    setHoveredIndex(null)
  }
  SwiperCore.use([Autoplay])
  useEffect(() => {
    AOS.init({ duration: 1400 })
  }, [])

  return (
    <>
      <div className={styles.our_services_section}>
        <Marquee> Our Services </Marquee>
        <div className={styles.our_services_wrapper}>
          <div className={styles.our_services_content}>
            <Heading>our services</Heading>
          </div>
          <div className={styles.our_services_slider_wrapper}>
            <Swiper
              data-aos='fade-up'
              slidesPerView={4}
              spaceBetween={10}
              loop={true}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              speed={1000}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              modules={[Pagination]}
              breakpoints={{
                // When window width is >= 640px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 1,
                },
                600: {
                  slidesPerView: 1,
                  spaceBetween: 1,
                },
                // When window width is >= 768px
                // 601: {
                //   slidesPerView: 2,
                //   spaceBetween: 10,
                // },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                // When window width is >= 1024px
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 80,
                },
                1251: {
                  slidesPerView: 3,
                },
                1660: {
                  slidesPerView: 3,
                },
                1661: {
                  slidesPerView: 4,
                },
              }}
            >
              <div className={styles.our_services_content_slider}>
                {servicesData.map((item, index) => {
                  const isEvenIndex = index % 2 === 0
                  return (
                    <SwiperSlide
                      key={item.id}
                      onClick={() => {
                        router.push(item.url)
                      }}
                    >
                      <div
                        className={`${
                          styles.our_services_content_sliders_images
                        } ${hoveredIndex === index ? styles.hovered : ''}`}
                        key={index}
                        onMouseEnter={() => handleServiceHover(index)}
                        onMouseLeave={handleServiceLeave}
                        style={{ marginTop: !isEvenIndex ? '70px' : '0px' }}
                      >
                        <img src={item.image} alt='' />
                        <div className={styles.overlay}></div>
                        <div
                          className={styles.title}
                          style={{
                            position: 'absolute',
                            zIndex: '99',
                            textTransform: 'uppercase',
                          }}
                        >
                          {item.title}
                        </div>
                        <div
                          className={
                            styles.our_services_content_sliders_images_gradient
                          }
                        ></div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurServices
