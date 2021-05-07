import { extendTheme } from "@chakra-ui/react"

const config: {initialColorMode: "light", useSystemColorMode: boolean} = {
    initialColorMode: "light",
    useSystemColorMode: false
  }

const fontWeights: { normal: number, medium: number, bold: number } = {
    normal: 300,
    medium:600,
    bold: 1000
}

  const theme = extendTheme({ config, fontWeights })
  export default theme