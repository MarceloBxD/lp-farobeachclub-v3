import React from "react";
import styles from "./styles.module.scss";
import { Button } from "..";
import WhatsappIcon from "@/assets/icons/WhatsappIcon";
import Link from "next/link";
import DataLayer from "@/utils/DataLayer";

export interface WppButtonProps {
  phone?: string;
  style?: React.CSSProperties;
}

export const WppButton = ({ phone, style }: WppButtonProps) => {
  const handleClick = () => {
    DataLayer.clickEvent({
      element: "whatsapp",
      elementCategory: "botao",
      pageSection: "footer",
      pageSubsection: "contact",
    });
  }
  return (
    <Link
      className={styles.link}
      target="_blank"
      href={`https://api.whatsapp.com/send?phone=${phone}&text=Ol%C3%A1%2C+vim+pelo+site+do+Faro+Beach+Club+e+gostaria+de+falar+com+um+especialista+em+Eventos%C2%A0Privados.`}
      id="whatsapp_click"
      onClick={handleClick}
    >
      <Button
        icon={<WhatsappIcon fill={"#00A000"} />}
        variant="whatsapp-button"
        className={styles.wpp}
        type="button"
        style={{
          minWidth: "100%",
          ...style,
        }}
      >
        Nos contate pelo <b>whatsapp</b>
      </Button>
    </Link>
  );
};
