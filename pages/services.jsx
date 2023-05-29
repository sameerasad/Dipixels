import React from 'react'
import Layout from './compnents/Layout/Layout'
import Hero from './compnents/HeroSection/Hero'
import FeaturedProject from './compnents/FeaturedProject/FeaturedProject'
import ScrollHeadings from './compnents/Scroll/ScrollHeadings'

const Ourservices = () => {
  const projectData = [
    {
      title: 'web design and',
      subtitle: 'development',
      description:
        'In today’s world, where every aspect of life is influenced by technology, progress can only be achieved if your company moves forward in compliance with modern times. A company doesn’t just need a website to be successful; it needs unique web designing and development that creates ease for the target audience, engages the people, and makes you stand out. At Dipixels, our web developers can come up with a functional yet attractive website for your company. We focus on creating personalized designs for you that tell the world what your brand is about, drive traffic, and increase your sales. Our web designers do their research to grasp the objectives of your business and come up with great solutions.',
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

  return (
    <>
      <Layout>
        <Hero
          title='discover your digital'
          company='journey'
          description='Instead of a generic services page, create an interactive experience where visitors can embark on a digital journey. Each step of the journey represents a service you offer, showcasing its benefits, features, and success stories.'
        />
        <FeaturedProject
          data={projectData}
          marqueeText='our services'
          heading={<h1>our services</h1>}
        />
        <ScrollHeadings />
      </Layout>
    </>
  )
}

export default Ourservices
