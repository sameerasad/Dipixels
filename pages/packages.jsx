import React from "react";
import Layout from "./compnents/Layout/Layout";
import Hero from "./compnents/HeroSection/Hero";
import PackagesTabber from "./compnents/Tabber/PackagesTabber";
import ScrollHeadings from "./compnents/Scroll/ScrollHeadings";

import Video from "../public/assets/video/Packages.mp4";
import HeroContactus from "./compnents/HeroSection/HeroContactus";

const packages = () => {
  return (
    <>
      <Layout>
        <HeroContactus
          title="Custom Affordable"
          company="Packages"
          description="We offer a range of website packages designed to meet the unique needs of businesses and individuals. Whether you're a small startup, a growing enterprise, or a creative professional, we have the perfect solution to establish or enhance your online presence."
          src="/assets/video/Packages.mp4"
        />
        <PackagesTabber />
        {/* <ScrollHeadings /> */}
      </Layout>
    </>
  );
};

export default packages;
