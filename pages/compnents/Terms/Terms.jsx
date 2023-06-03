import React from 'react'
import Marquee from '../Marquee/Marquee'
import Heading from '../Heading/Heading'
import styles from '../../../styles/terms.module.css'
const Terms = () => {
  return (
    <>
      <div className={styles.terms_section}>
        <Marquee> Terms of use</Marquee>
        <div className={styles.terms_wrapper}>
          <div className='terms-main-heading'>
            <h1>terms and condition</h1>
            <div className='terms-main-heading-image'>
              <img src='/assets/arrow-up-right.png' alt='' />
            </div>
          </div>
          <div className={styles.terms_wrapper_content}>
            <p>
              By utilizing any site, administration, application or item claimed
              or worked by Dipixels joining as a customer or client of any
              service, you consent to be legitimately bound by these terms and
              conditions of use, including those terms and conditions
              consolidated by reference. We may reexamine these terms whenever
              by modifying this posting. You should visit this website page
              occasionally to check these terms and conditions, since they are
              authoritative on you. <br />
              <br /> You recognize and concur that we should have the privilege
              (however not the commitment) in our sole attentiveness, to
              pre-screen, decline or take off any project by the client given
              that its content disregards these terms or is generally offensive
              or unlawful, disgusting, profane, defamatory, actuates religious,
              racial or ethnic contempt, or abuses the privileges of others.
              Activity that is conveyed to our consideration which shows up in
              our sole judgment to damage the law will be conveyed to the
              consideration of the best possible experts. You recognize, assent
              and concur that we may access, save, and reveal your record data
              and substance if required to do as such by law or in a good faith
              belief that such access safeguarding or revelation is sensibly
              important to: (an) comply with the legitimate process; (b)
              authorize these terms; (c) react to claims regarding any content
              that abuses the privileges of outsiders; (d) respond to your
              requests for client administration; or (e) ensure our rights,
              property, or security of the rights, property, or wellbeing of our
              clients or the general population. <br />
              <br /> Dipixels ensures the security of the client’s private and
              credit information during all times. The information remains
              stored in our server which is only to be viewed by the concerned
              staff. This means that your information is in safe hands.{' '}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.terms_section}>
        <Marquee> Terms of use</Marquee>
        <div className={styles.terms_wrapper}>
          <div className='terms-main-heading'>
            <h1>copyrights and trademark</h1>
            <div className='terms-main-heading-image'>
              <img src='/assets/arrow-up-right.png' alt='' />
            </div>
          </div>
          <div className={styles.terms_wrapper_content}>
            <p>
              Any service that Dipixels has provided and is intended for a
              particular customer is to be used by that particular customer.
              Dipixels does not hold any rights to what is created for a
              customer.
              <br />
              <br /> Dipixels does not record a trademark application for the
              services intended for its customer. The customer is allowed to
              register as a trademark the service made for it by Dipixels.
              <br />
              <br /> If installment for any service is not made as per the
              installment strategies of Dipixels, then all of the client’s
              rights in and to the service provided for it, including any
              trademark property, will instantly return to the company.
              <br />
              <br /> Dipixels warrants that its services are of its own creation
              and are not duplicated from or inspired by existing service or
              trademarks yet does not warrant that a service will not match any
              concept of which it didn’t know at the time of its creation or
              which did not exist before the service was created by Dipixels.
              <br />
              <br />
              On the off chance that for some unintentional reason a service
              created by Dipixels appears to be indistinguishable to another
              party’s service, Dipixels will give a free redraw session with a
              new service.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Terms
