import React from "react";
import { Description, Title } from "@/components/Texts";
import { Wrapper } from "@/components";
import { useApp } from "@/context/AppContext";
import TitleText from "@/components/TitleText";
import { Tokens } from "@/data/tokens";
import styles from "./styles.module.scss";
const Services: React.FC<{}> = () => {
  const {
    device: { isMobile },
  } = useApp();

  const CheckIcon = () => (
    <svg viewBox="0 0 665.8 1000" fill="currentColor" height="1em" width="1em">
      <path d="M248 850c-22.667 0-41.333-9.333-56-28L12 586C1.333 570-2.667 552.667 0 534s11.333-34 26-46 31.667-16.667 51-14c19.333 2.667 35 12 47 28l118 154 296-474c10.667-16 25-26 43-30s35.667-1.333 53 8c16 10.667 26 25 30 43s1.333 35.667-8 53L306 816c-13.333 21.333-32 32-56 32l-2 2" />
    </svg>
  );

  const offering_list = [
    "Serviço de A&B: Buffet de alta gastronomia.",
    "Equipamentos: Som, iluminação e Palco",
    "Painéis de LED",
    "Sistema de monitoramento e segurança",
    "1 Suíte Luxo: Com Banheira instagramável.",
    "1 Camarim suíte",
    "Gerador:180kva.",
    "Produtor Executivo",
    "Equipes: Limpeza, Equipe de Segurança, médica, brigada e salva-vidas.",
    "Cozinha (equipamentos sob-consulta)",
  ];

  return (
    <>
      <Wrapper
        anchor="servicos"
        contentStyle={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Title
          style={{
            margin: "6vh auto 12vh",
            textAlign: "center",
          }}
        >
          Aqui Cada{" "}
          <b style={{ color: Tokens.colors.brand.beachclub_rooftop }}>Evento</b>{" "}
          é Tratado De Forma{" "}
          <b style={{ color: Tokens.colors.brand.beachclub_rooftop }}>Única</b>{" "}
          e{" "}
          <b style={{ color: Tokens.colors.brand.beachclub_rooftop }}>
            Exclusiva
          </b>
        </Title>
        <TitleText
          texts={{
            title: "SERVIÇOS",
            description:
              "Criamos soluções personalizadas para todos os tipos de eventos, combinando nosso estilo único e infraestrutura de excelência, sempre com uma vista de tirar o fôlego para a praia do Leblon.",
          }}
        />

        <div className={styles.spacesContainer}>
          <div>
            <TitleText
              texts={{
                title: <small>O que oferecemos:</small>,
                bullets: (
                  <>
                    {offering_list.map((item, idx) => (
                      <div
                        key={idx}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <CheckIcon />
                        <span style={{ marginLeft: 8 }}>{item}</span>
                      </div>
                    ))}
                  </>
                ),
              }}
            />
          </div>
          <div className={styles.spaceContent}>
            <TitleText
              texts={{
                title: <small>Metodologia Faro:</small>,
                bullets: (
                  <ol>
                    <li>
                      <b>Atendimento Exclusivo:</b> Desde o primeiro contato,
                      entendemos seu projeto e oferecemos nossa expertise para
                      garantir o sucesso do seu evento.
                    </li>
                    <li>
                      <b>Personalização Total:</b> Cada projeto é tratado como
                      prioridade e de forma única e exclusiva, adaptando nossas
                      soluções às suas ideias.
                    </li>
                    <li>
                      <b>Execução Impecável:</b> No dia do evento, nossa equipe
                      estará presente para assegurar que tudo ocorra
                      perfeitamente, proporcionando total tranquilidade e
                      confiança.
                    </li>
                    <li>
                      <b>Planos Completos:</b> Temos também a opção de pacotes
                      completos para seu evento, com som, iluminação, dj,
                      buffet, mobiliário, produtor executivo, equipe de limpeza
                      e segurança, onde sua única preocupação será aproveitar ao
                      máximo do inicio ao fim.
                    </li>
                  </ol>
                ),
              }}
            />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Services;
