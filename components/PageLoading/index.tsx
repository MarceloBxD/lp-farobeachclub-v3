"use client"

import React, { useEffect, useState } from "react"
import Logo from "@/components/Logo"
import { usePathname } from "next/navigation"

interface LoadingProps {
  children: React.ReactNode
}

const PageLoading: React.FC<LoadingProps> = ({ children }) => {
  const [load, setLoad] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    const handleStart = () => {
      setLoad(true)
    }

    const handleComplete = () => {
      setLoad(false)
    }

    window.addEventListener("load", handleComplete)
    window.addEventListener("beforeunload", handleStart)

    return () => {
      window.removeEventListener("load", handleComplete)
      window.removeEventListener("beforeunload", handleStart)
    }
  }, [pathname])

  return load ? (
    <div
      style={{
        backgroundColor: "#000900",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "400px",
          position: "relative",
        }}
      >
        <Logo />
      </div>
    </div>
  ) : (
    children
  )
}

export default PageLoading
