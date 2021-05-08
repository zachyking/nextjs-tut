import React from "react"
import NextChakraLink from './NextChakraLink'
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react"
 
export default function Hero() {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      minH="70vh"
      px={8}
      mb={16}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="normal"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          Cardano Sounds
        </Heading>
        <Heading
          as="h2"
          size="xl"
          color="primary.800"
          fontWeight="bold"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
          opacity="0.8"
        >
          NFT
        </Heading>
        <NextChakraLink href="/">
            <Button
              borderRadius="8px"
              py="4"
              px="4"
              lineHeight="1"
              size="md"
              aria-label="Get NFT"
            >Get yours!</Button>
        </NextChakraLink>
        {/* <Link href="/sale">
          <Button
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
          >
            Get yours!
          </Button> 
        </Link>*/}
      </Stack>
      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        <Image src="https://source.unsplash.com/collection/404339/800x600" size="100%" rounded="1rem" shadow="2xl" />
      </Box>
    </Flex>
  )
}
 