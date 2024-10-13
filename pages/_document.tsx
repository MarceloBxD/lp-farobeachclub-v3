import Analytics from "@/components/Analytics"
import axios from "axios"
import { Metadata } from "next"
import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Faro Beach Club",
  description: "",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000900",
  appleWebApp: {
    statusBarStyle: "black-translucent",
    capable: true,
    title: "Faro Beach Club",
  },
  authors: [
    {
      name: "Majors Solutions",
      url: "https://www.majorssolutions.com.br",
    },
    {
      name: "Moove",
    },
  ],
  applicationName: "Faro Beach Club",
}

type Props = {
  GTM_ID: string
  GOOGLE_ANALYTICS_ID: string
  SMART_TARGET_ID: string
}

function Document({ SMART_TARGET_ID }: Props) {
  return (
    <Html lang="pt-br">
      <Head>
        <meta name="theme-color" content="#000900" />
        <meta name="application-name" content="Faro Beach Club" />
        <meta
          name="description"
          content="Reserve seu evento no Faro Beach Club: vista inesquecível, alta gastronomia e staff completo para eventos corporativos, aniversários e casamentos!"
        />
        <meta
          name="keywords"
          content="Faro, Faro Beach, Faro Beach Club, Faro Rooftop, Casa de eventos, Casa de eventos rj, Réveillon rio de janeiro, Réveillon rio, Réveillon rio de janeiro, festa de réveillon rio, festa de réveillon, casa de eventos corporativos, beach club rio de janeiro, casa noturna rj, reveillon rj, festa reveillon rj, evento corporativo rio de janeiro, evento corporativo rj, leblon, Zona Sul Rj, Por do sol rj, Beach club rj, Beach club rio de janeiro, Rooftop rj, rooftop rio, Beach club rio, beach clubs rio de janeiro, Espaço para eventos rj, Espaço para eventos rio de janeiro, Av Niemeyer 101, Av Niemeyer, Rio beach club, Ballroom, Casa do alto, Costa brava clube, Mansão Alvite, Golfe Clube, Festa de xv rj, Festa de 15 anos, Festa de 15 anos rj, Festa de 15 anos rio de janeiro, Aniversario 15 anos, Tema de aniversário 15 anos, Locação festa de 15 anos rj, Espaço festa de 15 rj, Festa de debutante rj, Local festa de 15 rj, Casamento rj, Casamento rio de janeiro, Locação casamento rj, Espaço casamento rj, Espaço casamento, Lugar para casar rj, Lembrancinhas casamentos, Cenário casamento rj, Local casamento rj, Salões de festa, Salões de festa rj, Casa de festa, Casa de festa rj Leblon, Aniversário rj, Espaço para festas, Locação aniversário, locação aniversário rj, Formatura, Formatura rj, Festa de formatura, Locação formatura rj, Formatura rio de janeiro, Espaço formatura, Eventos corporativos rj, Festa corporativa, Evento corporativo rj, Locação evento rj, Alugar espaço rj, Eventos corporativos rio de janeiro, Locação evento corporativo rj, Festa para minha empresa, Espaço evento corporativo rj, Espaço evento corporativo rio de janeiro, Alugar espaço evento corporativo, Espaço para eventos corporativos no Leblon, Locação de local para workshops no Rio de Janeiro, Espaço nobre para convenções Rio, Locais para festas de empresa Leblon ,Locais para festas de empresa Rio de Janeiro, Eventos corporativos alto padrão Rio de Janeiro, Faro Beach Club eventos corporativos, Espaço para treinamentos no Leblon, Aluguel de espaço para eventos Rio de Janeiro, Espaço para festas de final de ano corporativas, Convenções e workshops no Leblon, Espaços de evento, Espaços de festas que cabem 400 pessoas, Espaços de festas que cabem 500 pessoas, Espaços de festas que cabem 1000 pessoas, Espaços de festas que cabem 1500 pessoas, Espaços de festas que cabem 2000 pessoas, Espaços de eventos que cabem 500 pessoas, Espaços de eventos que cabem 1000 pessoas, Espaços de eventos que cabem 2000 pessoas"
        />

        <meta name="robots" content="index, follow" />

        <meta name="og:title" content="Faro Beach Club" />
        <meta
          name="og:description"
          content="Reserve seu evento no Faro Beach Club: vista inesquecível, alta gastronomia e staff completo para eventos corporativos, aniversários e muito mais!"
        />
        <meta name="og:image" content="https://farobeachclub.com.br/logo.png" />
        <meta name="og:url" content="https://farobeachclub.com.br" />
        <meta name="og:site_name" content="Faro Beach Club" />
        <meta name="og:locale" content="pt_BR" />
        <meta name="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Faro Beach Club" />
        <meta
          name="twitter:description"
          content="Vista inesquecível, Alta gastronomia e Staff completo para eventos corporativos, aniversários, casamentos e muito mais! Reserve seu evento no Faro Beach Club"
        />
        <meta
          name="twitter:image"
          content="https://farobeachclub.com.br/logo.png"
        />

        <meta name="author" content="Majors Solutions" />
        <meta name="author" content="Moove" />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Faro Beach Club" />
        <meta name="application-name" content="Faro Beach Club" />
        <link rel="apple-touch-icon" href="/logo.png" />

        <link rel="icon" href="/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          id="smartarget-script"
          type="text/javascript"
          src={"https://smartarget.online/loader.js?u=" + SMART_TARGET_ID}
        />
        <Script src="https://player.vimeo.com/api/player.js" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7264556982952268"
          crossOrigin="anonymous"
        />
      </body>
    </Html>
  )
}

export default Document

export async function getStaticProps() {
  const SMART_TARGET_ID = process.env.SMARTARGET_API_KEY as string
  return {
    props: {
      SMART_TARGET_ID,
    },
  }
}
