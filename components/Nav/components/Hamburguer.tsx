import React from "react"
import styles from "../styles.module.scss"
import MenuIcon from "@/assets/icons/MenuIcon"

interface HamburguerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Hamburguer: React.FC<HamburguerProps> = ({ ...props }) => {
  return (
    <div {...props} className={`${styles.hamburger_div}`} >
      <MenuIcon />
    </div>
  )
}

export default Hamburguer
