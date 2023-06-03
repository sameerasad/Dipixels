import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Button from '../Buttons/Button/Button'
import styles from '../../../styles/Hero.module.css'
import Link from 'next/link'
// import Video from '../../../public/assets/video/ContactUs.mp4'

const HeroContactus = ({ title, description, company, src }) => {
 const videoRef = useRef(null)

 useLayoutEffect(()=>{
  if(videoRef.current){
   videoRef.current.play()
  }
 }, [])

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.colorGreen}>
              {title} <span className={styles.colorBlue}>{company}</span>
            </h1>
            <p>{description}</p>
            <div
              className={styles.button_Wrapper}
              style={{
                display: 'flex',
                gap: '20px',
              }}
            >
              <Link href='/services'>
                <Button>View Our Services</Button>
              </Link>
            </div>
          </div>
          <div className={styles.contactus_videoPlay}>
            <video ref={videoRef} autoPlay loop style={{position: 'relative', zIndex: '9'}}>
             <source src={src} type='video/mp4'/>
            </video>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroContactus
