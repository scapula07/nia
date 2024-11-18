import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Provider } from "@/components/ui/provider"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"



export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider>
        <RecoilRoot>  
                <Navbar />
                <Component {...pageProps} />
                <Footer />
        </RecoilRoot>
    </Provider>

  )
}
