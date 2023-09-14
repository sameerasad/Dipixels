import Head from 'next/head'
import Banner from './compnents/Banner/Banner'
import Layout from './compnents/Layout/Layout'
import FeaturedProject from './compnents/FeaturedProject/FeaturedProject'
import OurServices from './compnents/OurServices/OurServices'
import DesignSolutions from './compnents/DesignSolutions/DesignSolutions'
import ScrollBrands from './compnents/Scroll/ScrollBrands'
import ScrollHeadings from './compnents/Scroll/ScrollHeadings'

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

const Home = () => {
  return (
    <div
    // ref={scrollRef}
    >
      <Head>
        {/* Google site verification meta tag */}
        <meta
          name='google-site-verification'
          content='K-QqWMfcD_Nzr6pIOAJQ7n7iG2szzftf2jPoKp7NJHA'
        />
        <title>Dipixels</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        {/* Google Analytics tracking code */}
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-8WH2YD40VL'
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8WH2YD40VL');
          `}
        </script>
      </Head>
      <Layout>
        <Banner />
        {/* <Aboutus /> */}
        <FeaturedProject
          data={projectData}
          marqueeText='Featured Projects'
          heading={<h1>Featured Projects</h1>}
        />
        <OurServices />
        <DesignSolutions />
        <ScrollBrands />
        <ScrollHeadings />
      </Layout>
    </div>
  )
}

export default Home
