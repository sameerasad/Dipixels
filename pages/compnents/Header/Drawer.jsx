import React, { useState, useEffect } from "react";
import DropdownArrow from "/public/assets/dropdownArrow.svg";
import styles from "../../../styles/Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import StyledButton from "../Buttons/StyledButton/StyledButton";

const Drawer = ({ setOpen }) => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [animate, setAnimate] = useState("slide-left");
  useEffect(() => {
    AOS.init({ duration: 1400 });
  }, []);
  return (
    <>
      <div data-aos={animate} className={styles.dipixels_drawer_sidebar}>
        <div className={styles.dipixels_drawer_moretoshow}>
          <div className={styles.dipixels_drawer_sidebarWrapper}>
            <div className={styles.dipixels_drawer_SideBarContent}>
              <div className={styles.dipixels_drawer_CloseIcon}>
                <img
                  src="/assets/CloseIcon.svg"
                  alt=""
                  onClick={() => {
                    setOpen(false);
                  }}
                />
              </div>
              <div className={styles.dipixels_drawer_sidebarItems}>
                <ul className={styles.dipixels_drawer_navbar}>
                  <li>
                    <Link href="/" passHref>
                      <div
                        className={`${styles.nav_link} ${
                          router.pathname === "/" ? styles.active : ""
                        }`}
                      >
                        Home
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" passHref>
                      <div
                        className={`${styles.nav_link} ${
                          router.pathname === "/about" ? styles.active : ""
                        }`}
                      >
                        About
                      </div>
                    </Link>
                  </li>
                  <li
                    className={styles.service_dropdown}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <Link href="/services" passHref>
                      <div
                        className={`${styles.nav_link} ${
                          router.pathname === "/services" ? styles.active : ""
                        }`}
                      >
                        Services
                        <Image
                          src={DropdownArrow}
                          alt=""
                          width="10"
                          height="10"
                        />
                      </div>
                    </Link>
                    {isDropdownOpen && (
                      <ul
                        data-aos={animate}
                        className={styles.dipixels_drawer_dropdown_menu}
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <li>
                          <Link href="/web-design-development" passHref>
                            <div
                              className={`${styles.dropdown_link} ${
                                router.pathname === "/web-design-development"
                                  ? styles.active
                                  : ""
                              }`}
                            >
                              Web Design and Development
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/mobile-app-design-development" passHref>
                            <div
                              className={`${styles.dropdown_link} ${
                                router.pathname ===
                                "/mobile-app-design-development"
                                  ? styles.active
                                  : ""
                              }`}
                            >
                              Mobile App Design and Development
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/logo-design" passHref>
                            <div
                              className={`${styles.dropdown_link} ${
                                router.pathname === "/logo-design"
                                  ? styles.active
                                  : ""
                              }`}
                            >
                              Logo Design
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/video-animation-production" passHref>
                            <div
                              className={`${styles.dropdown_link} ${
                                router.pathname ===
                                "/video-animation-production"
                                  ? styles.active
                                  : ""
                              }`}
                            >
                              Video Animation and Production
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/seo-services" passHref>
                            <div
                              className={`${styles.dropdown_link} ${
                                router.pathname === "/seo-services"
                                  ? styles.active
                                  : ""
                              }`}
                            >
                              SEO
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/content-writing" passHref>
                            <div
                              className={`${styles.dropdown_link} ${
                                router.pathname === "/content-writing"
                                  ? styles.active
                                  : ""
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
                    <Link href="/work" passHref>
                      <div
                        className={`${styles.nav_link} ${
                          router.pathname === "/work" ? styles.active : ""
                        }`}
                      >
                        Work
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/packages" passHref>
                      <div
                        className={`${styles.nav_link} ${
                          router.pathname === "/packages" ? styles.active : ""
                        }`}
                      >
                        Packages
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us" passHref>
                      <div
                        className={`${styles.nav_link} ${
                          router.pathname === "/contact-us" ? styles.active : ""
                        }`}
                      >
                        Contact us
                      </div>
                    </Link>
                  </li>
                </ul>

                <div className={styles.dipixels_drawer_button}>
                  <Link href="./start-project">
                    <StyledButton>Start a project</StyledButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
