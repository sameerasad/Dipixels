import React from 'react'
// import Arrow from '../../../public/assets/arrow-up-right.png'
// import Image from 'next/image'
const Heading = ({ children }) => {
  return (
    <>
      <div className='main-heading'>
        <h1>{children}</h1>
        <div className='main-heading-image'>
          <img src='/assets/arrow-up-right.png' alt='' />
        </div>
      </div>
    </>
  )
}

export default Heading
