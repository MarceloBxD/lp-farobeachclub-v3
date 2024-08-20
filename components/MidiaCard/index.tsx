"use client";
import React from "react";
import { Badge } from "../Badge";
import Image from "next/legacy/image";
import { useSpring, config } from "react-spring";
import { Button } from "..";
import styles from "./styles.module.scss";
import { Tokens } from "@/data/tokens";
import { ContentProps } from "@/types/content";
import { useApp } from "@/context/AppContext";
import { Subtitle } from "../Texts";
import { Fixed } from "./components/Fixed";
import { InfoBox } from "./components/InfoBox";
import { isVideoUrl } from "@/utils/isVideo";

export const MidiaCard = ({
  date,
  banner,
  tag,
  title,
  link,
  description,
  fixed,
  category,
  pixieSet,
  anchorId,
}: ContentProps) => {
  const { setModalActive } = useApp();
  const dateFormatted =
    date &&
    new Date(date).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "numeric",
      year: "2-digit",
    });

  const infoSpring = useSpring({
    maxHeight: 0,
    opacity: 0,
    config: config.stiff,
  });

  const enterSpring = () => {
    infoSpring.maxHeight.start(200);
    infoSpring.opacity.start(1);
  };

  const leaveSpring = () => {
    infoSpring.maxHeight.start(0);
    infoSpring.opacity.start(0);
  };

  const brokenLink = link?.includes("drive.google");

  return (
    <>
      <div
        id={anchorId}
        className={styles.card}
        onMouseEnter={enterSpring}
        onMouseLeave={leaveSpring}
        onClick={() => {
          enterSpring();
        }}
      >
        <Image alt={title} src={banner} layout="fill" className={styles.img} />

        {fixed && <Fixed />}
        {tag && <Badge text={tag} />}

        <div className={styles.content}>
          {description && (
            <InfoBox description={description} spring={infoSpring} />
          )}

          {category === "ASSESSORIA DE IMPRENSA" ? (
            <Button
              id="btn-midia-card"
              variant="white-black"
              style={{
                width: "100%",
                marginTop: 12,
              }}
              link={brokenLink ? link : undefined}
              onClick={() => {
                !brokenLink &&
                  setModalActive({
                    banner,
                    title,
                    description,
                    type: "Midia",
                    link,
                    category,
                    date,
                    tag,
                  });
              }}
            >
              Ver <b>matéria</b>
            </Button>
          ) : pixieSet && isVideoUrl(link ?? "") ? (
            <>
              <Button
                id="btn-midia-card"
                variant="white-black"
                style={{
                  width: "100%",
                  marginTop: 12,
                }}
                onClick={() => {
                  setModalActive({
                    banner,
                    title,
                    description,
                    type: "Midia",
                    link,
                    category,
                    date,
                    tag,
                  });
                }}
              >
                Ver <b>vídeo</b>
              </Button>
              <Button
                id="btn-midia-card"
                variant="white-black"
                style={{
                  width: "100%",
                  marginTop: 12,
                }}
                onClick={() => {
                  setModalActive({
                    banner,
                    title,
                    description,
                    type: "Midia",
                    link: pixieSet,
                    category,
                    date,
                    tag,
                  });
                }}
              >
                Ver <b>fotos</b>
              </Button>
            </>
          ) : isVideoUrl(link ?? "") ? (
            <Button
              id="btn-midia-card"
              variant="white-black"
              style={{
                width: "100%",
                marginTop: 12,
              }}
              link={brokenLink ? link : undefined}
              onClick={() => {
                !brokenLink &&
                  setModalActive({
                    banner,
                    title,
                    description,
                    type: "Midia",
                    link,
                    category,
                    date,
                    tag,
                  });
              }}
            >
              Ver <b>vídeo</b>
            </Button>
          ) : (
            <Button
              id="btn-midia-card"
              variant="white-black"
              style={{
                width: "100%",
                marginTop: 12,
              }}
              link={brokenLink ? link : undefined}
              onClick={() => {
                !brokenLink &&
                  setModalActive({
                    banner,
                    title,
                    description,
                    type: "Midia",
                    link,
                    category,
                    date,
                    tag,
                  });
              }}
            >
              Ver <b>fotos</b>
            </Button>
          )}
        </div>
      </div>
      <Subtitle
        style={{
          marginTop: 12,
          textAlign: "center",
        }}
      >
        {date && <span>{dateFormatted} - </span>}
        {title}
      </Subtitle>
    </>
  );
};
