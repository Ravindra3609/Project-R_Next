import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div> &copy; 2023 Project-R | All Rights Reserved </div>
        <div>
          <div className={styles.social}>
          {/* <Image src="/1.png"  width={15} height={15} className={styles.icon} alt="facebook account" /> */}

<a href="https://www.facebook.com/login/">
  <img src="/1.png" width="15" height="15" class="styles.icon" alt="facebook account" />
  </a>

        <a href="https://www.instagram.com/"  ><Image src="/2.png"  width={15} height={15} className={styles.icon} alt="Instagram account" /></a>
        <a href="https://twitter.com/home?lang=en"  ><Image src="/3.png"  width={15} height={15} className={styles.icon} alt="Twitter account" /></a>
        <a href="https://www.youtube.com/"  ><Image src="/4.png"  width={15} height={15} className={styles.icon} alt="Youtube account" /></a>

          </div>
        </div>
    </div>
  )
}

export default Footer