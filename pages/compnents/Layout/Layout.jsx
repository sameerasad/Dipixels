import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Layout({ children }) {
  useEffect(() => {
    // Google Analytics tracking code
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag('js', new Date())
      gtag('config', 'G-8WH2YD40VL')
    }
  }, [])
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
