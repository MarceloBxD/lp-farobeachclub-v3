import { Booking } from "@/components";
import { eventContent } from "@/data/contents/home";
import {
  Banner,
  Clientes,
  Contato,
  Midia,
  Programacao,
  TitleTextSwiper,
} from "@/sections";
import { getEntries } from "@/services/useContentfulData";
import {
  treatContent,
  treatCustomers,
  treatHomeBanner,
} from "@/services/useTreatedData";
import { ContentProps, CustomerProps } from "@/types/content";
import Head from "next/head";
import { MapEl } from "@/components/Map";
import Offering from "@/sections/Offering";
import { cloudinary } from "@/services/useCloudinary";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "@/lib/gtagHelper";
import Faq from "@/sections/Faq";

type HomeProps = {
  homeContent: {
    images: {
      alt: string;
      src: string;
    }[];
  }[];
  faq: any[];
  customers: CustomerProps[];
  homeBanner: {
    mobile: string[];
    desktop: string[];
  };
  events: ContentProps[];
  PORTAL_ID: string;
  FORM_ID: string;
  PHONE_NUMBER: string;
  MAPS_API_KEY: string;
  midia: ContentProps[];
};

function Home({
  homeBanner,
  homeContent,
  events,
  FORM_ID,
  customers,
  PORTAL_ID,
  PHONE_NUMBER,
  midia,
  MAPS_API_KEY,
  faq,
}: HomeProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      gtag.pageview("Home");
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const faqData = faq.map((faq) => {
    return {
      question: faq.fields.pergunta,
      answer: faq.fields.resposta,
    };
  });

  const getEventDisclosed = (events: ContentProps[]) => {
    const event = events.find((event) => event.disclosure);
    return event;
  };

  return (
    <>
      <Head>
        <title>
          Faro Beach Club | Espaços Versáteis para Eventos Corporativos
        </title>
      </Head>
      <Booking formId={FORM_ID} portalId={PORTAL_ID} phone={PHONE_NUMBER} />

      <Banner content={homeBanner} event={getEventDisclosed(events)} />

      <TitleTextSwiper
        texts={eventContent[0].texts}
        button={eventContent[0].button}
        // swiperdata={homeBanner[0]?.images || []}
        anchor={eventContent[0].anchor}
      />
      {/* <TitleTextSwiper
        texts={eventContent[1].texts}
        button={eventContent[1].button}
        swiperdata={homeContent[1]?.images || []}
        anchor={eventContent[1].anchor}
        inverse
      />
      // novo comentário

      <TitleTextSwiper
        texts={eventContent[2].texts}
        button={eventContent[2].button}
        swiperdata={homeContent[2]?.images || []}
        anchor={eventContent[2].anchor}
      /> */}

      <Offering />

      <Midia
        anchorId="eventos-privados"
        category="EVENTOS REALIZADOS"
        content={midia?.filter((item) => {
          return item.category === "EVENTOS REALIZADOS";
        })}
      />

      {/* <Midia
        category="SHOWS REALIZADOS"
        content={midia?.filter((item) => {
          return item.category === "SHOWS REALIZADOS";
        })}
      /> */}
{/* 
      <Midia
        category="ASSESSORIA DE IMPRENSA"
        content={midia?.filter((item) => {
          return item.category === "ASSESSORIA DE IMPRENSA";
        })}
      /> */}

      

      <Faq faq={faqData} />
      <Clientes customers={customers} />

      <Contato phone={PHONE_NUMBER}>
        <MapEl apiKey={MAPS_API_KEY} />
      </Contato>
    </>
  );
}

export const getStaticProps = async () => {
  const [
    homeCarrossel1,
    homeCarrossel2,
    homeCarrossel3,
    allEvents,
    homeBanner,
    faq,
  ] = await Promise.all([
    getEntries({
      contentType: "homeCarrossel1",
    }),
    getEntries({
      contentType: "homeCarrossel2",
    }),
    getEntries({
      contentType: "homeCarrossel3",
    }),
    getEntries({
      contentType: "event",
    }),
    getEntries({
      contentType: "homeBanner",
    }),
    getEntries({
      contentType: "faq",
    }),
  ]);

  const [allMidia, allCustomers] = await Promise.all([
    getEntries({ contentType: "event" }),
    getEntries({ contentType: "cliente" }),
  ]);

  const customers = treatCustomers(allCustomers);
  const midia = treatContent(allMidia).filter((item) => {
    return item.type === "Midia";
  });

  const video = cloudinary.video_url("events_video");

  const videoHttps = video.replace("http:", "https:");

  const treatedHomeBanner = (homeBanner: any) => {
    const mobileUrls = homeBanner[0].fields.mobile;
    const desktopUrls = homeBanner[0].fields.desktop;

    return {
      mobile: mobileUrls,
      desktop: desktopUrls,
    };
  };

  const treatedImages = [
    treatHomeBanner(homeCarrossel1),
    treatHomeBanner(homeCarrossel2),
    treatHomeBanner(homeCarrossel3),
  ];

  const treatedHomeBannerUrls = treatedHomeBanner(homeBanner);

  console.log(treatedHomeBannerUrls);

  const events = treatContent(allEvents).filter(
    (event) => event.type === "Programação"
  );

  const MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY as string;
  const PORTAL_ID = process.env.PORTAL_ID as string;
  const FORM_ID = process.env.FORM_ID as string;
  const PHONE_NUMBER = process.env.PHONE_NUMBER as string;

  return {
    props: {
      events,
      homeContent: treatedImages,
      homeBanner: treatedHomeBannerUrls,
      PORTAL_ID,
      videoUrl: videoHttps,
      midia,
      customers,
      FORM_ID,
      PHONE_NUMBER,
      MAPS_API_KEY,
      faq,
    },
    revalidate: 60 * 5, // 5 minute
  };
};

export default Home;
