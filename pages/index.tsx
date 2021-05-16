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
import Footer from '../components/Footer'
import Collection from '../components/Collection'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
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

  const router = useRouter()

  const [openedModal, openModal] = useState(false);

  return (
    <>
       <Modal size="xl" isOpen={openedModal} onClose={() => openModal(!openedModal)}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Collection id="mysticwave"/> 
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => openModal(!openedModal)}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
              <Button onClick={() => openModal(!openedModal)}>Open</Button>

              <CollectionList allCollectionsData={allCollectionsData}/>
            </Flex>
            <Flex 
            justify="center"
            id="contact" 
            >
              <ContactUs />
            </Flex>

            <Flex 
              justify="center"
              bgColor={color}
            >

              <Footer></Footer>
            </Flex>
          </Layout> 
        </Flex>

      </Stack>
    </>
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