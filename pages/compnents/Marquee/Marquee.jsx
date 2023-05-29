import React from 'react'
import styles from '../../../styles/marquee.module.css'
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
// import 'swiper/css'
// import 'swiper/css/pagination'
// import SwiperCore, { Autoplay } from 'swiper'
// import { Pagination } from 'swiper'
// import 'swiper/swiper.min.css'

function Marquee({ children }) {
  // SwiperCore.use([Autoplay])
  return (
    <>
      {/* <Swiper
        style={{ width: '100%', height: '170px' }}
        loop={true} // Enable looped swiping
        slidesPerView={1}
        spaceBetween={100}
        autoplay={{ delay: 0 }} // Set autoplay options here
        speed={3000}
        modules={[Pagination]}
      >
        <div>
          <SwiperSlide>
            <h1 className={styles.marquee}>{children}</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className={styles.marquee}>{children}</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className={styles.marquee}>{children}</h1>
          </SwiperSlide>
        </div>
      </Swiper> */}
      <div className={styles.marquee}>
        <h1>{children}</h1>
      </div>
    </>
  )
}

export default Marquee
