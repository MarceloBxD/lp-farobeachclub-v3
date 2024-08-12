import React from "react";
import styles from "./styles.module.scss";
import { Button } from "..";
import WhatsappIcon from "@/assets/icons/WhatsappIcon";
import Link from "next/link";

export interface PhoneButtonLabelProps {
  label: {
    title?: string | React.ReactNode;
  };
  button: {
    phone: string;
    text?: string | React.ReactNode;
    style?: React.CSSProperties;
    icon?: React.ReactNode;
  };
  whatsapp: {
    message: string;
  };
}

export const PhoneButtonLabel = ({
  button: {
    icon,
    phone,
    style,
    text = (
      <>
        Nos contate pelo <b>whatsapp</b>
      </>
    ),
  },
  label: { title },
  whatsapp: { message },
}: PhoneButtonLabelProps) => {
  const messageToUrl = encodeURIComponent(message);
  const formattedPhoneToPrint = phone.replace(
    /(\d{2})(\d{2})(\d{5})(\d{4})/,
    "+$1 $2 $3-$4"
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <Link
        className={styles.link}
        target="_blank"
        href={`https://api.whatsapp.com/send?phone=${phone}&text=${messageToUrl}`}
        id="whatsapp_click"
      >
        <Button
          icon={icon}
          variant="whatsapp-button"
          className={styles.wpp}
          type="button"
          style={{
            minWidth: "100%",
            ...style,
          }}
        >
          {text}
        </Button>
      </Link>
      <small
        style={{
          color: "#555",
        }}
      >
        <a href={`tel:${phone}`}>{formattedPhoneToPrint}</a>
      </small>
    </div>
  );
};
