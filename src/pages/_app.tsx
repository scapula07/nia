import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Provider } from "@/components/ui/provider"
import Footer from "@/components/Footer"
import Layout from "@/components/Layout";


export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider>
        <RecoilRoot>  
                <Layout>
                    <Component {...pageProps} />
                </Layout>
                <Footer />
        </RecoilRoot>
    </Provider>

  )
}
