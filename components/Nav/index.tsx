"use client";
import React, { useState } from "react";
import { navigation } from "@/data/navigation";
import Button from "../Button";
import { useSpring, animated } from "react-spring";

import { usePathname } from "next/navigation";

import styles from "./styles.module.scss";
import { useApp } from "@/context/AppContext";
import { Caption } from "../Texts";
import NavItem from "./components/NavItem";
import Hamburguer from "./components/Hamburguer";
import DataLayer from "@/utils/DataLayer";

const Nav: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);
  const {
    setBookingActive,
    bookingActive,
    device: { isMobile },
    modalActive
  } = useApp();
  const pathname = usePathname();

  let pathnameTitle = navigation.find((item) => item.href === pathname)?.title;

  if (pathnameTitle === "Faça seu evento") {
    pathnameTitle = "Evento";
  }

  // Menu opened in mobile
  const menuStyles = useSpring({
    from: {
      opacity: 0,
      y: -24,
      maxHeight: 0,
    },
    to: {
      opacity: menuActive && !bookingActive && !modalActive ? 1 : 0,
      y: menuActive && !bookingActive && !modalActive ? 0 : -24,
      maxHeight: menuActive && !bookingActive && !modalActive ? 1000 : 0,
    },
  });

  // Nav closed when booking is active
  const navStyles = useSpring({
    from: {
      opacity: 1,
      y: 0,
      maxHeight: 1000,
    },
    to: {
      opacity: bookingActive || modalActive ? 0 : 1,
      y: bookingActive || modalActive  ? -24 : 0,
      maxHeight: bookingActive || modalActive  ? 0 : 1000,
    },
  });

  return (
    <>
      <nav id="navbar" className={styles.nav_container}>
        {/* nav */}
        <animated.div className={styles.nav_menu} style={{ ...navStyles }}>
          <div className={`mobile ${styles.btns}`}>
            <Hamburguer onClick={() => setMenuActive(!menuActive)} />
            <Caption wrap={false} color="white">
              {pathnameTitle}
            </Caption>
          </div>

          {navigation.map((item, index) => (
            <NavItem
              className="desktop"
              item={item}
              index={index}
              key={index}
              hoverFunc={!!item.subMenu}
            />
          ))}

          <Button
            variant="brand-black"
            wrap={isMobile}
            onClick={() => {
              setBookingActive(true)
              DataLayer.clickEvent({ 
                element: "orcamento_click",
                elementCategory: "botao",
                pageSection: "nav",
                pageSubsection: "orcamento",
              });
            }}
            id="orcamento_click"
          >
            faça seu <b>orçamento</b>
          </Button>
        </animated.div>

        {/* nav mobile */}
        <animated.div
          className={`mobile ${styles.nav_menu_mobile}`}
          style={{
            ...(menuStyles as any),
          }}
        >
          {navigation.map((item, index) => (
            <NavItem
              key={index}
              item={item}
              index={index}
              hoverFunc={false}
              onClick={() => setMenuActive(false)}
            />
          ))}
        </animated.div>
      </nav>
    </>
  );
};

export default Nav;
