"use client"

import React, { useEffect } from "react"
import { useApp } from "@/context/AppContext"
import styles from "./styles.module.scss"

interface CheckMarginProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

const CheckMargin: React.FC<CheckMarginProps> = ({ children }) => {
  const { setPageMargin } = useApp()
  const divRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current && setPageMargin) {
        setPageMargin(divRef.current.getBoundingClientRect().left)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [divRef, setPageMargin])

  return (
    <div className={styles.container}>
      <div className={styles.content} ref={divRef}>
        {children}
      </div>
    </div>
  )
}

export default CheckMargin
