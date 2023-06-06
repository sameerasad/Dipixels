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
    title: "712 Creative website",
    subtitle: "Redesign & Development",
    description:
      "To increase website engagement, the best way is to provide your users with stand-out UI/UX designs. A good user interface and experience will not only make your users happy, but also benefit you in making a distinctive business identity.",
    // image1: '/assets/Portfolio1.jpeg',
    // image2: '/assets/Portfolio2.jpeg',
    heading: "Design & Development",
  },
  {
    title: "Innovative Mobile Apps",
    subtitle: "Redesign & Development",
    description:
      "DiPixels enlightens to provide you with a slick, smooth, and responsive user interface while significantly reducing load time. We stuff your business with faster and cheaper ways to build apps in React Native.",
    // image1: '/assets/Portfolio3.jpeg',
    // image2: '/assets/Portfolio4.jpeg',
    heading: "Mobile App Development",
  },
  {
    title: "Innovative Logo Designs",
    subtitle: "Logo Designing",
    description:
      "Create your brand’s identity with unique and attractive corporate design that define your purpose. Here’s our corporate design portfolio that showcases our most recent work.",
    heading: "Logo Design",
    // image1: '/assets/Portfolio3.jpeg',
    // image2: '/assets/Portfolio4.jpeg',
  },
  {
    title: "Video animation and ",
    subtitle: "Production",
    description:
      "At Dipixels, we bring you the most advanced and promising video animation technology and production. Our work speaks more than anything. Visit our portfolio and convince yourself of our incredible work.",
    heading: "Video Animation",
    // image1: '/assets/Portfolio3.jpeg',
    // image2: '/assets/Portfolio4.jpeg',
  },
];

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
