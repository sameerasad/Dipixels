import React from 'react'
import Heading from '../Heading/Heading'
import styles from '../../../styles/ScrollHeading.module.css'
import Waves from './Waves'
const ScrollHeadings = () => {
  return (
    <div>
      <section
        className={styles.ScrollingHeadings}
        style={{ backgroundColor: '#000' }}
      >
        <div className={styles.headingScroll}>
          <div className={styles.hScroll}>
            <h1 className={`${styles.stoke_h1} ${styles.font_vw}`}>Dipixels</h1>
          </div>
          <div className='hScroll'>
            <h1 className={`${styles.stoke_h1} ${styles.font_vw}`}>Dipixels</h1>
          </div>
        </div>

        {/* <Waves/> */}
        <div>
        <ul className={styles.ul}>
          <li>s</li>
          <li>t</li>
          <li>a</li>
          <li>r</li>
          <li>t</li>
          <li>&nbsp;</li>
          <li>a</li>
          <li>&nbsp;</li>
          <li>p</li>
          <li>r</li>
          <li>o</li>
          <li>j</li>
          <li>e</li>
          <li>c</li>
          <li>t</li>
          <li>
            <img src='/assets/arrow-up-right.png' alt='' />{' '}
          </li>
        </ul>
        </div>

        <div className={`${styles.headingScroll} ${styles.second}`}>
          <div className={styles.hScroll}>
            <h1 className={`${styles.stoke_h1} ${styles.font_vw}`}>Dipixels</h1>
          </div>
          <div className='hScroll'>
            <h1 className={`${styles.stoke_h1} ${styles.font_vw}`}>Dipixels</h1>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ScrollHeadings
