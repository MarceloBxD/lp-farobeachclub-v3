import localFont from "next/font/local"
import { Montserrat } from "next/font/google"

export const montserrat = Montserrat({
  subsets: ["latin-ext"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const terminaTest = localFont({
  src: [
    {
      path: "../utils/fonts/TerminaTest-Thin.woff",
      weight: "100",
    },
    {
      path: "../utils/fonts/TerminaTest-ExtraLight.woff",
      weight: "200",
    },
    {
      path: "../utils/fonts/TerminaTest-Light.woff",
      weight: "300",
    },
    {
      path: "../utils/fonts/TerminaTest-Regular.woff",
      weight: "400",
    },
    {
      path: "../utils/fonts/TerminaTest-Medium.woff",
      weight: "500",
    },
    {
      path: "../utils/fonts/TerminaTest-Demi.woff",
      weight: "600",
    },
    {
      path: "../utils/fonts/TerminaTest-Bold.woff",
      weight: "700",
    },
    {
      path: "../utils/fonts/TerminaTest-Heavy.woff",
      weight: "800",
    },
    {
      path: "../utils/fonts/TerminaTest-Black.woff",
      weight: "900",
    },
  ],
  display: "swap",
})
