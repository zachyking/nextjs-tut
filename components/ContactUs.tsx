import React from "react"
import NextChakraLink from './NextChakraLink'
import {
  Button,
  Flex,
  Heading,
  Stack,
  IconButton
} from "@chakra-ui/react"
 
export default function ContacUs() {
  return (
      <>
        <Flex
            display="column"
            align="center"
            justify="center"
            minH="50vw"
            mb={12}
        >
            <Stack
              spacing={2}
              w={{ base: "80%", md: "80%" }}
              align="center"
              margin="auto"
            >
                <Heading
                as="h2"
                size="md"
                fontWeight="normal"
                // color="primary.800"
                mt="50%"
                textAlign="center"
                >
                    Do you have any idea what we could do better?
                </Heading>
                <Heading
                as="h2"
                size="xl"
                // color="primary.800"
                fontWeight="normal"
                lineHeight={2}
                textAlign="center"
                >
                Let us know!
                </Heading>
                <NextChakraLink href="/">
                    <Button
                    borderRadius="8px"
                    py={4}
                    // lineHeight={0.75}
                    size="md"
                    aria-label="email"

                    >Email</Button>
                </NextChakraLink>
            </Stack>

            {/* <Heading
                as="h2"
                size="xl"
                fontWeight="normal"
                textAlign="center"
                display="block"

                my={20}
            >
                Do you have an idea what we could do better?
            </Heading> 
            <NextChakraLink href="mailto: cardanosounds@gmail.com">
                <Button
                  borderRadius="8px"
                  py={4}
                  lineHeight={0.75}
                  size="md"
                  aria-label="Contact us"
                  z-index={-1}

                >Contact us!</Button>
            </NextChakraLink> */}


        </Flex>
      </>
  )
}