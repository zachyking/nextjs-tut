import React from "react"

import NextChakraLink from './NextChakraLink'
import utilStyles from '../styles/utils.module.css'
import Date from './date'


import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  SimpleGrid,
} from "@chakra-ui/react"
 
export default function CollectionList({
  allCollectionsData
}: {
  allCollectionsData: {
    date: string
    title: string
    image: string
    id: string
  }[]
}) {
  return (
    <Flex
      display="column"

    >
      <Heading
        as="h2"
        size="xl"
        fontWeight="normal"
        textAlign="center"
        display="block"
        mb={5}
      >
        Collections
      </Heading> 
      <Flex
    
        // justify="center"
        // direction={["column", "row", "row"]}
        align="center"
        minH="70vh"
        px={{ base: 0, md: 6 }}
        mb={16}
      >
        
        
        {/* {allCollectionsData.map(({ id, date, title, image }) => (
              <li className={utilStyles.listItem} key={id}>
                <NextChakraLink href={`/posts/${id}`}>
                  <Button>{title}</Button>
                </NextChakraLink>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))} */}
       
       <SimpleGrid columns={[1, 2, 3]} w="100%" spacing="10px">
        {allCollectionsData.map(({ id, date, title, image }) => (
            <Box key={id} borderRadius="2xl" borderWidth="1px" w="100%" height="300" > 
              <Flex justify="center" display="column">

                <NextChakraLink href={`/collections/${id}`} w="60%" margin="auto">
                  <Button>{title}</Button>
                </NextChakraLink>
                <img src={image} />
                <Date dateString={date} />
              </Flex>
            </Box>

          ))}

{/*         
        <Box bg="tomato" w={60} height="80px"></Box>
        <Box bg="tomato" w={60} height="80px"></Box>
        <Box bg="tomato" w={60} height="80px"></Box> */}
      </SimpleGrid>

    </Flex>
    </Flex>
  )
}
 