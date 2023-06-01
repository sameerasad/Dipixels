import React, { useState } from 'react'
import Button from '../Buttons/Button/Button'
import styles from '../../../styles/Banner.module.css'
import PlayReel from '../HeroSection/PlayReel'
import VideoModal from '../VideoModal/VideoModal'
import Video from '../../../public/assets/video/HomePage.mp4'
const Banner = () => {
  const [isVideoModalOpen, setVideoModalOpen] = useState(false)

  const openVideoModal = () => {
    setVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setVideoModalOpen(false)
  }
  
  return (
    <>
      <div className={styles.Banner_section}>
        <div className={styles.Banner_section_wrapper}>
        <div className={styles.background_video_container}>
          <img src='/assets/Banner_new.gif' alt='' />
        </div>
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
          <div
            className={styles.Banner_ButtonsDiv}
          >
            <Button> get a quote </Button>
            <Button> case study </Button>
          </div>
          <div className={styles.dipixels_header_Reel} onClick={openVideoModal}>
            <PlayReel />
          </div>
        </div>
        <div className={styles.Banner_section_content_links}>
          <div className={styles.Banner_section_content_links_facebook}>
            <a href=''>
              <img src='/assets/facebook.svg' alt='' />
              <p>facebook</p>
            </a>
          </div>
          <div className={styles.Banner_section_content_links_twitter}>
            <a href=''>
              <img src='/assets/twitter.png' alt='' />
              <p>twitter</p>
            </a>
          </div>
          <div className={styles.Banner_section_content_links_instagram}>
            <a href=''>
              <img src='/assets/instagram.png' alt='' />
              <p>instagram</p>
            </a>
          </div>
          <div className={styles.Banner_section_content_links_linkedin}>
            <a href=''>
              <img
                src='/assets/linkedin-in.png'
                alt=''
                width='15'
                height='15'
              />
              <p>linkedin</p>
            </a>
          </div>
        </div>
      </div>

      {isVideoModalOpen && (
        <div className='videoOverlay'>
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

// import React from 'react';
// import Button from '../Buttons/Button/Button';
// import styles from '../../../styles/Banner.module.css';

// const Banner = () => {
//   return (
//     <div className={styles.Banner_section}>
//       <div className={styles.background_video_container}>
//         <img src='/assets/Banner.gif' alt='' />
//       </div>
//       <div className={styles.Banner_section_wrapper}>
//         <div className={styles.Banner_section_content}>
//           <h1>
//             <span>we are</span> dipixels
//           </h1>
//           <p>
//             Build a unique identity for your brand and allow it to thrive in
//             the marketplace. Our customised logo designs capture the true
//             essence of what you stand for. We make sure every detail is
//             on-brand and one of a kind because <span>you deserve the best.</span>
//           </p>
//         </div>
//         <div className={styles.Banner_section_buttons}>
//           <Button>get a quote</Button>
//           <Button>case study</Button>
//         </div>
//       </div>
//       <div className={styles.Banner_section_content_links}>
//         <div className={styles.Banner_section_content_links_facebook}>
//           <a href=''>
//             <img src='/assets/facebook.png' alt='' />
//             <p>facebook</p>
//           </a>
//         </div>
//         <div className={styles.Banner_section_content_links_twitter}>
//           <a href=''>
//             <img src='/assets/twitter.png' alt='' />
//             <p>twitter</p>
//           </a>
//         </div>
//         <div className={styles.Banner_section_content_links_instagram}>
//           <a href=''>
//             <img src='/assets/instagram.png' alt='' />
//             <p>instagram</p>
//           </a>
//         </div>
//         <div className={styles.Banner_section_content_links_linkedin}>
//           <a href=''>
//             <img src='/assets/linkedin-in.png' alt='' width='15' height='15' />
//             <p>linkedin</p>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
