import Navbar from "./navbar"
import Footer from "./footer"

import { Roboto_Mono } from 'next/font/google'
import styles from "../../styles/components/Layout.module.css"

const font = Roboto_Mono({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <div className={`${styles.container} ${font.className}`}>
      <Navbar />
        <main className={styles.main}>{ children }</main>
      <Footer />
    </div>
  )
}