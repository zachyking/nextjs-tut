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
  return (
      <>

      
      </>
  )
}