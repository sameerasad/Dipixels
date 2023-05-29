import React, { useState } from 'react'
import VideoModal from '../VideoModal/VideoModal'

const PlayReel = () => {
  // const [VideoModalOpen, setVideoModalOpen] = useState(false)

  // const openVideoModal = () => {
  //   setVideoModalOpen(true)
  // }

  // const closeVideoModal = () => {
  //   setVideoModalOpen(false)
  // }

  return (
    <>
      <div className='playReel'>
        {/* <a href='#'> */}
          <h2 
          // onClick={openVideoModal}
          >
            PLAY <span> REEL </span>
          </h2>
        {/* </a> */}
      </div>
      {/* {isVideoModalOpen && (
        <div className='videoOverlay'>
        <div className='videoModal'>
          <div onClick={closeVideoModal} className='modal_close'>
            <img src='/assets/CloseIcon.svg' alt='' />
          </div>
          <VideoModal />
          </div>
          </div>
      )} */}
    </>
  )
}

export default PlayReel
