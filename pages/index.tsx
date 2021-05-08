import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
// import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import { Flex, Stack, Button, useColorModeValue } from '@chakra-ui/react'
// import DarkModeSwitch from '../components/darkmodeswtich'
import NextChakraLink from '../components/NextChakraLink'
// import { PageTransition } from 'next-page-transitions'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  // const color = useColorModeValue("white", "gray.800")
  return (
    <Stack 
    as="main"
    align="center" 
    >
      <Flex 
        flexDirection="column"
      >
        <Flex
          direction="row"
          pt={4}
        >
          {/* <DarkModeSwitch/> */}
        </Flex> 
        <Layout home>
          <Head>
            <title>{siteTitle}</title>
          </Head>
        
        {/* <section className={utilStyles.headingMd}>
          <p>[Plain Self Introduction]</p>
          <br/>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <NextChakraLink href={`/posts/${id}`}>
                  <Button>{title}</Button>
                </NextChakraLink>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>

        </section> */}
        </Layout> 
      </Flex>
      
    </Stack>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}