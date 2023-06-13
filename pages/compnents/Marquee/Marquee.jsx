import React from 'react'
import styles from '../../../styles/marquee.module.css'

function Marquee({ children }) {
  return (
    <>
      <div className={styles.marquee}>
        <h1>{children}</h1>
      </div>
    </>
  )
}

export default Marquee
