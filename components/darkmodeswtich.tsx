import { useColorMode, Switch, Flex, Button, IconButton } from '@chakra-ui/react'
import { useState } from 'react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextChakraLink from '../components/NextChakraLink'
// import { MoonIcon, SunIcon } from '@chakra-ui/icons'


export default function DarkModeSwitch() {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    return (
        <Flex>
            <Flex
              pos="fixed"
              top="1rem"
              right="1rem"
              align="center"
            >
                <Flex>
                    <NextChakraLink href="/">
                        <Button
                          as="a"
                          variant="ghost"
                          aria-label="Home"
                          my={5}
                          w="100%"
                        >Home</Button>
                    </NextChakraLink>
                    <NextChakraLink href="posts/pre-rendering">
                        <Button
                          as="a"
                          variant="ghost"
                          aria-label="Home"
                          my={5}
                          w="100%"
                        >Pre Rendering</Button>
                    </NextChakraLink>
                    <NextChakraLink href="/posts/ssg-ssr">
                        <Button
                          as="a"
                          variant="ghost"
                          aria-label="Home"
                          my={5}
                          w="100%"
                        >SSG-SSR</Button>
                    </NextChakraLink>
                </Flex>

                <Switch
                  margin-left="10px"
                  color="green"
                  isChecked={isDark}
                  onChange={toggleColorMode}
                />
            </Flex>
            

            
        </Flex>
    )
    // <IconButton 
        //     aria-label="Toggle Dark Switch"
        //     icon={colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>}
        //     onClick={toggleColorMode}
        // />
}