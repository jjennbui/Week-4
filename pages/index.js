import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>example #1</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Welcome to my home page</h1>
        <ul>
          <li>Create</li>
          <li>Read</li>
          <li>Update</li>
          <li>Delete</li>
        </ul>

        <Link href="/about">
          <h2>About page</h2>
        </Link>

        <Link href="/grades">
          <h2>Grades page</h2>
        </Link>
      
      </main>
    </>
  )
}
