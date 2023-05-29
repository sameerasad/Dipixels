import React from 'react'
import ScrollHeadings from './compnents/Scroll/ScrollHeadings'
import Layout from './compnents/Layout/Layout'
import Hero from './compnents/HeroSection/Hero'
import ContactusForm from './compnents/Forms/ContactusForm'

const Contactus = () => {
  return (
    <>
      <Layout>
        <Hero
          title='get in'
          company='touch '
          description='If you have business or general queries, or need any technical support, get in touch with us. Our customer service team is available to you 24 hours a day.'
        />
        <ContactusForm />
        <ScrollHeadings />
      </Layout>
    </>
  )
}

export default Contactus
