import React from 'react'
import Figma from '../../../public/assets/Figma.png'
import Adobe from '../../../public/assets/Adobe.png'
import Illustrator from '../../../public/assets/Illustrator.png'
import Photoshop from '../../../public/assets/Photoshop.png'
import XD from '../../../public/assets/XD.png'
import Wordpress from '../../../public/assets/Wordpress.png'
import Shopify from '../../../public/assets/Shopify.png'
import Laravel from '../../../public/assets/Laravel.png'
import ReactImg from '../../../public/assets/ReactImg.png'
import Angular from '../../../public/assets/Angular.png'
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
              <Image src={Illustrator} alt='' width='170' height='170' />
            </div>
            <div className={styles.svg}>
              <Image src={Photoshop} alt='' width='190' height='190' />
            </div>
            <div className={styles.svg}>
              <Image src={XD} alt='' width='150' height='150' />
            </div>
          </div>
          <div className={`${styles.icons} ${styles.filter_icon}`}>
            <div className={styles.svg}>
              <Image src={Wordpress} alt='' width='150' height='150' />
            </div>
            <div className={styles.svg}>
              <Image src={Shopify} alt='' width='150' height='150' />
            </div>
            <div className={styles.svg}>
              <Image src={Laravel} alt='' width='150' height='150' />
            </div>
            <div className={styles.svg}>
              <Image src={ReactImg} alt='' width='150' height='150' />
            </div>
            <div className={styles.svg}>
              <Image src={Angular} alt='' width='150' height='150' />
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Brands
