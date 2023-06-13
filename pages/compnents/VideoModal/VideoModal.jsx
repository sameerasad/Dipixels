import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const VideoModal = ({ videoLink }) => {
  // useEffect(() => {
  //   AOS.init({ duration: 1600, opacity: 0 });
  // }, []);

  return (
    <>
      <div className='Video'>
        <video src={videoLink} controls autoPlay />
      </div>
    </>
  )
}

export default VideoModal
