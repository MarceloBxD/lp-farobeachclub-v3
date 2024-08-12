import React from "react";
import styles from "./styles.module.scss";
import { montserrat, terminaTest } from "@/utils/fonts";

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: any;
  color?: "white" | "black" | string;
  weight?: 300 | 400 | 700;
  family?: "Montserrat" | "Termina Test";
  wrap?: boolean;
}

const checkFontFamily = (family: "Montserrat" | "Termina Test") => {
  if (family === "Montserrat") {
    return montserrat.style;
  } else if (family === "Termina Test") {
    return terminaTest.style;
  }
};

export const Title = ({
  children,
  color = "black",
  weight = 400,
  family = "Montserrat",
  ...props
}: TextProps) => {
  return (
    <h1
      {...props}
      className={`${styles.title}`}
      style={{
        color: color,
        fontWeight: weight,
        ...checkFontFamily(family),
        ...props.style,
      }}
    >
      {children}
    </h1>
  );
};

export const Subtitle = ({
  children,
  color = "black",
  weight = 400,
  family = "Montserrat",
  ...props
}: TextProps) => {
  return (
    <h2
      {...props}
      className={`${styles.subtitle}`}
      style={{
        fontWeight: weight,
        color: color,
        ...checkFontFamily(family),
        ...props.style,
      }}
    >
      {children}
    </h2>
  );
};

export const Description = ({
  children,
  color = "black",
  weight = 400,
  family = "Montserrat",
  wrap = true,
  ...props
}: TextProps) => {
  return (
    <h3
      {...props}
      className={`${styles.description}`}
      style={{
        fontWeight: weight,
        color: color,
        whiteSpace: wrap ? "pre-wrap" : "nowrap",
        ...checkFontFamily(family),
        ...props.style,
      }}
    >
      {children}
    </h3>
  );
};

export const Text = ({
  children,
  color = "black",
  weight = 400,
  family = "Montserrat",
  ...props
}: TextProps) => {
  return (
    <p
      {...props}
      className={styles.text}
      style={{
        fontWeight: weight,
        color: color,
        overflowWrap: "break-word",
        hyphens: "manual",
        ...checkFontFamily(family),
        ...props.style,
      }}
    >
      {children}
    </p>
  );
};

export const Caption = ({
  children,
  color = "black",
  weight = 400,
  family = "Montserrat",
  wrap = true,
  ...props
}: TextProps) => {
  return (
    <p
      {...props}
      className={`${styles.caption}`}
      style={{
        fontWeight: weight,
        color: color,
        whiteSpace: wrap ? "pre-wrap" : "nowrap",
        ...checkFontFamily(family),
        ...props.style,
      }}
    >
      {children}
    </p>
  );
};
