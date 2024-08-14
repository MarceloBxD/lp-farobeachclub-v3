import { Button } from "@/components";
import React from "react";
import { Text, Title } from "../Texts";
import Link from "next/link";
import { ButtonProps } from "../Button";
import styles from "./styles.module.scss";
export interface TitleTextProps {
  texts: {
    title: string | JSX.Element;
    description?: string | JSX.Element;
    bullets?: string | JSX.Element;
  };
  anchor?: string;
  button?: ButtonProps | ButtonProps[];
  className?: string;
  style?: React.CSSProperties;
  centered?: boolean;
  hasMidia?: boolean;
}

const TitleText: React.FC<TitleTextProps> = ({
  button,
  texts: { title, description, bullets },
  className,
  style,
  centered = false,
  hasMidia = true,
}) => {
  const buttonContent = (item: ButtonProps, index: number) => {
    const button = (
      <Button
        id={item.id}
        icon={item.icon}
        variant={item.variant}
        openBooking={item.openBooking}
      >
        {item.children}
      </Button>
    );

    if (!!item.link) {
      return (
        <Link key={index} href={item.link}>
          {button}
        </Link>
      );
    }

    return button;
  };
  return (
    <div
      className={`${styles.container} ${className}`}
      style={{
        ...style,
      }}
    >
      <div
        className={`${centered ? styles.centered : ""} ${
          hasMidia ? "" : styles.noMidia
        }`}
      >
        <Title>{title}</Title>
        <div className={styles.descContainer}>
          <div
            style={{
              flex: 1,
            }}
          >
            {!!description && description}
          </div>
          <div
            style={{
              flex: 1,
            }}
          >
            {!!bullets && <Text>{bullets}</Text>}
          </div>
        </div>
        {button
          ? Array.isArray(button)
            ? button.map((item, index) => buttonContent(item, index))
            : buttonContent(button, 0)
          : null}
      </div>
    </div>
  );
};

export default TitleText;
