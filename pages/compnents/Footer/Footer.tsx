import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/assets/dipixelsLogo.png'
const Footer = () => {
  return (
    <>
      <div className='dipixels-footer'>
        <div className='dipixels-footer-warpper'>
          <div className='dipixels-footer-content'>
            <div className='dipixels-footer-center-line'>
              <div className='center-line'></div>
            </div>

            <div className='dipixels-footer-logo'>
              <Image src={Logo} alt='' width='400' height='100' />
            </div>

            <div className='dipixels-footer-center-line'>
              <div className='center-line'></div>
            </div>
          </div>

          <div className='dipixels-footer-content'>
            <div className='dipixels-footer-content-contact'>
              <p>contact us</p>
              <h3>414 400 3996 info@dipixels.com</h3>
            </div>

            <div className='dipixels-footer-content-address'>
              <p>find us</p>
              <h3>dipixels llc p.o. box 1 hales corners, w153130,usa</h3>
            </div>
          </div>

          <div className='dipixels-footer-content-line'></div>

          <div className='dipixels-footer-content-end'>
            <div className='dipixels-footer-content-end-left'>
              <p>
                <span>&#169;</span> 2023 <span>dipixels</span> | all rights
                resrved.
              </p>
            </div>

            <div className='dipixels-footer-content-end-right'>
              <p> term of use | privacy policy </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
