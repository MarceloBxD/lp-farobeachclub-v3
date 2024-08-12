import { Tokens } from "@/data/tokens"
import React from "react"
import ReactLoading from "react-loading"

export type LoadProps = {
  variant?:
    | "balls"
    | "bars"
    | "bubbles"
    | "cubes"
    | "cylon"
    | "spin"
    | "spinningBubbles"
    | "spokes"
  color?: string
  size?: string
}

const Load: React.FC<LoadProps> = ({
  variant = "spin",
  color = "primary",
  size = "20%",
}) => {
  const colorLoad =
    color === "primary"
      ? Tokens.colors.brand.beachclub
      : color === "secondary"
      ? Tokens.colors.brand.rooftop
      : color === "tertiary"
      ? Tokens.colors.brand.beachclub_rooftop
      : color

  return (
    <ReactLoading type={variant} color={colorLoad} height={size} width={size} />
  )
}

export default Load
