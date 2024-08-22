import Accordion from "@/components/Accordion";
import { Description, Title } from "@/components/Texts";
import Wrapper from "@/components/Wrapper";
import { Tokens } from "@/data/tokens";
import React from "react";

export type FaroMetodologyProps = {};
const FaroMetodology: React.FC<FaroMetodologyProps> = () => {
  return (
    <>
      <Wrapper>
        <div className={""}>
          <Title>
            METODOLOGIAS{" "}
            <b style={{ color: Tokens.colors.brand.beachclub_rooftop }}>FARO</b>
          </Title>
        </div>
      </Wrapper>
    </>
  );
};

export default FaroMetodology;
