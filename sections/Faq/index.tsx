import Accordion from "@/components/Accordion";
import { Description, Title } from "@/components/Texts";
import TitleText from "@/components/TitleText";
import Wrapper from "@/components/Wrapper";
import { Tokens } from "@/data/tokens";
import React from "react";
import styles from "./styles.module.scss";

export type FaqProps = {
  faq: {
    question: string;
    answer: string;
  }[];
};
const Faq: React.FC<FaqProps> = ({ faq }) => {
  return (
    <>
      <Wrapper>
        <div className={styles.textFaq}> 

        <Title>
          Perguntas <b style={{ color: Tokens.colors.brand.beachclub_rooftop }}>Frequentes</b>
        </Title>
        <Description>
          Aqui está algumas das perguntas mais frequentes que recebemos.
        </Description>
        </div>
        
        {faq.map((faq, index) => (
          <Accordion key={index} title={faq.question} content={faq.answer} />
        ))}
        </Wrapper>
    </>
  );
};

export default Faq;
