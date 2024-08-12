import PinIcon from "@/assets/icons/PinIcon"
import { Tokens } from "@/data/tokens"
import React from "react"

import styles from "../styles.module.scss"

export const Fixed = () => {
  return (
    <div
      className={styles.cardContent}
      style={{
        color: Tokens.colors.neutral.gray_light,
      }}
    >
      <PinIcon />
    </div>
  )
}
