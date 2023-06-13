import React, { useRef, useState } from 'react'
import Arrow from '../../../public/assets/arrow-up-right.png'
import Image from 'next/image'
import StyledButton from '../Buttons/StyledButton/StyledButton'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import Marquee from '../../compnents/Marquee/Marquee'
import 'swiper/css'
import Button from '../Buttons/Button/Button'
import Heading from '../Heading/Heading'

const _OurServices = () => {
  const swiper = useSwiper()
  const [dataIndex, setDataIndex] = useState(0)
  const swiperRef = useRef
  return (
    <>
      <div className='featured-project-section'>
        <Marquee>our services</Marquee>
        <div className='featured-project-wrapper'>
          <div className='featured-project-content'>
            <Heading> our services </Heading>
            <div className='featured-project-contenttwo'>
              <div className='featured-project-contenttwo-left'>
                <div className='featured-project-contenttwo-left-heading'>
                  <h2>
                    <span>
                      {dataIndex == 0
                        ? '712 Creative website'
                        : 'Innovative Mobile Apps'}
                    </span>{' '}
                    <br />
                    Redesign & Development
                  </h2>
                  <p>
                    We offer comprehensive redesign and development services to
                    transform your digital presence and enhance your online
                    performance.
                  </p>
                </div>
                <Button>our featured themes</Button>
              </div>
              <div className='featured-project-contenttwo-right'>
                <h1>
                  {dataIndex == 0
                    ? 'design & Development'
                    : 'Mobile App Development'}
                </h1>
                <div class='featured-project-contenttwo-right-image'>
                  <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    // loop={true}
                    direction='horizontal'
                    onBeforeInit={(swiper) => {
                      swiperRef.current = swiper
                    }}
                    onRealIndexChange={(e) => {
                      setDataIndex((prev) => e.activeIndex)
                    }}
                  >
                    <SwiperSlide>
                      <img src='/assets/Portfolio1.jpeg' alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/assets/postfolio2.jpeg' alt='' />
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div
                  className='featured-project-contenttwo-right-arrow-left'
                  onClick={() => {
                    swiperRef?.current?.slidePrev()
                  }}
                >
                  <img src='/assets/arrowLeft.png' alt='' />
                </div>

                <div
                  className='featured-project-contenttwo-right-arrow-right'
                  onClick={() => {
                    swiperRef?.current?.slideNext()
                  }}
                >
                  <img src='/assets/arrowRight.png' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default _OurServices
