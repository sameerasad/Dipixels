import React from 'react'
import Marquee from '../Marquee/Marquee'
import Arrow from '../../../public/assets/arrow-up-right.png'
import Image from 'next/image'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'
import Heading from '../Heading/Heading'

const DesignProcessData = [
  {
    number: '01',
    title: 'documentation',
    step: 'step',
  },
  {
    number: '02',
    title: 'deisgning',
    step: 'step',
  },
  {
    number: '03',
    title: 'development',
    step: 'step',
  },
  {
    number: '04',
    title: 'testing',
    step: 'step',
  },
  {
    number: '05',
    title: 'debugging',
    step: 'step',
  },
]

const DesignProcess = ({ title, description}) => {
  return (
    <>
      <div className='design-process-section'>
        <Marquee>design process</Marquee>
        <div className='design-process-section-content'>
          <div className='design-process-section-content-wrapper'>
            <div className='design-process-section-content-heading'>
              <Heading>
                <span> {title} </span> process
              </Heading>
              {/* <div className='design-process-content-image'>
                <Image src={Arrow} width='60' height='60' alt='' />
              </div> */}
            </div>
            <div className='design-process-section-content-para'>
              <p>{description}</p>
            </div>
            <div className='design-process-content-cards'>
              <Swiper
                style={{ height: '250px' }}
                slidesPerView={4}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
              >
                {DesignProcessData.map((item) => {
                  return (
                    <SwiperSlide>
                      <div className='design-process-content-card'>
                        <div className='design-process-content-card-left'>
                          <h2>{item.number}</h2>
                          <p>{item.title}</p>
                        </div>
                        <div className='design-process-content-card-right'>
                          <h1>{item.step}</h1>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DesignProcess
