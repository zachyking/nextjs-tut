import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedCollectionsData } from '../lib/collections'
// import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import { Flex, Stack, Heading, Button, useColorModeValue } from '@chakra-ui/react'
import Hero from '../components/Hero'
import CollectionList from '../components/CollectionList'
import ContactUs from '../components/ContactUs'
// import { PageTransition } from 'next-page-transitions'

export default function Home({
  allCollectionsData
}: {
  allCollectionsData: {
    date: string
    title: string
    id: string
    image: string
  }[]
}) {
  const color = useColorModeValue("gray.50", "gray.900")
  return (
    <Stack 
    as="main"
    align="center" 
    >
      <Flex 
        flexDirection="column"
      >
        <Layout home>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          <Hero></Hero>
          <Flex 
          justify="center"
          id="collections" 
          bgColor={color}
          // className={utilStyles.collections}
          >
            <CollectionList allCollectionsData={allCollectionsData}/>
          </Flex>
          <Flex 
          justify="center"
          id="contact" 
          >
            <ContactUs />
          </Flex>

        </Layout> 
      </Flex>
      
    </Stack>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allCollectionsData = getSortedCollectionsData()
  return {
    props: {
      allCollectionsData
    }
  }
}