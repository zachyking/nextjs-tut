import '../styles/global.css'
import { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import { PageTransition } from 'next-page-transitions'
import Loader from '../components/Loader'
import theme from '../styles/theme'

const TIMEOUT: number = 400

export default function App({ Component, pageProps }: AppProps) {
  return <>
        <ChakraProvider theme={theme}>
        <PageTransition
          timeout={TIMEOUT}
          classNames="page-transition"
          loadingComponent={<Loader />}
          loadingDelay={200}
          loadingTimeout={{
            enter: TIMEOUT,
            exit: 0,
          }}
          loadingClassNames="loading-indicator"
        >
            <Component {...pageProps} />
        </PageTransition>
        </ChakraProvider>
        </>
}