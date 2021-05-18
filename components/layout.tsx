import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import mainStyles from './layout.module.css'
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
  // useEffect(() => { 
    
  //    var prevScrollpos = window.pageYOffset;
  // window.onscroll = function() {
  // var currentScrollPos = window.pageYOffset;
  //   if (prevScrollpos > currentScrollPos) {
  //     console.log("navbar:")
  //     console.log("nemiziiim")
  //     document.getElementById("navbar").style.marginTop = "0px";
  //   } else {
  //     console.log("navbar:")
  //     console.log("miziiim")
  //     document.getElementById("navbar").style.marginTop = "-800px";
  //   }
  //   prevScrollpos = currentScrollPos;
  // }}, [])
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "http://localhost:8080/bundle.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  // },[])

  return (
    <Flex
      direction="column"
      align="top"
      w="100vw"
    
      // maxW={{
      //   base: "auto", // 0-80em
      //   xl: "60em" // 80em+
      // }}
      m="0 auto"
    >
      <div className={mainStyles.container}>
        <Head >
          <link rel="icon" href="/card-wave2.svg" />
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
        <header  className={mainStyles.header}>
          {/* <Flex
            direction="column"
            align="top"
            maxW={{
              base: "auto", // 0-80em
              xl: "60em" // 80em+
            }}
            m="0 auto"
          > */}
            <StickyNav className={mainStyles.stickyNav}>
              <DarkModeSwitch/>
            </StickyNav>
          {/* </Flex> */}
        </header>
        
          <main>{children}</main>
        {/* </Flex> */}
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
