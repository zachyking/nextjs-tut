import { useColorMode, Switch, Flex, Button, IconButton } from '@chakra-ui/react'
import { useState } from 'react'
import { CloseIcon } from '@chakra-ui/icons'
import NextChakraLink from './NextChakraLink'
import mainStyles from './layout.module.css'

// import { MoonIcon, SunIcon } from '@chakra-ui/icons'


export default function DarkModeSwitch() {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    const [display, changeDisplay] = useState('none')
    return (
        <Flex
          flexDir="column"
          align="center"
          margin="0"
          
        >
            <Flex
              pos="fixed"
              align="center"
              w="100vw"
              top="0px"
              left="0px"
              right="0px"
              bgColor={isDark ? ("gray.900") : ("gray.50")}
              as="nav"
              justify="center"
              wrap="wrap"

            >
                <Flex
                  align="center"
                  w="60em"
                >
                  <Flex 
                    justify={["center", "space-between", "flex-end", "flex-end"]}
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
                      <NextChakraLink href="/collections/mysticwave">
                          <Button
                            variant="ghost"
                            aria-label="Home"
                            my={5}
                            w="100%"
                          >Mystic waves</Button>
                      </NextChakraLink>
                      <NextChakraLink href="/sale" className={mainStyles.disableEvents}>
                        <Flex
                          align="center"
                          display="flex"
                        >
                            <Button
                              disabled
                              variant="ghost"
                              aria-label="Home"
                              my={5}
                              w="100%"
                            ><h1>Sale</h1></Button>
                            <h2 className={mainStyles.rotate} >
                              Coming Soon!
                            </h2>
                          </Flex>
                      </NextChakraLink>
                      {/* <NextChakraLink href="/marketplace" className={mainStyles.disableEvents}>
                        <Flex
                          align="center"
                          display="flex"
                        >
                            <Button
                              disabled
                              variant="ghost"
                              aria-label="Home"
                              my={5}
                              w="100%"
                            >Marketplace</Button>
                            <h1 className={mainStyles.rotate} >
                              Coming Soon!
                            </h1>
                          </Flex>
                      </NextChakraLink> */}
                  </Flex>

                  <IconButton 
                    margin="0.25em 0.5em"
                    aria-label="Open Menu"
                    variant="ghost"
                    size="lg"
                    icon={isDark ? (
                      <img src="/cardano-logo-light.svg" />
                  ) : (
                          <img src="/cardano-logo.svg" />
                      )
                  }
                    display={['flex', 'flex', 'none', 'none']}
                    onClick={ () => changeDisplay('flex')}
                  />
                  <Flex right={0}>
                    <Switch
                      margin="0.25em 0.5em"
                      color="blue"
                      isChecked={isDark}
                      onChange={toggleColorMode}
                    />
                  </Flex>
              </Flex>
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
              as="nav"
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
                          onClick={ () => changeDisplay('none')}
                        >Home</Button>
                    </NextChakraLink>
                    <NextChakraLink href="/posts/pre-rendering">
                        <Button
                          variant="ghost"
                          aria-label="Home"
                          my={5}
                          w="100%"
                          onClick={ () => changeDisplay('none')}
                        >Pre Rendering</Button>
                    </NextChakraLink>
                    <NextChakraLink href="/posts/ssg-ssr">
                        <Button
                          variant="ghost"
                          aria-label="Home"
                          my={5}
                          w="100%"
                          onClick={ () => changeDisplay('none')}
                        >SSG-SSR</Button>
                    </NextChakraLink>
                    <NextChakraLink href="/sale" className={mainStyles.disableEvents}>
                      <Flex
                        align="center"
                        display="flex"
                      >
                        <Button
                            disabled
                            variant="ghost"
                            aria-label="Home"
                            my={5}
                            w="100%"
                            onClick={ () => changeDisplay('none')}
                        >Sale</Button>
                        <h2 className={mainStyles.rotate} >
                          Coming Soon!
                        </h2>
                      </Flex>
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