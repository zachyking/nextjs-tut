import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import DarkModeSwitch from '../components/darkmodeswtich'

const name = 'dzcodes'
export const siteTitle = 'Cardano Sounds NFT'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/cardano-logo.svg" />
        <meta
          name="description"
          content="Get original music clip NFTs on Cardano!"
        />
        <meta
          property="og:image"
          content="https://cryptologos.cc/logos/cardano-ada-logo.svg?v=010"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <DarkModeSwitch/>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}