import { useState, useEffect } from 'react'

import Image from "next/image"
import Link from "next/link"

import styles from "../../styles/components/Navbar.module.css"

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Function to detect scroll ans set state
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`${styles.container} ${isSticky ? styles.sticky : ''}`}>
      <div className={styles.headinfo}>
        <p>(+66) 085 545 9000, 02 898 6616</p>
        <p>pacific-crane@hotmail.com</p>
      </div>
      <nav className={styles.navbar}>
        <Image
          src={isSticky ? "/logo.svg" : "/full-logo.svg"}
          width={isSticky? 50 : 140}
          height={isSticky ? 50 : 80}
          className={styles.logo}
          alt="logo"
        />
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="">Service</Link></li>
          <li><Link href="">Product</Link></li>
          <li><Link href="">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}