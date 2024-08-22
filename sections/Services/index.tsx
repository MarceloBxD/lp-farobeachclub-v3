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
  return (
    <>
      <Wrapper
        anchor="servicos"
        style={{
          paddingBottom: 0,
        }}
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
                title: (<small>O que oferecemos:</small>),
                bullets: (
                  <>
                    <p>• Serviço de A&B: Buffet de alta gastronomia.</p>
                    <p>• Equipamentos: Som, iluminação e Palco</p>
                    <p>• Painéis de LED</p>
                    <p>• Sistema de monitoramento e segurança</p>
                    <p>• 1 Suíte Luxo: Com Banheira instagramável.</p>
                    <p>• 1 Camarim suíte </p>
                    <p>• Gerador:180kva.</p>
                    <p>• Produtor Executivo</p>
                    <p>• Equipes: Limpeza, Equipe de Segurança, médica, brigada e salva-vidas.</p>
                    <p>• Cozinha (equipamentos sob-consulta)</p>
                  </>
                ),
              }}
            />
          </div>
          <div className={styles.spaceContent}>
            <TitleText
              texts={{
                title: (<small>Metodologia Faro:</small>),
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
