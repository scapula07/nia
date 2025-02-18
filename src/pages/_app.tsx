import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Provider } from "@/components/ui/provider"
import Footer from "@/components/footer"
import Layout from "@/components/Layout";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";
import AuthGuard from "../components/Authguard"

NProgress.configure({ showSpinner: false});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider>
        <RecoilRoot>  
               <AuthGuard>
                    <Layout>
                          <Component {...pageProps} />
                    </Layout>
               </AuthGuard>
         
        </RecoilRoot>
    </Provider>

  )
}
