import React from 'react'
import ScrollHeadings from './compnents/Scroll/ScrollHeadings'
import Layout from './compnents/Layout/Layout'
import ContactusForm from './compnents/Forms/ContactusForm'
import HeroContactus from './compnents/HeroSection/HeroContactus'

const Contactus = () => {
  return (
    <>
      <Layout>
        <HeroContactus
          title='get in'
          company='touch '
          description='If you have business or general queries, or need any technical support, get in touch with us. Our customer service team is available to you 24 hours a day.'
          src='/assets/video/ContactUs.mp4'
        />
        <ContactusForm />
        <ScrollHeadings />
      </Layout>
    </>
  )
}

export default Contactus
