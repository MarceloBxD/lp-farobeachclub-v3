import { StaticImageData } from "next/legacy/image"
import React from "react"
import { usePathname } from "next/navigation"
import { Description } from "../../Texts"
import styles from "../styles.module.scss"
import DataLayer from "@/utils/DataLayer"

interface NavItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  item: {
    title: string
    logo?: {
      src: StaticImageData
      alt: string
    }
    href: string
  }
  index: number
  hoverFunc?: boolean
}

const NavItem: React.FC<NavItemProps> = ({
  className,
  item,
  index,
  hoverFunc,
  ...props
}) => {
  const pathname = usePathname()
  const isPath = pathname === item.href
  
  const DataLayerSend = () => {
    DataLayer.clickEvent({
      element: item.title,
      elementCategory: "menu",
      pageSection: "header",
      pageSubsection: "menu",
      path: item.href,
      selectedValue: item.title,
    })
  }

  return (
    <a
      {...props}
      href={item.href}
      key={index}
      className={`${styles.link} ${className}`}
      onClick={DataLayerSend}
      style={{
        backgroundColor: isPath ? "rgba(255,255,255,0.1)" : "transparent",
      }}
    >
      <Description wrap={false} color={"#fff"}>
        {item.title}
      </Description>
    </a>
  )
}

export default NavItem
