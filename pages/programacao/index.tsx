import Logo from "@/components/Logo";
import {
  Clientes,
  Contato,
  Midia,
  Programacao,
  TitleTextSwiper,
} from "@/sections";
import styles from "./styles.module.scss";
import { Description } from "@/components/Texts";
import { getEntries } from "@/services/useContentfulData";
import { treatContent, treatCustomers } from "@/services/useTreatedData";
import { ContentProps, CustomerProps } from "@/types/content";
import Head from "next/head";
import { MapEl } from "@/components/Map";
import { Booking } from "@/components";
import { cloudinary } from "@/services/useCloudinary";

type PageProps = {
  images: {
    alt: string;
    src: string;
  }[];
  midia: ContentProps[];
  customers: CustomerProps[];
  PORTAL_ID: string;
  FORM_ID: string;
  PHONE_NUMBER: string;
  events: ContentProps[];
  videoUrl: string;
  MAPS_API_KEY: string;
};

function Page({
  midia,
  FORM_ID,
  PORTAL_ID,
  events,
  PHONE_NUMBER,
  videoUrl,
  customers,
  MAPS_API_KEY,
}: PageProps) {
  return (
    <>
      <Head>
        <title>Faro Beach Club | Confira Nossa Programação</title>
      </Head>
      <Booking formId={FORM_ID} portalId={PORTAL_ID} />
      <div className={styles.container}>
        <div className={styles.logo_wrapper}>
          <Logo color="green" />
        </div>

        <Programacao
          style={{
            paddingTop: 120,
            marginTop: 0,
          }}
          events={events}
        />

        <Midia
          category="SHOWS REALIZADOS"
          content={midia?.filter((item) => {
            return item.category === "SHOWS REALIZADOS";
          })}
        />
        <Clientes customers={customers} />

        <Contato
          phone={PHONE_NUMBER}
          style={{
            marginTop: 0,
            paddingTop: 0,
          }}
        >
          <MapEl apiKey={MAPS_API_KEY} />
        </Contato>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const [allEvents] = await Promise.all([
    getEntries({
      contentType: "event",
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

  const MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY as string;

  const PHONE_NUMBER = process.env.PHONE_NUMBER as string;

  const events = treatContent(allEvents).filter(
    (event) => event.type === "Programação"
  );

  return {
    props: {
      events,
      customers,
      midia,
      PHONE_NUMBER,
      videoUrl: videoHttps,
      MAPS_API_KEY,
    },
    revalidate: 60 * 5, // 5 minutes
  };
};

export default Page;
