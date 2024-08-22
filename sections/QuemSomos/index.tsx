import React from "react";
import { Description, Title } from "@/components/Texts";
import { Wrapper } from "@/components";
import styles from "./styles.module.scss";
import scssStyles from "@/utils/scssStyles";
import TitleTextSwiper from "../TitleTextSwiper";
import { useApp } from "@/context/AppContext";
import TitleText from "@/components/TitleText";
import Swiper from "@/components/Swiper";
import Image from "next/image";

const QuemSomos: React.FC<{
  videoUrl: string;
  eventContent: any;
  homeContent: any;
}> = ({ videoUrl, eventContent, homeContent }) => {
  const {
    device: { isMobile },
  } = useApp();
  return (
    <>
      <Wrapper
        anchor="quem-somos"
        style={{
          paddingBottom: 0,
        }}
        contentStyle={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className={scssStyles([styles.customersContainer])}>
          <TitleTextSwiper
            className={styles.titleSwiper}
            texts={{
              description: (
                <div
                  style={{
                    width: isMobile ? "100%" : "95%",
                  }}
                >
                  <Description
                    style={{
                      fontSize: "1.5rem",
                      lineHeight: "1.5",
                      fontWeight: "600",
                      textAlign: isMobile ? "center" : "left",
                      marginBottom: "1rem",
                    }}
                  >
                    O Faro Beach Club,
                  </Description>
                  <p>
                    É um espaço exclusivo, projetado com o estilo sofisticado
                    dos Beach Clubs europeus, para ser o cenário perfeito para o
                    seu evento. Aqui, você encontra conforto, segurança, alta
                    gastronomia, acesso à praia e uma vista paradisíaca para o
                    mar!
                    <br />
                    <br />
                    Localizado no coração do <strong>Leblon</strong>, o Faro
                    Beach Club é altamente versátil, ideal para receber eventos{" "}
                    <strong>
                      Corporativos, Aniversários, Festas de Fim de Ano,
                      Formaturas, Casamentos, Festas de 15 anos, plenárias
                    </strong>{" "}
                    e muito mais.
                  </p>
                  <br />
                  <p>
                    Com dois ambientes independetes - o Beach Club e o Rooftop -
                    estamos preparados para atender qualquer tipo de evento,
                    sempre com excelência e atenção aos detalhes.
                  </p>
                </div>
              ),
            }}
            style={{
              marginBottom: 0,
              minHeight: "fit-content",
            }}
            video={videoUrl}
          />
        </div>

        <div className={styles.spacesContainer}>
          <div className={styles.spaceContent}>
            <TitleText
              button={eventContent[1].button}
              texts={{
                title: eventContent[1].texts.title,
                description: eventContent[1].texts.description,
                bullets: eventContent[1].texts.bullets,
              }}
              hasMidia
              className={styles.titleText}
            />
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              className={styles.swiper}

              // autoplay
              childrenArray={homeContent[1]?.images?.map(
                (data: any, index: number) => (
                  <div key={index} className={styles.imgSwiper}>
                    <Image
                      src={data.src}
                      alt={data.alt}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                )
              )}
            />
          </div>
          <div className={styles.spaceContent}>
            <TitleText
              button={eventContent[2].button}
              texts={{
                title: eventContent[2].texts.title,
                description: eventContent[2].texts.description,
                bullets: eventContent[2].texts.bullets,
              }}
              hasMidia
              className={styles.titleText}
            />
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              // autoplay
              className={styles.swiper}
              childrenArray={homeContent[2]?.images.map(
                (data: any, index: number) => (
                  <div key={index} className={styles.imgSwiper}>
                    <Image
                      src={data.src}
                      alt={data.alt}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                )
              )}
            />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default QuemSomos;
