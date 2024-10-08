import { Title } from "@/components/Texts";
import { TitleTextProps } from "@/components/TitleText";
import React from "react";
import styles from "./styles.module.scss";
import { useApp } from "@/context/AppContext";

const Headline: React.FC<TitleTextProps> = ({ texts: { title } }) => {
  const {
    device: { isMobile },
  } = useApp();
  return (
    <div className={`${styles.container}`}>
      <div
        className={`${styles.centered} ${styles.noMidia}
          `}
      >
        <Title>{title}</Title>
        <div className={styles.descContainer}>
          <div
            style={{
              flex: 1,
              placeSelf: "center",
            }}
          >
            Nos últimos dois anos, estabelecemos conexões memoráveis com mais de
            150 clientes, proporcionando experiências extraordinárias em{" "}
            <strong
              style={{
                fontSize: isMobile ? "unset" : "1.25rem",
              }}
            >
              Eventos Corporativos, Festas de Fim de Ano, Formaturas,
              Aniversários, Casamentos, Plenárias
            </strong>{" "}
            e muito mais.
          </div>
          <div
            style={{
              flex: 1,
            }}
          >
            Além disso, orgulhamo-nos de ter realizado mais de{" "}
            <strong>120 shows inesquecíveis</strong>, trazendo artistas
            renomados do cenário mundial para nossos palcos.
            <br />
            <br />
            Estamos prontos para construir parcerias estratégicas e oferecer a
            você toda nossa <strong>expertise</strong> para transformar o{" "}
            <strong>seu evento em uma experiencia única</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headline;
