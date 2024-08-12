import { HubspotProvider } from "next-hubspot";
import { Nav } from "@/components";
import "@/styles/globals.css";
import "@/styles/swiper.css";
import "react-toastify/dist/ReactToastify.css";
import Terms from "@/components/Terms";
import { AppProvider } from "@/context/AppContext";
import { Footer } from "@/sections/Footer";
import CheckMargin from "@/components/CheckMargin";
import { Bounce, ToastContainer } from "react-toastify";
import Modal from "@/components/Modal";
import PageLoading from "@/components/PageLoading";
import { AppProps } from "next/app";
import Analytics from "@/components/Analytics";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageLoading>
      <HubspotProvider>
        <AppProvider>
          <Nav />
          <Terms />
          <Modal />
          <CheckMargin />
          <Component {...pageProps} />
          <Footer />
          <ToastContainer
            limit={2}
            draggable={false}
            pauseOnHover={false}
            transition={Bounce}
          />
          <Analytics/>
        </AppProvider>
      </HubspotProvider>
    </PageLoading>
  );
}
