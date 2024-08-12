"use client"

import React, { useEffect, useState } from "react"
import { animated, useSpring } from "react-spring"
import styles from "./styles.module.scss"
import { Caption } from "../Texts"
import { Button } from ".."
import { useApp } from "@/context/AppContext"
import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper"

const Terms: React.FC = () => {
  const { bookingActive } = useApp()
  const [cookieConsent, setCookieConsent] = useState(false)
  const [termsActive, setTermsActive] = useState(false)

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null)

    if (storedCookieConsent !== null)
        setTermsActive(false)
      
    setCookieConsent(storedCookieConsent)
  }, [setCookieConsent])

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied"

    if(window.gtag)
    window.gtag("consent", "update", {
      analytics_storage: newValue,
    })

    setLocalStorage("cookie_consent", cookieConsent)
    setTermsActive(false)
  }, [cookieConsent])

  const cookieStatus = (bool: boolean) => {
    setCookieConsent(bool)
  }

  const [scrollOpacity, setScrollOpacity] = useState(1)

  const animateTerms = useSpring({
    from: {
      opacity: 0,
      zIndex: -1,
    },
    to: {
      opacity: termsActive && !bookingActive ? scrollOpacity : 0,
      zIndex: termsActive && !bookingActive ? 9999999 : -1,
    },
  })

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      const newOpacity = isScrolled ? 1 : 0.3

      setScrollOpacity(newOpacity)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <animated.div
      className={styles.container}
      onMouseEnter={() => setScrollOpacity(1)}
      onMouseLeave={() => window.scrollY > 0 || setScrollOpacity(0.3)}
      onClick={() => setScrollOpacity(1)}
      style={{
        ...(animateTerms as any),
      }}
    >
      <Caption color="white" wrap>
        Este site usa cookies para melhorar sua experiência.
      </Caption>
      <div className={styles.buttons_box}>
        {[
          {
            id: 0,
            title: "Aceitar",
            onClick: () => cookieStatus(true),
          },
          {
            id: 1,
            title: "Recusar",
            onClick: () => cookieStatus(false),
          },
        ].map((item) => (
          <Button key={item.id} onClick={item.onClick} variant="terms-button">
            {item.title}
          </Button>
        ))}
      </div>
    </animated.div>
  )
}

export default Terms
