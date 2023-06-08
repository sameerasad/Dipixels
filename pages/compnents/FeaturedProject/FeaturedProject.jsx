import React, { useRef, useState, useEffect } from "react";
import styles from "../../../styles/FeaturedProject.module.css";
import Arrow from "../../../public/assets/arrow-up-right.png";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Marquee from "../../compnents/Marquee/Marquee";
import "swiper/css";
import Button from "../Buttons/Button/Button";
import Heading from "../Heading/Heading";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturedProject = ({ data, marqueeText, heading }) => {
  const swiper = useSwiper();

  const [count, setCount] = useState(0);
  const swiperRef = useRef();
  // const projectData = data[dataIndex] || {};

  useEffect(() => {
    AOS.init({ duration: 1400 });
  }, []);

  return (
    <>
      <div className={styles.featured_project_section}>
        <Marquee>{marqueeText}</Marquee>
        <div className={styles.featured_project_wrapper}>
          <div className={styles.featured_project_content}>
            <Heading data-aos="fade-down"> featured project </Heading>
            <div
              data-aos="fade-right"
              className={styles.featured_project_content_two}
            >
              <div className={styles.featured_project_content_two_left}>
                <div
                  className={styles.featured_project_content_two_left_heading}
                >
                  <h2>
                    <span>{data?.[count]?.title || ""}</span> <br />
                    {data?.[count]?.subtitle || ""}
                  </h2>
                  <p>{data?.[count]?.description || ""}</p>
                </div>
                {/* <Button>our featured themes</Button> */}
              </div>
              <div
                data-aos="fade-right"
                className={styles.featured_project_content_two_right}
              >
                <h1>{data?.[count]?.heading || ""}</h1>
                <div
                  data-aos="fade-up"
                  className={styles.featured_project_content_two_right_image}
                >
                  <Swiper
                    spaceBetween={0}
                    loop={true}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    direction="horizontal"
                    onBeforeInit={(swiper) => {
                      swiperRef.current = swiper;
                    }}
                    onRealIndexChange={(e) => {}}
                  >
                    <SwiperSlide>
                      <img src="/assets/portfolio1.jpeg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/assets/postfolio2.jpeg" alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                      <img src="/assets/LogoPortfolio3.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/assets/VideoPortfolio5.png" alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div
                  className={
                    styles.featured_project_content_two_right_arrow_left
                  }
                  onClick={() => {
                    swiperRef?.current?.slidePrev();
                    if (count !== 0) {
                      setCount((prev) => prev - 1);
                    } else {
                      setCount(3);
                    }
                  }}
                >
                  <img src="/assets/arrowLeft.png" alt="" />
                </div>

                <div
                  className={
                    styles.featured_project_content_two_right_arrow_right
                  }
                  onClick={() => {
                    swiperRef?.current?.slideNext();
                    if (count !== 3) {
                      setCount((prev) => prev + 1);
                    } else {
                      setCount(0);
                    }
                  }}
                >
                  <img src="/assets/arrowRight.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProject;
