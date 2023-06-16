import React from 'react'
import styles from '../../../styles/terms.module.css'
import Heading from '../Heading/Heading'

const Privacy = () => {
  return (
    <>
    <div className='privacy_section'>
      <div className={styles.terms_section} style={{ marginTop: '10em' }}>
        <div className={styles.terms_wrapper}>
          <div className='privacy-main-heading'>
            <h1>What kind of details do we gather?</h1>
            {/* <div className='privacy-main-heading-image'>
              <img src='/assets/arrow-up-right.png' alt='' />
            </div> */}
          </div>

          <div className={styles.terms_wrapper_content}>
            <p>
              The information we gather is basic in nature. Taking into account
              the privacy of our customers, we do not ask for data that is
              confidential by any means. Also, the process of obtaining the
              information is simple; via a simple query form. For the sake of
              contact purposes, the query form asks for the client’s name, email
              address, and phone number. Dipixels ensures it does not give this
              information to any third party without the consent of the client.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.terms_section}>
        <div className={styles.terms_wrapper}>
          <div className='privacy-main-heading'>
            <h1>How is the information protected?</h1>
            {/* <div className='privacy-main-heading-image'>
              <img src='/assets/arrow-up-right.png' alt='' />
            </div> */}
          </div>
          <div className={styles.terms_wrapper_content}>
            <p>
              Dipixels ensures the security of the client’s private and credit
              information during all times. The information remains stored in
              our server which is only to be viewed by the concerned staff. This
              means that your information is in safe hands.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.terms_section}>
        <div className={styles.terms_wrapper}>
          <div className='privacy-main-heading'>
            <h1>Why do we ask for your information?</h1>
            {/* <div className='privacy-main-heading-image'>
              <img src='/assets/arrow-up-right.png' alt='' />
            </div> */}
          </div>
          <div className={styles.terms_wrapper_content}>
            <p>
              We obtain your personal information for the sake of ensuring
              effective communication whereas; your credit details are used to
              handle payments. For improved performance, these details are also
              required to better respond to the client’s complexity and to
              obtain their feedback. Also, these details are used by us to
              update our clients regarding our latest deals and offerings.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.terms_section} style={{ marginBottom: '5em' }}>
        <div className={styles.terms_wrapper}>
          <div className='privacy-main-heading'>
            <h1>Do we use this information for trading purposes?</h1>
            {/* <div className='privacy-main-heading-image'>
              <img src='/assets/arrow-up-right.png' alt='' />
            </div> */}
          </div>
          <div className={styles.terms_wrapper_content}>
            <p>
              Our site ensures the safety of the information our clients provide
              to us. We are not in the process of selling our client’s
              information to any third party without their consent.
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Privacy
