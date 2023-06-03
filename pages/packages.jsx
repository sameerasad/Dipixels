import React from 'react'
import Layout from './compnents/Layout/Layout'
import Hero from './compnents/HeroSection/Hero'
import PackagesTabber from './compnents/Tabber/PackagesTabber'
import ScrollHeadings from './compnents/Scroll/ScrollHeadings'

import Video from '../public/assets/video/Packages.mp4'
import HeroContactus from './compnents/HeroSection/HeroContactus'

const packages = () => {
  return (
    <>
      <Layout>
        <HeroContactus
          title='Affordable'
          company='Packages'
          description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo'
          src='/assets/video/Packages.mp4'
        />
        <PackagesTabber />
        {/* <ScrollHeadings /> */}
      </Layout>
    </>
  )
}

export default packages
