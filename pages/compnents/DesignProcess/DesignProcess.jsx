import React, { useEffect } from "react";
import Marquee from "../Marquee/Marquee";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Heading from "../Heading/Heading";
import styles from "../../../styles/DesignProcess.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
const DesignProcessData = [
  {
    number: "01",
    title: "documentation",
    step: "step",
  },
  {
    number: "02",
    title: "deisgning",
    step: "step",
  },
  {
    number: "03",
    title: "development",
    step: "step",
  },
  {
    number: "04",
    title: "testing",
    step: "step",
  },
  {
    number: "05",
    title: "debugging",
    step: "step",
  },
];

const DesignProcess = ({ title, description }) => {
  useEffect(() => {
    AOS.init({ duration: 1400 });
  }, []);
  return (
    <>
      <div className={styles.design_process_section}>
        <Marquee>design process</Marquee>
        <div className={styles.design_process_section_content}>
          <div className={styles.design_process_section_content_wrapper}>
            <Heading>
              <span> {title} </span> process
            </Heading>
            <div
              data-aos="slide-right"
              className={styles.design_process_section_content_para}
            >
              <p>{description}</p>
            </div>
            <div
              data-aos="slide-up"
              className={styles.design_process_content_cards}
            >
              <Swiper
                style={{ height: "280px", paddingTop: "20px" }}
                slidesPerView={4}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                  // When window width is >= 640px
                  320: {
                    slidesPerView: 1,
                  },
                  // When window width is >= 768px
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  // When window width is >= 1024px
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 80,
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },

                  1700: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
              >
                {DesignProcessData.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <div className={styles.design_process_content_card}>
                        <div
                          data-aos="flip-right"
                          className={styles.design_process_content_card_left}
                        >
                          <h2>{item.number}</h2>
                          <p>{item.title}</p>
                        </div>
                        <div
                          className={styles.design_process_content_card_right}
                        >
                          <h1>{item.step}</h1>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignProcess;
