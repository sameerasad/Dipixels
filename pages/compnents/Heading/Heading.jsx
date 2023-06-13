import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Heading = ({ children }) => {
  useEffect(() => {
    AOS.init({ duration: 1400 })
  }, [])
  return (
    <>
      <div data-aos='fade-up' className='main-heading'>
        <h1>{children}</h1>
        <div className='main-heading-image'>
          <img src='/assets/arrow-up-right.png' alt='' />
        </div>
      </div>
    </>
  )
}

export default Heading
