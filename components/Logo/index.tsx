import React from "react"
import Image from "next/legacy/image"
interface LogoProps {
  color?: string
}

const Logo: React.FC<LogoProps> = ({ color = "white"}) => {
  const logoSrc =
    color === "white"
      ? "/faro-logo-branca.png"
      : color === "black"
      ? "/faro-logo-preta.png"
      : "/faro-logo-azul.png"
  return (
      <Image
        src={logoSrc}
        alt="Faro Beach Club"
        layout="fill"
      />
  )
}

export default Logo
