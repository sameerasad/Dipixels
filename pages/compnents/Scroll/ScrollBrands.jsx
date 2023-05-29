import React from 'react'
import Figma from '../../../public/assets/Figma.svg'
import Adobe from '../../../public/assets/Adobe.svg'
import Illustrator from '../../../public/assets/Illustrator.svg'
import Photoshop from '../../../public/assets/Photoshop.svg'
import XD from '../../../public/assets/XD.svg'
import Wordpress from '../../../public/assets/Wordpress.svg'
import Word from '../../../public/assets/word.png'
import Image from 'next/image'
import Marquee from '../Marquee/Marquee'
import Heading from '../Heading/Heading'
import styles from '../../../styles/ScrollBrands.module.css'

const Brands = () => {
  return (
    <>
      <section>
        <section className={styles.brands}>
          <Marquee>brands brands</Marquee>
          <div className={styles.container_2}>
            <Heading>we work with</Heading>
          </div>
        </section>

        <section
          className={styles.iconScroll}
          style={{ backgroundColor: '#000' }}
        >
          <div className={styles.icons}>
            <div className={styles.svg}>
              <Image src={Figma} alt='' width='150' height='150' />
            </div>
            <div className={styles.svg}>
              <Image src={Adobe} alt='' width='200' height='200' />
            </div>
            <div className={styles.svg}>
              <Image src={Illustrator} alt='' width='180' height='180' />
            </div>
            <div className={styles.svg}>
              <Image src={Photoshop} alt='' width='200' height='200' />
            </div>
            <div className={styles.svg}>
              <Image src={XD} alt='' width='160' height='160' />
            </div>
          </div>
          <div className={`${styles.icons} ${styles.filter_icon}`}>
            <div className={styles.svg}>
              <Image src={XD} alt='' width='160' height='160' />
            </div>
            <div className={styles.svg}>
              <Image src={Photoshop} alt='' width='200' height='200' />
            </div>
            <div className={styles.svg}>
              <Image src={Illustrator} alt='' width='180' height='180' />
            </div>
            <div className={styles.svg}>
              <Image src={Adobe} alt='' width='200' height='200' />
            </div>
            <div className={styles.svg}>
              <Image src={Figma} alt='' width='150' height='150' />
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Brands
