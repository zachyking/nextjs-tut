import React from "react"
import { Flex, Box, Image, InputGroup, Input, InputRightElement, useToast } from "@chakra-ui/react"
import { CopyIcon } from "@chakra-ui/icons"

export default function Address( { display } : { display?: "flex" | "none" | Array <"flex" | "none">}   ) {

    const toast = useToast()

    if(typeof(display) === "undefined") {
        display = "flex"
    }
    
    return(
        <Flex 
            direction="column" 
            display={ display } 
            w={["100%", "100%", "30vw"]} 
        >
            <Box >
                <Image 
                    src="/images/qr.png" 
                    ml={["5vw", "5vw", "unset"]} 
                    w={["70vw", "70vw", "20vw"]} 
                    h={["70vw", "70vw", "20vw"]}
                />
            </Box>
            <InputGroup 
                mt={["5vh", "5vh", "5vh"]}
            >
                <Input 
                    placeholder="addr115659556363454rsdfgb363454rsd9556363454rsdfgb363454r" 
                    id="address"
                    isDisabled
                />
                <InputRightElement children=
                    {
                        <CopyIcon onClick={() => {
                                navigator.clipboard.writeText("addr115659556363454rsdfgb363454rsd9556363454rsdfgb363454r")
                                toast({
                                    title: "Copied",
                                    status: "success",
                                    duration: 1500,
                                    isClosable: true
                                })
                            }
                        } 
                        color="gray.600" />
                    } 
                />
            </InputGroup>
        </Flex>
    )
}