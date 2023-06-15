import React from "react";
import Tabber from "./compnents/Tabber/Tabber";
import Layout from "./compnents/Layout/Layout";
import Hero from "./compnents/HeroSection/Hero";
import FeaturedProject from "./compnents/FeaturedProject/FeaturedProject";
import ScrollHeadings from "./compnents/Scroll/ScrollHeadings";
import Video from "../public/assets/video/DipixelsAllServices.mp4";
import HeroContactus from "./compnents/HeroSection/HeroContactus";

const projectData = [
  {
    title: 'Design & Development',
    subtitle: '',
    description:
      'We offer comprehensive design and development services to help businesses establish a strong online presence and deliver exceptional digital experiences. Our expert team of designers, developers, and strategists work collaboratively to create visually stunning, user-friendly, and technically robust solutions that align with your business goals.',
    heading: 'Website Design',
  },
  {
    title: 'Design & Development',
    subtitle: '',
    description:
      'At Dipixels, we specialize in developing high-quality, user-centric mobile applications that elevate your brand, drive customer engagement, and boost business growth. We stuff your business with faster and cheaper ways to build apps in React Native and flutter.',
    heading: 'Mobile App Design',
  },
  {
    title: 'Logo Design',
    subtitle: '',
    description:
      'Create your brand’s identity with unique and attractive corporate design that define your purpose. Here’s our corporate design portfolio that showcases our most recent work.',
    heading: 'Logo Design',
  },
  {
    title: 'animation and Production',
    subtitle: '',
    description:
      "In today's digital landscape, video animation has emerged as a powerful tool for businesses to effectively communicate their brand, products, and ideas. At Dipixels, we specialize in creating captivating and visually stunning video animations that leave a lasting impression on your audience and help you stand out in the crowded digital space.",
    heading: 'Video Animation',
  },
]


const work = () => {
  return (
    <>
      <Layout>
        <Hero
          title="our"
          company="work"
          description="We understand that every business has distinct requirements. That's why we take a collaborative approach, working closely with our clients to understand their goals and challenges. Our team crafts custom software solutions that align perfectly with their vision, ensuring maximum impact and value."
          videoLink={Video}
        />
        <FeaturedProject
          data={projectData}
          marqueeText="our services"
          heading={<h1>our services</h1>}
        />
        <Tabber />
        <ScrollHeadings />
      </Layout>
    </>
  );
};

export default work;
