import React, { useState, useEffect } from 'react'
import OrderForm from '../Forms/OrderForm'
import styles from '../../../styles/WebsitePackagesCard.module.css'
import StyledButton from '../Buttons/StyledButton/StyledButton'
import AOS from 'aos'
import 'aos/dist/aos.css'
const WebsitePackagesCard = ({ dataPackage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [packageType, setPackageType] = useState('')

  const closeModal = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    AOS.init({ duration: 1400 })
  }, [])
  return (
    <>
      <div data-aos='slide-up' className={styles.packagesCards}>
        {dataPackage?.map((item) => {
          return (
            <div key={item.id} className={styles.card}>
              <div data-aos='flip-right' className={styles.packagetitle}>
                <h2>
                  {item.title}
                  <span className={styles.colorBlue}> {item.packageBlue}</span>
                </h2>
              </div>
              <div data-aos='flip-right' className={styles.packagePrice}>
                <h4 className={styles.salePrice}>{item.regularPrice}</h4>
                <p className={styles.regularPrice}>{item.salePrice}</p>
              </div>

              <div data-aos='flip-right' className={styles.packageListing}>
              <ul>
            {item.listItems.map((listItem, index) => (
              <li key={index}>{listItem}</li>
            ))}
          </ul>
              </div>

              <div className={styles.packagecontact}>
                <div data-aos='flip-right' className={styles.speakWithUS}>
                  <h3>{item.speakWithUs}</h3>
                  <a href={item.contactNumberLink}>{item.contactNumber}</a>
                </div>
                {/* <div className={styles.chatNow}>
                  <Link href={item.chatNowLink}>{item.chatNow}</Link>
                </div> */}
                <div
                  className={styles.packagebtn}
                  onClick={() => {
                    setIsModalOpen(true)
                    setPackageType(item.title)
                  }}
                >
                  <StyledButton>{item.btnTxt}</StyledButton>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {isModalOpen && (
        <div data-aos='fade-down' className={styles.overlay}>
          <div className={styles.modal}>
            <div onClick={closeModal} className={styles.modal_close}>
              <img src='/assets/CloseIcon.svg' alt='' />
            </div>
            <OrderForm closeModal={closeModal} orderPackage={packageType} />
          </div>
        </div>
      )}

      <div
        style={{
          marginTop: '8em',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {/* <Button>view more packages</Button> */}
      </div>
    </>
  )
}

export default WebsitePackagesCard
