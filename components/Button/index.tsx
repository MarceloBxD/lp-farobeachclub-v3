"use client";

import React from "react";
import { Description } from "../Texts";
import styles from "./styles.module.scss";
import { animated, config, useSpring } from "react-spring";
import { button_theme } from "./data_button";
import Load, { LoadProps } from "../Load";
import { useApp } from "@/context/AppContext";
import scssStyles from "@/utils/scssStyles";
import DataLayer from "@/utils/DataLayer";

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
  bannerLink?: boolean;
  wrap?: boolean;
  link?: string;
  load?: LoadProps;
  onClick?: () => void;
  openBooking?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}

/**
 * @name Button
 * @description Componente de botão
 * @param {string} variant - variant of button
 * @param {string} children - text of button
 * @param {React.ReactNode} icon - icon of button
 * @param {string} textColor - color of text
 * @param {boolean} wrap - wrap text
 * @param {function} onClick - function of button
 * @param {string} link - link of button
 * @param {LoadProps} load - load of button
 */

const Button: React.FC<ButtonProps> = ({
  variant = "brand",
  children,
  icon,
  wrap = false,
  link,
  openBooking = false,
  bannerLink,
  load,
  ref,
  ...props
}) => {
  const { setBookingActive } = useApp();

  const [hoverAnimation, set] = useSpring(() => ({
    backgroundColor: button_theme[variant].bgColor,
    color: button_theme[variant].color,
    borderColor: button_theme[variant].borderColor,
    config: config.stiff,
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

  const button = (
    <animated.button
      {...props}
      id={props.id}
      className={styles.button}
      ref={ref}
      style={{
        ...props.style,
        ...hoverAnimation,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {load ? (
        <div
          style={{
            width: 21,
          }}
        >
          <Load variant={load.variant} color={"inherit"} size="100%" />
        </div>
      ) : (
        <>
          <Description
            style={{
              color: "inherit",
            }}
            wrap={wrap}
          >
            {children}
          </Description>
          {icon && <div className={styles.icon}>{icon}</div>}
        </>
      )}
    </animated.button>
  );

  if (link || bannerLink)
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
          setBookingActive(true);
        }}
        target="_blank"
        style={{
          width: "fit-content",
          height: "38px",
        }}
      >
        {button}
      </a>
    );
  return button;
};

export default Button;
