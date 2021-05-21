import { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import React from "react"
import NextChakraLink from '../components/NextChakraLink'
import { SearchIcon } from '@chakra-ui/icons'
import {
  Button,
  Text,
  Flex,
  Heading,
  Stack,
  IconButton,
  InputGroup,
  Input,
  InputRightElement,
  Progress
} from "@chakra-ui/react"

export default function Sale( 
  saleParams: { 
    status: string
    iconFrom: string
    iconTo: string
}) {
    const [searchValue, handleSearchValChange] = useState<string>("")
    const [isSearchValid, validateSearchString] = useState<boolean>(true)

    const search = async () => {
      if(searchValue.length < 12 || !searchValue.startsWith('addr')){
        validateSearchString(false)
        console.log("1" + searchValue)
      }
      else{

        validateSearchString(true)
        console.log("2" + searchValue)
      }
    }
    useEffect(() => {
      const elem = document.body
      if (elem) {
        elem.addEventListener("keyup", ({key}) => {
        if (key === "Enter") {
          search()
        }
      })}
    }, []);

    return (
    <>
        <Layout home>
          <Head>
            <title>Cardano Sounds NFT Sale</title>
          </Head>

          <Stack
            spacing={2}
            mt={24}
            marginX="auto"
            w="80%"
            align="center"
          >
            <Text
              size="xl"
              textAlign="center"
            >
              Send 50ADA to: addr115659556363454rsdfgb363454rsd
            </Text>
            <Text
              size="md"
              fontWeight="light"
              color="red.50"
              textAlign="center"
            >
              Use Yoroi or Daedalus, do not send ADA from an exchange! Send the exact amount without additional tokens. 
            </Text>
            <Text
              as="h3"
              size="s"
              fontWeight="light"
              color="red.50"
              textAlign="center"
            >
              If you want to buy more NFTs, send multiple transactions with 50ADA.  
            </Text>
            <InputGroup  
            >
              <Input placeholder="Check status for txid" 
                id="searchInput"
                isInvalid={isSearchValid}
                onChange={ (param) => handleSearchValChange(param.target.value) }
              />
              <InputRightElement onClick={ search } children={<SearchIcon color="gray.500" />} />
           </InputGroup>
           <div dangerouslySetInnerHTML={{ __html: saleParams.iconFrom }} /> 

           <Progress size="xl" isIndeterminate />

           <div dangerouslySetInnerHTML={{ __html: saleParams.iconTo }} />             
          </Stack>

        </Layout>
    </>
  )
}