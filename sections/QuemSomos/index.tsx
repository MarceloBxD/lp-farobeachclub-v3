import React from "react";
import { Description, Title } from "@/components/Texts";
import { Wrapper } from "@/components";
import styles from "./styles.module.scss";
import scssStyles from "@/utils/scssStyles";
import TitleTextSwiper from "../TitleTextSwiper";
import { useApp } from "@/context/AppContext";

const QuemSomos: React.FC<{ videoUrl: string }> = ({ videoUrl }) => {
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
          gap: 16,
          margin: "30px auto",
        }}
      >
        <Title style={{ margin: "-20px auto 24px" }}>Quem Somos</Title>
        <div className={scssStyles([styles.customersContainer])}>
          <p>
            O Faro é um espaço exclusivo, projetado com o estilo sofisticado dos
            Beach Clubs europeus, para ser o cenário perfeito para o seu evento.
            Aqui, você encontra conforto, segurança, alta gastronomia, acesso à
            praia e uma vista paradisíaca para o mar!
            <br />
            <br />
            Localizado no coração do <strong>Leblon</strong>, o Faro Beach Club
            é altamente versátil, ideal para receber eventos{" "}
            <strong>
              Corporativos, Aniversários, Festas de Fim de Ano, Formaturas,
              Casamentos, Festas de 15 anos, plenárias
            </strong>{" "}
            e muito mais.
          </p>

          <p>
            <strong>
              Aqui cada evento é tratado de forma única e exclusiva.
            </strong>
          </p>

          <div>
            <TitleTextSwiper
              className={styles.titleSwiper}
              texts={{
                description: (
                  <Description
                    style={{
                      fontSize: "1.5rem",
                      lineHeight: "1.5",
                      fontWeight: "600",
                      textAlign: isMobile ? "center" : "left",
                    }}
                  >
                    &quot;Transforme Seu Evento com o Charme do Faro Beach
                    Club&quot;
                  </Description>
                ),
              }}
              style={{
                marginBottom: 0,
                marginTop: "5vh",
                minHeight: "fit-content",
              }}
              video={videoUrl}
            />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default QuemSomos;
