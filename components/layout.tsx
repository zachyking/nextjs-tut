import Head from 'next/head'
import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import mainStyles from './layout.module.css'
import { css, jsx } from "@emotion/react";
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitchMenu'
import StickyNav from "react-sticky-nav";

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
    <Flex
      direction="column"
      align="top"
      maxW={{
        base: "auto", // 0-80em
        xl: "60em" // 80em+
      }}
      m="0 auto"
    >
      <div className={mainStyles.container}>
        <Head>
          <link rel="icon" href="/cardano-logo.svg" />
          <meta
            name="description"
            content="Get music clip NFT with original sound on Cardano blockchain!"
          />
          <meta
            property="og:image"
            content="https://cryptologos.cc/logos/cardano-ada-logo.svg?v=010"
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={mainStyles.header}>
        <StickyNav className={mainStyles.stickyNav}>
          <DarkModeSwitch/>
        </StickyNav>
        </header>
        <Flex
          align="center"
          justify="center"
          padding={{
            base: "15vw 10vw", // 0-80em
            xl: "6em 0" // 80em+
          }}
        >
          <main>{children}</main>
        </Flex>
        {!home && (
          <div className={mainStyles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}   
      </div>

    </Flex>

  )
}