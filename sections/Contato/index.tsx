import React from "react";
import styles from "./styles.module.scss";
import { Wrapper } from "@/components";
import { WppButtonProps } from "@/components/WppContact";
import { Description, Title } from "@/components/Texts";
import { PhoneButtonLabel } from "@/components/PhoneButtonLabel";
import WhatsappIcon from "@/assets/icons/WhatsappIcon";

interface ContatoProps
  extends React.HTMLAttributes<HTMLDivElement>,
    WppButtonProps {}

const Contato: React.FC<ContatoProps> = ({ children, phone, ...props }) => {
  return (
    <Wrapper
      anchor="contato"
      contentClass={{
        container: styles.wrapper,
      }}
      contentStyle={{
        ...props.style,
      }}
    >
      <div className={styles.contact}>
        <p style={{ color: "#555", letterSpacing: "3px" }}>Contato</p>
        <Title>
          Fale <b>Conosco</b>
        </Title>
        <Description
          style={{
            textAlign: "center",
          }}
        >
          Faro Beach Club + Rooftop 🌴
          <br />
          Av. Niemeyer, 101 - Rio de Janeiro - RJ
          <br />
          contato@farobeachclub.com.br
        </Description>
        <div
          className={styles.phones_container}
        >
          <PhoneButtonLabel
            button={{
              icon: <WhatsappIcon fill={"#00A000"} />,
              phone: "5521995521979",
            }}
            label={{
              title: "Corporativo, Formaturas e Outros",
            }}
            whatsapp={{
              message: "Olá, vim pelo site do Faro Beach Club e gostaria de falar com um especialista sobre Eventos Corporativos.",
            }}
          />
          <PhoneButtonLabel
            button={{
              icon: <WhatsappIcon fill={"#00A000"} />,
              phone: "5521997130244",
            }}
            label={{
              title: "Shows e Festas",
            }}
            whatsapp={{
              message: "Olá, vim pelo site do Faro Beach Club e gostaria de falar com um especialista sobre Shows e Festas.",
            }}
          />
          <PhoneButtonLabel
            button={{
              icon: <WhatsappIcon fill={"#00A000"} />,
              phone: "5521995521979",
            }}
            label={{
              title: "Casamentos",
            }}
            whatsapp={{
              message: "Olá, vim pelo site do Faro Beach Club e gostaria de falar com um especialista sobre Casamentos.",
            }}
          />
        </div>
        {children}
      </div>
    </Wrapper>
  );
};

export default Contato;
