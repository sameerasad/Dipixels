import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/assets/dipixelsLogo.png'
import styles from '../../../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <div className={styles.dipixels_footer}>
        <div className={styles.dipixels_footer_warpper}>
          <div className={styles.dipixels_footer_content}>
            <div className={styles.dipixels_footer_center_line}>
              <div className={styles.center_line}></div>
            </div>

            <div className={styles.dipixels_footer_content_image}>
              <Image src={Logo} alt='' width='400' height='100' />
            </div>

            <div className={styles.dipixels_footer_center_line}>
              <div className={styles.center_line}></div>
            </div>
          </div>

          <div className={styles.dipixels_footer_content}>
            <div className={styles.dipixels_footer_content_contact}>
              <p>contact us</p>
              <h3>
                <a href='tel:+1 414 400 3996'> 414 400 3996 </a>{' '}
                <a href='mailto:info@dipixels.com'> info@dipixels.com </a>
              </h3>
            </div>

            <div className={styles.dipixels_footer_content_address}>
              <p>find us</p>
              <h3>
                Dipixels LLC <br /> P.O. Box 1, <br /> Hales Corners, WI 53130
              </h3>
            </div>
          </div>

          <div className={styles.dipixels_footer_content_line}></div>

          <div className={styles.dipixels_footer_content_end}>
            <div className={styles.dipixels_footer_content_end_left}>
              <p>
                <span>&#169;</span> 2023 <span>dipixels</span> | all rights
                resrved.
              </p>
            </div>

            <div className={styles.dipixels_footer_content_end_right}>
              <p>
                <Link href='/terms-and-condition'> term of use </Link>|
                <Link href='/privacy-policy'> privacy policy </Link>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
