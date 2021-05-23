import { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import React from "react"
import NextChakraLink from '../components/NextChakraLink'
import {
  Button,
  Flex,
  Heading,
  Stack,
  IconButton
} from "@chakra-ui/react"



export default function Transaction(id: string) {

    const [data,setData] = useState<string>(""); 

    useEffect(() => {
        // An instance of EventSource by passing the events URL
        const eventSource = new EventSource(`/api/sale/${id}`);
        // A function to parse and update the data state
        const updateData = (messageEvent: MessageEvent) => {
            console.log('log')
            setData(messageEvent.data);
            if (messageEvent.data === "finished" || messageEvent.data === "error") {
                eventSource.close();
            }
        };

        // eventSource now listening to all the events named 'message'
        eventSource.addEventListener('message', updateData);
        // Unsubscribing to the event stream when the component is unmounted
        return () => eventSource.close();
    }, []);
  
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
              w="80%"
              align="center"
              margin="auto"
            >

                <Heading
                    as="h1"
                    size="xl"
                    textAlign={["center", "center", "left", "left"]}
                >
                    Cardano Sounds
                </Heading>
            
            </Stack>

        </Flex>
    </>
  )
}