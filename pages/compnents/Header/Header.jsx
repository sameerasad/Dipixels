import React, { useState } from 'react'
import styles from '../../../styles/Header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import DropdownArrow from '/public/assets/dropdownArrow.svg'
import Image from 'next/image'
import Drawer from './Drawer'
const Header = () => {
  const router = useRouter()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [open, setOpen] = useState(false)
  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen)
  // }

  // const closeDropdown = () => {
  //   setIsDropdownOpen(false)
  // }

  return (
    <>
      <div className={styles.dipixels_header}>
        <div className={styles.wrapper}>
          <div className={styles.dipixels_header_logo}>
            <img src='/assets/dipixelsLogo.png' alt='' />
          </div>

          <ul className={styles.dipixels_header_navbar}>
            <li>
              <Link href='/' passHref>
                <div
                  className={`${styles.nav_link} ${
                    router.pathname === '/' ? styles.active : ''
                  }`}
                >
                  Home
                </div>
              </Link>
            </li>
            <li>
              <Link href='/about' passHref>
                <div
                  className={`${styles.nav_link} ${
                    router.pathname === '/about' ? styles.active : ''
                  }`}
                >
                  About
                </div>
              </Link>
            </li>
            <li
              className={styles.service_dropdown}
              onMouseEnter={() => setIsDropdownOpen(true)}
            >
              <Link href='/services' passHref>
                <div
                  className={`${styles.nav_link} ${
                    router.pathname === '/services' ? styles.active : ''
                  }`}
                >
                  Services
                  <Image src={DropdownArrow} alt='' width='10' height='10' />
                </div>
              </Link>
              {isDropdownOpen && (
                <ul
                  className={styles.dropdown_menu}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <li>
                    <Link href='/web-design-development' passHref>
                      <div
                        className={`${styles.dropdown_link} ${
                          router.pathname === '/web-design-development'
                            ? styles.active
                            : ''
                        }`}
                      >
                        Web Design and Development
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href='/mobile-app-design-development' passHref>
                      <div
                        className={`${styles.dropdown_link} ${
                          router.pathname === '/mobile-app-design-development'
                            ? styles.active
                            : ''
                        }`}
                      >
                        Mobile App Design and Development
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href='/logo-design' passHref>
                      <div
                        className={`${styles.dropdown_link} ${
                          router.pathname === '/logo-design'
                            ? styles.active
                            : ''
                        }`}
                      >
                        Logo Design
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href='/video-animation-production' passHref>
                      <div
                        className={`${styles.dropdown_link} ${
                          router.pathname === '/video-animation-production'
                            ? styles.active
                            : ''
                        }`}
                      >
                        Video Animation and Production
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href='/seo-services' passHref>
                      <div
                        className={`${styles.dropdown_link} ${
                          router.pathname === '/seo-services'
                            ? styles.active
                            : ''
                        }`}
                      >
                        SEO
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href='/content-writing' passHref>
                      <div
                        className={`${styles.dropdown_link} ${
                          router.pathname === '/content-writing'
                            ? styles.active
                            : ''
                        }`}
                      >
                        Content Writing
                      </div>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href='/work' passHref>
                <div
                  className={`${styles.nav_link} ${
                    router.pathname === '/work' ? styles.active : ''
                  }`}
                >
                  Work
                </div>
              </Link>
            </li>
            <li>
              <Link href='/packages' passHref>
                <div
                  className={`${styles.nav_link} ${
                    router.pathname === '/packages' ? styles.active : ''
                  }`}
                >
                  Packages
                </div>
              </Link>
            </li>
            <li>
              <Link href='/contact-us' passHref>
                <div
                  className={`${styles.nav_link} ${
                    router.pathname === '/contact-us' ? styles.active : ''
                  }`}
                >
                  Contact us
                </div>
              </Link>
            </li>
          </ul>

          <div className={styles.dipixels_header_button}>
            <Link href='./start-project'>
              <button>Start a project</button>
            </Link>
          </div>
          <div className={styles.dipixels_header_Triggermenu}>
            <img
              src='/assets/menu.svg'
              alt=''
              onClick={() => {
                setOpen((prevState) => !open)
              }}
            />
          </div>
          {open ? <Drawer setOpen={setOpen} open={open} /> : null}
        </div>
      </div>
    </>
  )
}

export default Header
