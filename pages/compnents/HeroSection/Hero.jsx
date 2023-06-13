import React, { useState, useEffect } from 'react'
import Button from '../Buttons/Button/Button'
import StyledButton from '../Buttons/StyledButton/StyledButton'
import PlayReel from './PlayReel'
import VideoModal from '../VideoModal/VideoModal'
import styles from '../../../styles/Hero.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import useWindowSize from '../Hooks/useWindowSize'

const Hero = ({ title, description, company, videoLink }) => {
  const [isVideoModalOpen, setVideoModalOpen] = useState(false)
  const router = useRouter()
  const { pathname } = router
  const windowSize = useWindowSize()
  const openVideoModal = () => {
    setVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setVideoModalOpen(false)
  }

  useEffect(() => {
    const aosConfig = {
      duration: 1400,
      disable: window.matchMedia('(max-width: 768px)').matches, // Disable AOS on mobile screens
    }

    AOS.init(aosConfig)

    return () => {
      AOS.refresh() // Re-enable AOS when the component unmounts
    }
  }, [])

  const shouldRenderButtonWrapper = pathname === '/about'

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 data-aos='fade-down' className={styles.colorGreen}>
              {title} <span className={styles.colorBlue}>{company}</span>
            </h1>
            <p data-aos='fade-right'>{description}</p>
            {shouldRenderButtonWrapper && (
              <div
                data-aos='fade-up'
                className={styles.button_Wrapper}
                style={{
                  display: 'flex',
                  gap: '20px',
                }}
              >
                {/* <Button>View Our Portfolio</Button> */}
                <Link href='/services'>
                  <Button>View Our Services</Button>
                </Link>
              </div>
            )}
          </div>
          <div data-aos='fade-left' className={styles.videoPlayReel}>
            <div
              // data-aos="fade-right"
              className={styles.heroReel}
              onClick={openVideoModal}
            >
              <PlayReel />
            </div>
          </div>
        </div>
      </div>
      {isVideoModalOpen && (
        <div data-aos='flip-up' className={styles.videoOverlay}>
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
