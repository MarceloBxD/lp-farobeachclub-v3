import React from "react";
import CoverImage from "./components/CoverImage";
import { Button } from "..";
import { Subtitle, Text } from "../Texts";
import styles from "./styles.module.scss";
import { ContentProps } from "@/types/content";
import { weekday } from "@/utils/dateFuncs";
import { useApp } from "@/context/AppContext";

import CloseIcon from "@/assets/icons/CloseIcon";
import DataLayer from "@/utils/DataLayer";

const EventCard: React.FC<ContentProps> = ({
  date,
  title,
  description,
  banner,
  link,
  tag,
  instagram,
  disclosure = false,
  bannerCard,
}) => {
  const { setModalActive, bookingActive, setBookingActive } = useApp();
  const [cardBannerActive, setCardBannerActive] = React.useState(true);

  const openModal = () => {
    if (disclosure) return;
    setModalActive({
      title,
      description,
      banner,
      link,
      tag,
      date,
      type: "Programação",
      instagram,
    });
  };

  console.log("bannerCard", bannerCard);

  return (
    <div
      id="eventos_click"
      style={{
        display: cardBannerActive && !bookingActive ? "flex" : "none",
        flexDirection: "column",
        gap: 12
      }}
    >
      <div className={styles.card} onClick={openModal}>
        {disclosure && (
          <CloseIcon
            onClick={() => setCardBannerActive(false)}
            color="white"
            style={{
              position: "absolute",
              right: "20px",
              top: "20px",
              cursor: "pointer",
              zIndex: "1",
            }}
          />
        )}

        <CoverImage
          alt="Imagem do evento"
          src={banner}
          badges={tag ? [{ text: tag }] : []}
        />
        {!disclosure && (
          <div className={styles.card_bottom}>
            <Subtitle style={{ fontWeight: 700 }}>{title}</Subtitle>
            {date && <Text>{weekday(date)}</Text>}
          </div>
        )}
      </div>
      <Button
        bannerLink
        link={link}
        style={{
          width: "100%",
        }}
        onClick={() => {
          DataLayer.clickEvent({
            element: title,
            elementCategory: "botao",
            pageSection: "eventos",
            pageSubsection: "eventos",
          });
          setBookingActive(true);
        }}
        id="comprar_ingresso_click"
      >
        {bannerCard ? (
          <b>Faça seu orçamento!</b>
        ) : (
          <>
            Comprar <b>Ingressos</b>
          </>
        )}
      </Button>
    </div>
  );
};

export default EventCard;
