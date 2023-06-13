import React, { useState, useEffect } from 'react'
import Button from '../Buttons/Button/Button'
import styles from '../../../styles/Banner.module.css'
import PlayReel from '../HeroSection/PlayReel'
import VideoModal from '../VideoModal/VideoModal'
import Video from '../../../public/assets/video/DipixelsAllServices.mp4'
import OrderForm from '../../compnents/Forms/OrderForm'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import useWindowSize from '../Hooks/useWindowSize'
import { Facebook, Instagram, Linkedin, Twitter } from '../SVG'
const Banner = () => {
  const [isVideoModalOpen, setVideoModalOpen] = useState(false)
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)
  const [isHovered, setIsHovered] = useState('')
  const windowSize = useWindowSize()
  const handleIconHover = (value) => {
    setIsHovered(value)
  }

  const handleIconMouseLeave = () => {
    setIsHovered('')
  }

  const openVideoModal = () => {
    setVideoModalOpen(true)
  }
  const closeVideoModal = () => {
    setVideoModalOpen(false)
  }
  const openFormModal = () => {
    setIsFormModalOpen(true)
  }
  const closeFormModal = () => {
    setIsFormModalOpen(false)
  }

  useEffect(() => {
    const aosConfig = {
      duration: 1400,
      disable: windowSize.width <= 768, // Disable AOS on mobile screens
    }

    AOS.init(aosConfig)

    return () => {
      AOS.refresh() // Re-enable AOS when the component unmounts
    }
  }, [windowSize])

  return (
    <>
      {isFormModalOpen && (
        <div data-aos='fade-down' className='overlay'>
          <div className='modal'>
            <div onClick={closeFormModal} className='modal_close'>
              <img src='/assets/CloseIcon.svg' alt='' />
            </div>
            <OrderForm
              closeModal={closeFormModal}
              isUserComingFromHome={true}
            />
          </div>
        </div>
      )}
      <div data-aos='fade-down' className={styles.Banner_section}>
        <div className={styles.Banner_section_wrapper}>
          {/* <div
            data-aos="fade-right"
            className={styles.background_video_container}
          >
            <img src="/assets/Banner_new.gif" alt="" />
          </div> */}
          <div className={styles.Banner_section_content}>
            <h1>
              <span> we are </span> dipixels
            </h1>
            <p>
              Build a unique identity for your brand and allow it to thrive in
              the marketplace. Our customised logo designs capture the true
              essence of what you stand for. We make sure every detail is
              on-brand and one of kind because
              <span> you deserve the best.</span>
            </p>
          </div>
          <div data-aos='fade-left' className={styles.Banner_ButtonsDiv}>
            <div
              onClick={() => {
                openFormModal()
              }}
            >
              <Button> get a quote </Button>
            </div>

            {/* <Button>case study </Button> */}
          </div>
          <div
            data-aos='fade-up'
            className={styles.dipixels_header_Reel}
            onClick={openVideoModal}
          >
            <PlayReel />
          </div>
        </div>
        <div className={styles.Banner_section_content_links}>
          <div
            className={styles.Banner_section_content_links_facebook}
            onMouseEnter={() => handleIconHover('facebook')}
            onMouseLeave={handleIconMouseLeave}
          >
            <Link href=' https://www.facebook.com/Dipixels.LLC/'>
              {/* <img src='/assets/facebook.svg' alt='' /> */}
              <div
                style={{
                  transform: 'rotate(270deg)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Facebook
                  color={isHovered === 'facebook' ? '#00F3F4' : '#707070'}
                />
              </div>
              <p>facebook</p>
            </Link>
          </div>
          <div
            className={styles.Banner_section_content_links_twitter}
            onMouseEnter={() => handleIconHover('twitter')}
            onMouseLeave={handleIconMouseLeave}
          >
            <Link href='https://twitter.com/Dipixels_/ '>
              {/* <img src='/assets/twitter.png' alt='' /> */}
              <div
                style={{
                  transform: 'rotate(270deg)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Twitter
                  color={isHovered === 'twitter' ? '#00F3F4' : '#707070'}
                />
              </div>
              <p>twitter</p>
            </Link>
          </div>
          <div
            className={styles.Banner_section_content_links_instagram}
            onMouseEnter={() => handleIconHover('instagram')}
            onMouseLeave={handleIconMouseLeave}
          >
            <Link href=''>
              {/* <img src='/assets/instagram.png' alt='' /> */}
              <div
                style={{
                  transform: 'rotate(270deg)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Instagram
                  color={isHovered === 'instagram' ? '#00F3F4' : '#707070'}
                />
              </div>
              <p>instagram</p>
            </Link>
          </div>
          <div
            className={styles.Banner_section_content_links_linkedin}
            onMouseEnter={() => handleIconHover('linkedin')}
            onMouseLeave={handleIconMouseLeave}
          >
            <Link href='https://www.linkedin.com/company/dipixels'>
              {/* <img
                src='/assets/linkedin-in.png'
                alt=''
                width='15'
                height='15'
              /> */}
              <div
                style={{
                  transform: 'rotate(270deg)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Linkedin
                  color={isHovered === 'linkedin' ? '#00F3F4' : '#707070'}
                />
              </div>
              <p>linkedin</p>
            </Link>
          </div>
        </div>
      </div>

      {isVideoModalOpen && (
        <div data-aos='flip-up' className='videoOverlay'>
          <div className='videoModal'>
            <div onClick={closeVideoModal} className='modal_close'>
              <img src='/assets/CloseIcon.svg' alt='' />
            </div>
            <VideoModal videoLink={Video} />
          </div>
        </div>
      )}
    </>
  )
}

export default Banner
