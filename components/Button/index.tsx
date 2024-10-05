"use client";

import React, { useRef } from "react";
import { Description } from "../Texts";
import styles from "./styles.module.scss";
import { animated, useSpring } from "react-spring";
import { button_theme } from "./data_button";
import Load, { LoadProps } from "../Load";
import { useApp } from "@/context/AppContext";
import scssStyles from "@/utils/scssStyles";
import DataLayer from "@/utils/DataLayer";
import { useInView } from 'react-intersection-observer'; // Import to detect when button is in view

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?:
    | "brand"
    | "brand-white"
    | "brand-black"
    | "black-white"
    | "white-black"
    | "terms-button"
    | "whatsapp-button";
  icon?: React.ReactNode;
  wrap?: boolean;
  link?: string;
  load?: LoadProps;
  bannerLink?: boolean;
  onClick?: () => void;
  openBooking?: boolean;
  eventBanner?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  variant = "brand",
  children,
  icon,
  wrap = false,
  link,
  openBooking = false,
  eventBanner,
  bannerLink,
  load,
  ref,
  ...props
}) => {
  const { setBookingActive } = useApp();
  
  // Detect when button is in view
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Animation for appearance with stronger bounce and faster entry
  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1.15)' : 'scale(0.8)',  // More bounce and smaller initial scale
    config: {
      tension: 280,  // Higher tension for more dramatic bounce
      friction: 10,  // Lower friction to emphasize the bounce effect
      duration: 300,  // Faster animation
    },
    from: {
      transform: 'scale(0.8)',  // Start smaller for a noticeable entrance
      opacity: 0,
    },
  });

  const [hoverAnimation, set] = useSpring(() => ({
    backgroundColor: button_theme[variant].bgColor,
    color: button_theme[variant].color,
    borderColor: button_theme[variant].borderColor,
  }));

  const changeHover = (hover: boolean) => {
    const varia = hover ? button_theme[variant].hover : button_theme[variant];

    set({
      backgroundColor: varia.bgColor,
      color: varia.color,
      borderColor: varia.borderColor,
    });
  };

  const onMouseEnter = () => {
    changeHover(true);
  };

  const onMouseLeave = () => {
    changeHover(false);
  };

  const extractAllTextFromChildren = (children: any): string => {
    let text = "";
    if (typeof children === "string") {
      text += children;
    } else if (Array.isArray(children)) {
      children.forEach((child) => {
        text += extractAllTextFromChildren(child);
      });
    } else if (typeof children === "object") {
      text += extractAllTextFromChildren(children.props.children);
    }

    return text;
  };

  const onClick = () => {
    openBooking && setBookingActive(true);
    props.onClick && props.onClick();

    DataLayer.clickEvent({
      element: extractAllTextFromChildren(children),
      elementCategory: "botao",
      pageSection: "footer",
      pageSubsection: "contact",
    });
  };

  // Create a combined ref that works for both callback ref and RefObject
  const setRefs = (el: HTMLButtonElement | null) => {
    // Pass to inView ref
    inViewRef(el);
    // Pass to forwarded ref if it's an object or function
    if (typeof ref === 'function') {
      ref(el);
    } else if (ref && 'current' in ref) {
      if (ref && 'current' in ref) {
        (ref as React.MutableRefObject<HTMLButtonElement | null>).current = el;
      }
    }
  };

  const button = (
    <animated.button
      {...props}
      id={props.id}
      className={`${eventBanner ? styles.button : styles.buttonWithoutShadow}`}
      ref={setRefs}  // Use the combined ref handler
      style={{
        ...props.style,
        ...hoverAnimation,
        ...springProps, // Add appearance animation with more bounce
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {load ? (
        <div style={{ width: 21 }}>
          <Load variant={load.variant} color={"inherit"} size="100%" />
        </div>
      ) : (
        <>
          <Description style={{ color: "inherit" }} wrap={wrap}>
            {children}
          </Description>
          {icon && <div className={styles.icon}>{icon}</div>}
        </>
      )}
    </animated.button>
  );

  if (link)
    return (
      <a
        href={link}
        onClick={() => {
          DataLayer.clickEvent({
            element: extractAllTextFromChildren(children),
            elementCategory: "botao",
            pageSection: "booking",
            pageSubsection: "form",
          });
          if (openBooking) setBookingActive(true);
        }}
        target="_blank"
        style={{ width: "100%", height: "38px" }}
      >
        {button}
      </a>
    );

  return button;
};

export default Button;
