import { Wrapper } from "@/components";
import { Text, Title } from "@/components/Texts";
import React from "react";
import { servicesData } from "@/utils/services";
import { eventContent } from "@/data/contents/home";
import Swiper from "@/components/Swiper";
import styles from "./styles.module.scss";

const OFFERING_BULLETS = (
  <>
    <ul>
      <li>Serviços de A&B: Buffer de alta gastronomia</li>
      <li>Equipamentos: Som, iluuminação e Palco</li>
      <li>Painéis de LED</li>
      <li>Sistema de monitoramente e segurança</li>
      <li>01 Suite Luxo: Com Banheira instagramável</li>
      <li>
        01 Camarim Suite
      </li>
      <li>Gerador: 180kva </li>
      <li>01 gerador 180Kva</li>
      <li>Produto Executivo</li>
      <li>Equipes: Limpeza, Equipe de Segurança, Médica, Brigada e Salva Vídas</li>
      <li>Cozinha (Equipamentos sob-consulta)</li>
    </ul>
  </>
);

const Offering: React.FC = () => {
  return (
    <Wrapper
      contentClass={{ container: styles.wrapper }}
      anchor={eventContent[3].anchor}
    >
      <div className={styles.insideWrapper}>
        <Title>{eventContent[3].texts.title}</Title>
        {eventContent[3].texts.description}
      </div>

      <div className={`${styles.desktopContainer}`}>{OFFERING_BULLETS}</div>
    </Wrapper>
  );
};

export default Offering;
