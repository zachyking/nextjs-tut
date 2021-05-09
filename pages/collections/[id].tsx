import Layout from '../../components/layout'
import { getAllCollectionsIds, getCollectionData } from '../../lib/collections'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'
import {
    Image,
    Stack,
    Box,
    Flex
  } from "@chakra-ui/react"


export default function Collection({
  collectionData
}: {
    collectionData: {
    title: string
    date: string
    image: string
    contentHtml: string
  }
}) {
  return (
    <Layout>

      <Head>
        <title>{collectionData.title}</title>
      </Head>

      <Flex
        align="center"
        justify="center"
        // // justify={{ base: "center", md: "space-around", xl: "space-between" }}
        // // direction={{ base: "column-reverse", md: "row" }}
        direction="column"
        minH="70vh"
        px={{ base: 0, md: 6 }}
        mb={16}
      >
          
         <Box w="100%" mt={{ base: 4, md: 0 }} align="center" >
          <Image src="/images/examplePic.png" size="100%" rounded="1rem" shadow="2xl" />
        </Box>
        <Stack
          spacing={4}
          // w={{ base: "90%", md: "90%" }}
          w="90%"
          align={["center", "center", "flex-start", "flex-start"]}
        >
          <h1 className={utilStyles.headingLg}>{collectionData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={collectionData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: collectionData.contentHtml }} />
        </Stack>

      </Flex>

    </Layout>
        
    
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllCollectionsIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const collectionData = await getCollectionData(params.id as string)
  return {
    props: {
        collectionData
    }
  }
}


  {/*//   <Flex
    //     align="center"
    //     justify={{ base: "center", md: "space-around", xl: "space-between" }}
    //     direction={{ base: "column-reverse", md: "row" }}
    //     minH="70vh"
    //     px={8}
    //     mb={16}
    //   >
    //     <Head>
    //       <title>{collectionData.title}</title>
    //     </Head>
    //     <Box w={{ base: "100%", sm: "100%", md: "100%" }} mt={{ base: 4, md: 0 }}>
    //         <Image src="/images/examplePic.png" size="100%" rounded="1rem" shadow="2xl" />
    //       </Box>
    //      <Flex
    //       justify={{ base: "center", md: "space-around", xl: "space-between" }}
    //       direction={{ base: "column-reverse", md: "row" }}
    //       minH="70vh"
    //       mb={16}
    //     > 
    //     <Flex>
    //       <article>
    //         <h1 className={utilStyles.headingXl}>{collectionData.title}</h1>
    //         <div className={utilStyles.lightText}>
    //           <Date dateString={collectionData.date} />
    //         </div>
    //         <div dangerouslySetInnerHTML={{ __html: collectionData.contentHtml }} />
    //       </article>
    //     </Flex>
    //      </Flex> 
    //   </Flex>
    // </Layout>*/}