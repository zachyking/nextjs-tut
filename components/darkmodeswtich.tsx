import { useColorMode, Switch, Flex, Button, IconButton } from '@chakra-ui/react'
import { useState } from 'react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextChakraLink from '../components/NextChakraLink'
// import { MoonIcon, SunIcon } from '@chakra-ui/icons'


export default function DarkModeSwitch() {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    const [display, changeDisplay] = useState('none')
    return (
        <Flex
          flexDir="column"
          align="center"
        >
            <Flex
              pos="fixed"
              top="1rem"
              right="1rem"
              align="center"
            >
                <Flex 
                  display={['none', 'none', 'flex', 'flex']}
                >
                    <NextChakraLink href="/">
                        <Button
                          variant="ghost"
                          aria-label="Home"
                          my={5}
                          w="100%"
                        >Home</Button>
                    </NextChakraLink>
                    <NextChakraLink href="/posts/pre-rendering">
                        <Button
                          variant="ghost"
                          aria-label="Home"
                          my={5}
                          w="100%"
                        >Pre Rendering</Button>
                    </NextChakraLink>
                    <NextChakraLink href="/posts/ssg-ssr">
                        <Button
                          variant="ghost"
                          aria-label="Home"
                          my={5}
                          w="100%"
                        >SSG-SSR</Button>
                    </NextChakraLink>
                </Flex>

                <IconButton 
                  aria-label="Open Menu"
                  variant="ghost"
                  size="lg"
                  icon={isDark ? (
                    <img src="/cardano-logo.svg" />
                 ) : (
                        <img src="/cardano-logo-light.svg" />
                    )
                }
                  display={['flex', 'flex', 'none', 'none']}
                  onClick={ () => changeDisplay('flex')}
                />

                <Switch
                  ml={2}
                  color="green"
                  isChecked={isDark}
                  onChange={toggleColorMode}
                />
            </Flex>
            
            <Flex
              w="100vw"
              bgColor={isDark ? ("gray.900") : ("gray.50")}
              zIndex={20}
              h="100vh"
              pos="fixed"
              top="0"
              left="0"
              display={display}
              overflowY="auto"
              flexDir="column"
            >
                <Flex justify="flex-end"
                >
                    <IconButton
                      variant="ghost"
                      mt={2}
                      mr={2} 
                      aria-label="Close Menu"
                      size="lg"
                      icon={
                          <CloseIcon />
                      }
                      onClick={ () => changeDisplay('none')}
                    />
                </Flex>
                <Flex
                  flexDir="column"
                  align="center"
                >
                    <NextChakraLink href="/">
                        <Button
                          variant="ghost"
                          aria-label="Home"
                          my={5}
                          w="100%"
                        >Home</Button>
                    </NextChakraLink>
                    <NextChakraLink href="/posts/pre-rendering">
                        <Button
                          variant="ghost"
                          aria-label="Home"
                          my={5}
                          w="100%"
                        >Pre Rendering</Button>
                    </NextChakraLink>
                    <NextChakraLink href="/posts/ssg-ssr">
                        <Button
                          variant="ghost"
                          aria-label="Home"
                          my={5}
                          w="100%"
                        >SSG-SSR</Button>
                    </NextChakraLink>

                </Flex>
                
            </Flex>
            
        </Flex>
    )
    // <IconButton 
        //     aria-label="Toggle Dark Switch"
        //     icon={colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>}
        //     onClick={toggleColorMode}
        // />
}