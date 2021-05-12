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
  useColorMode
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
      align="center"
      minH="90vh"
      mb={12}
    >
      <Heading
        as="h2"
        size="xl"
        fontWeight="normal"
        textAlign="center"
        display="block"
        my={8}
      >
        Collections
      </Heading> 
      <Flex
        display="column"
        align="center"
        minH="80vh"
      >
        <SimpleGrid  w="100%" spacing="10px" minH="70vh" 
          // display="flex"
          align-items="center"
          justify-content="center"
          overflow-x="auto"
          display={{ base: "column", md: "flex" }}

        >
          {allCollectionsData.map(({ id, date, title, image }) => (
            <Box key={id} borderRadius="2xl" padding={5} borderWidth="1px" display={{ base: "block", md: "inline-block" }}
            w={{ base: "80vw", md: "25vw" }} height="60vh" margin="auto"> 
              <Flex justify="center" display="column">

                <NextChakraLink href={`/collections/${id}`} w="60%" margin="auto">
                  <Button>{title}</Button>
                </NextChakraLink>
                <img src={image} />
                <Date dateString={date} />
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
 