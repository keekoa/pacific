import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/Home.module.css'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Pacific Machinery</title>
        <meta name="description" content="Crane & hoist services and products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section>
          <h1>Contact</h1>
        </section>
      </main>
    </>
  )
}