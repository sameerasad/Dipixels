// import './Hero.css'
import React, { useState } from 'react'
import Gif from '../../../public/assets/Banner.gif'
import Button from '../Buttons/Button/Button'
import StyledButton from '../Buttons/StyledButton/StyledButton'
import PlayReel from './PlayReel'
import VideoModal from '../VideoModal/VideoModal'

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
      <div className='hero'>
        <div className='container'>
          <div className='heroContent'>
            <h1 className='colorGreen'>
              {title} <span className='colorBlue'>{company}</span>
            </h1>
            <p>{description}</p>
            <div
              style={{
                display: 'flex',
                gap: '20px',
                // marginTop: '2em',
                height: '60px',
              }}
            >
              <Button>View Our Portfolio</Button>
              <Button>View Our Services</Button>
            </div>
          </div>
          <div className='videoPlayReel'>
            <img src='/assets/Banner.gif' alt='' />
            <div className='heroReel' onClick={openVideoModal}>
              <PlayReel />
            </div>
          </div>
        </div>
      </div>
      {isVideoModalOpen && (
        <div className='videoOverlay'>
          <div className='videoModal'>
            <div onClick={closeVideoModal} className='modal_close'>
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
