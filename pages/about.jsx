import React from 'react'
import Layout from './compnents/Layout/Layout'
import Hero from './compnents/HeroSection/Hero'
import Empowering from './compnents/Empowering/Empowering'
import Counter from './compnents/CounterSection/Counter'
import OurProcess from './compnents/OurProcess/OurProcess'
import ScrollHeadings from './compnents/Scroll/ScrollHeadings'
import Video from '../public/assets/video/Aboutus.mp4'

const About = () => {
  return (
    <>
      <Layout>
        <Hero
          title='experience'
          description='Creating a digital experience accelerating your growth with our highly dedicated professionals.'
          company='dipixels'
          videoLink={Video}
        />
        <Counter />
        <Empowering />
        <OurProcess />
        <ScrollHeadings />
      </Layout>
    </>
  )
}

export default About
