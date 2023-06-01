import React, { useState } from 'react'
import Gif from '../../../public/assets/Banner.gif'
import Button from '../Buttons/Button/Button'
import StyledButton from '../Buttons/StyledButton/StyledButton'
import PlayReel from './PlayReel'
import VideoModal from '../VideoModal/VideoModal'
import styles from '../../../styles/Hero.module.css'

const Hero = ({ title, description, company, videoLink }) => {
  const [isVideoModalOpen, setVideoModalOpen] = useState(false)
  const openVideoModal = () => {
    setVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setVideoModalOpen(false)
  }
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.colorGreen}>
              {title} <span className={styles.colorBlue}>{company}</span>
            </h1>
            <p>{description}</p>
            <div  className={styles.button_Wrapper}
              style={{
                display: 'flex',
                gap: '20px',
                // marginTop: '2em',
                // height: '60px',
              }}
            >
              <Button>View Our Portfolio</Button>
              <Button>View Our Services</Button>
            </div>
          </div>
          <div className={styles.videoPlayReel}>
            <div className={styles.heroReel} onClick={openVideoModal}>
              <PlayReel />
            </div>
          </div>
        </div>
      </div>
      {isVideoModalOpen && (
        <div className={styles.videoOverlay}>
          <div className={styles.videoModal}>
            <div onClick={closeVideoModal} className={styles.modal_close}>
              <img src='/assets/CloseIcon.svg' alt='' />
            </div>
            <VideoModal videoLink={videoLink} />
          </div>
        </div>
      )}
    </>
  )
}

export default Hero