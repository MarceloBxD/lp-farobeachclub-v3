import { Tokens } from "@/data/tokens"

export const button_theme = {
  brand: {
    bgColor: Tokens.colors.brand.beachclub_rooftop,
    borderColor: Tokens.colors.brand.beachclub_rooftop,
    color: "#fff",
    hover: {
      bgColor: "transparent",
      color: Tokens.colors.brand.beachclub_rooftop,
      borderColor: Tokens.colors.brand.beachclub_rooftop,
    },
  },
  "brand-white": {
    bgColor: "#fff",
    borderColor: Tokens.colors.brand.beachclub_rooftop,
    color: Tokens.colors.brand.beachclub_rooftop,
    hover: {
      bgColor: Tokens.colors.brand.beachclub_rooftop,
      borderColor: Tokens.colors.brand.beachclub_rooftop,
      color: "#fff",
    },
  },
  "brand-black": {
    bgColor: Tokens.colors.brand.beachclub_rooftop,
    borderColor: Tokens.colors.brand.beachclub_rooftop,
    color: "#000",
    hover: {
      bgColor: "transparent",
      color: "#fff",
      borderColor: "#fff",
    },
  },
  "black-white": {
    bgColor: "#fff",
    borderColor: "transparent",
    color: "#000",
    hover: {
      bgColor: "transparent",
      color: "#fff",
      borderColor: "#fff",
    },
  },
  "white-black": {
    bgColor: "transparent",
    borderColor: "#fff",
    color: "#fff",
    hover: {
      bgColor: "#fff",
      color: "#000",
      borderColor: "#000",
    },
  },
  "terms-button": {
    bgColor: "rgba(0, 0, 0, 0.05)",
    borderColor: "transparent",
    color: "#fff",
    hover: {
      bgColor: "transparent",
      color: "#fff",
      borderColor: "#000",
    },
  },
  "whatsapp-button": {
    bgColor: "#fff",
    borderColor: "transparent",
    color: "#000",
    hover: {
      bgColor: "rgba(0, 0, 0, 0.05)",
      color: "#000",
      borderColor: "transparent",
    },
  },
}
