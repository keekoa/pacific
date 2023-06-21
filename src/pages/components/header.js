import { useState, useEffect } from 'react'

import Image from "next/image"
import Link from "next/link"

import styles from "../../styles/components/Header.module.css"
import { Noto_Sans_Thai } from 'next/font/google'

const thaiFont = Noto_Sans_Thai({ subsets: ['thai'] });

export default function Header() {

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
      <header className={styles.header}>
        <div>
          <p>(+66) 085 545 9000, 02 898 6616</p>
          <div>
            <p>pacific-crane@hotmail.com</p>
            <Link href="/" locale="th" className={`${styles.language} ${thaiFont.className}`} >ภาษาไทย</Link>
          </div>
        </div>
      </header>
      <nav className={styles.navbar}>
        <div>
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
        </div>
      </nav>
    </div>
  )
}