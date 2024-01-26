"use client";
import Link from "next/link";
import styles from "./footer.module.scss";
// import Logo from "../../public/assets/images/progpt.png";
// const Logo = "/assets/images/logo-demo.png"
const Logo = "/assets/images/progpt.png"
import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.footer}>
          <div className="container">
            <div className={styles.footerTopDetails}>
              <div className={styles.footerLogo}>
                <Link href="/">
                  Demo
                  {/* <img src={Logo} alt="Logo" /> */}
                </Link>
              </div>
              <div className={styles.footerRightSide}>
                {/* <Link href="/gpt">GPT</Link> */}
                
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/sitemap-0.xml">Site map</Link>

                {/* <Link href="/" target="blank">
                  sitemap
                </Link> */}
              </div>
            </div>
            <div className={styles.footerBottomDetails}>
              <p>Copyright Progpts © 2024. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
