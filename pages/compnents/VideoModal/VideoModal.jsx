import React from 'react'

const VideoModal = ({videoLink}) => {
  return (
    <>
       <div className='Video'>
      <video src={videoLink} controls autoPlay />
    </div>
    </>
  )
}

export default VideoModal