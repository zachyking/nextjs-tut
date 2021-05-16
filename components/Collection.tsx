import React from "react"
import { useContextualRouting } from '../contextual-modal/contextual-modal'
import NextChakraLink from './NextChakraLink'
import utilStyles from '../styles/utils.module.css'
import Date from './date'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  SimpleGrid,
  useColorMode
} from "@chakra-ui/react"
import { GetStaticProps } from "next"
import { getCollectionData } from "../lib/collections"
 
interface ContextualHref {
  makeContextualHref: (extraQueryParams: { [key: string]: any }) => string
  returnHref: string
  
}

interface CollectionData {
    id: string
    date: string
    title: string
    image: string
    contentHtml: string
}
export default function Collection(id: {id: string}) {

    const router = useRouter();
    const { makeContextualHref, returnHref }: ContextualHref = useContextualRouting()
    
    const [collectionData, changeCollection] = useState<object>();

    useEffect(() => { 
        //changeCollection(getCollectionData(id.id))
        fetch('/api/collections', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.parse("mysticwave")
          }).then((val) => {
              console.log(val)
          })

    }, [])

    const openModal = () => {
        router.push(
            makeContextualHref({ id: 'mysticwave' }),
            '/collections/mysticwave',
            {
            shallow: true,
            }
        );
    }

    const closeModal = () => {
        router.push(returnHref, undefined, { shallow: true });
    }

    return (
        <>
            <Flex
            align="center"
            justify="center"
            // // justify={{ base: "center", md: "space-around", xl: "space-between" }}
            // // direction={{ base: "column-reverse", md: "row" }}
            direction="column"
            minH="70vh"
            px={{ base: 0, md: 6 }}
            //mb={16}
            >

                <Box w="100%" mt={{ base: 4, md: 0 }} align="center" >
                  <Image src="/images/examplePic.png" size="100%" rounded="1rem" shadow="2xl" />
                </Box>
                {typeof(collectionData) !== "undefined" ??
                <Stack
                  spacing={4}
                  // w={{ base: "90%", md: "90%" }}
                  w="90%"
                  align="center"
                >
                  <h1 className={utilStyles.headingLg}>{typeof(collectionData) !== "undefined" ?? collectionData['title']}</h1>
                  <div className={utilStyles.lightText}>
                    <Date dateString={typeof(collectionData) !== "undefined" ?? collectionData['date']} />
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: typeof(collectionData) !== "undefined" ?? collectionData['contentHtml'] }} />
                </Stack> }

            </Flex>
        </>
    )
}
