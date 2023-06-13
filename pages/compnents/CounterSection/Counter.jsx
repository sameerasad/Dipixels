import React, { useState, useEffect } from 'react'
import styles from '../../../styles/Counter.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Counter() {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const [counter3, setCounter3] = useState(0)
  const [counter4, setCounter4] = useState(0)

  useEffect(() => {
    if (counter1 <= 12) {
      setTimeout(() => {
        setCounter1(counter1 + 1)
      }, 300)
    } else {
      setCounter1(12)
    }
  }, [counter1])

  useEffect(() => {
    if (counter2 <= 9875) {
      setTimeout(() => {
        setCounter2(counter2 + 300)
      }, 100)
    } else {
      setCounter2(9875)
    }
  }, [counter2])

  useEffect(() => {
    if (counter3 <= 11632) {
      setTimeout(() => {
        setCounter3(counter3 + 300)
      }, 100)
    } else {
      setCounter3(11632)
    }
  }, [counter3])
  useEffect(() => {
    if (counter4 <= 96) {
      setTimeout(() => {
        setCounter4(counter4 + 1)
      }, 30)
    } else {
      setCounter4(96)
    }
  }, [counter4])

  useEffect(() => {
    AOS.init({ duration: 1400 })
  }, [])

  return (
    <div className={styles.counter}>
      <div data-aos='slide-up' className={styles.minContainer}>
        <div
          // data-aos="flip-right"
          className={styles.counterItem}
        >
          <h3>{counter1}+</h3>
          <h5>
            Years in <br /> business
          </h5>
        </div>
        <div data-aos='flip-left' className={styles.counterItem}>
          <h3>{counter2}+</h3>
          <h5>Clients</h5>
        </div>
        <div data-aos='flip-right' className={styles.counterItem}>
          <h3>{counter3}+</h3>
          <h5>Projects</h5>
        </div>
        <div data-aos='flip-left' className={styles.counterItem}>
          <h3>{counter4}%</h3>
          <h5>Success Rate</h5>
        </div>
      </div>
    </div>
  )
}

export default Counter
