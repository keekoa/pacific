import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pacific Machinery</title>
        <meta name="description" content="Crane & hoist services and products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.intro}>
            <h1>PACIFIC MACHINERY</h1>
            <h2>The single source solution for material handling.</h2>
            <h2>Trusted by many to undertake custom crane or hoist design and installation.</h2>
            <div className={styles.introNav}>
              <Link href="/contact">Contact us</Link>
              <Link href="/service">See our services</Link>
              <Link href="/product">See our products</Link>
            </div>
          </div>
          <div>
            <div className={styles.introImgContainer}>
              <Image
                src={"/images/crane.png"}
                width={3000}
                height={750}
                className={styles.introImg}
                alt="logo"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
