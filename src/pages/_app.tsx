import "@/styles/globals.css";
import type { AppProps } from "next/app";
import theme from '../lib/theme'
import { RecoilRoot } from "recoil";
import { ChakraProvider, 
         ColorModeProvider, 
         CSSReset } from "@chakra-ui/react";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
     <ColorModeProvider>
      <CSSReset />
        <RecoilRoot>  
            <Component {...pageProps} />
         </RecoilRoot>
    </ColorModeProvider>
  </ChakraProvider>
  )
}
