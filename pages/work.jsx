import React from 'react'
import Tabber from './compnents/Tabber/Tabber'
import Layout from './compnents/Layout/Layout'
import Hero from './compnents/HeroSection/Hero'
import FeaturedProject from './compnents/FeaturedProject/FeaturedProject'
import ScrollHeadings from './compnents/Scroll/ScrollHeadings'

const projectData = [
  {
    title: '712 Creative website',
    subtitle: 'Redesign & Development',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
    heading: 'Design & Development',
    // image1: '/assets/Portfolio1.jpeg',
    // image2: '/assets/Portfolio2.jpeg',
  },
  {
    title: 'Innovative Mobile Apps',
    subtitle: 'Redesign & Development',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
    heading: 'Mobile App Development',
    // image1: '/assets/Portfolio3.jpeg',
    // image2: '/assets/Portfolio4.jpeg',
  },
]

const work = () => {
  return (
    <>
      <Layout>
        <Hero
          title='our'
          company='work'
          description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo'
        />
        <FeaturedProject
          data={projectData}
          marqueeText='our services'
          heading={<h1>our services</h1>}
        />
        <Tabber />
        <ScrollHeadings />
      </Layout>
    </>
  )
}

export default work
