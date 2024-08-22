import React from "react";
import { Description, Title } from "@/components/Texts";
import { Wrapper } from "@/components";
import { useApp } from "@/context/AppContext";
import TitleText from "@/components/TitleText";
import { Tokens } from "@/data/tokens";

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
            margin: "8vh auto",
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
      </Wrapper>
    </>
  );
};

export default Services;
