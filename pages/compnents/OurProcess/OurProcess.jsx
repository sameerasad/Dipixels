import Heading from '../Heading/Heading'
import Marquee from '../Marquee/Marquee'
// import './OurProcess.css'
import styles from '../../../styles/OurProcess.module.css';

function OurProcess() {
  const OurProcess = [
    {
      img: '/assets/innovative.png',
      title: 'Innovative',
      des: 'Innovation is our devotion that keeps us going and makes us capable of delivering digital solutions that are unique and coherent.',
    },
    {
      img: '/assets/collaboration.png',
      title: 'Collaboration',
      des: 'We believe in establishing close relationships with our clients and therefore we understand and prioritize your requirements and expectations.',
    },
    {
      img: '/assets/customDesign.png',
      title: 'Custom Design',
      des: 'Our designs are custom-made through a strategic process to give your business a unique brand identity.',
    },
    {
      img: '/assets/businessGrowth.png',
      title: 'Business Growth',
      des: 'Our motive is to help your business reach out to a wider audience, achieve your goals, and grow dynamically.',
    },
  ]
  return (
    <>
      <div class={styles.our_process_section} style={{marginTop: '5em'}}>
        <Marquee>our process</Marquee>
        <div class={styles.our_process_section_wrapper}>
          <div className={styles.minContainer}>
          <div style={{ marginTop: '-50px', justifyContent:'flex-start' }}>
            <Heading>our process</Heading>
          </div>
            <p className={styles.description}>
              We work with a talented team of professionals who prioritize your
              requirements. Our optimism and persistence allow us to deliver
              projects on time and that fully meet our client’s expectations.
            </p>

            <div className={styles.processCards}>
              {OurProcess.map((item) => {
                return (
                  <div className={styles.card}>
                    <img src={item.img} alt='' />
                    <h3>{item.title}</h3>
                    <p>{item.des}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurProcess
