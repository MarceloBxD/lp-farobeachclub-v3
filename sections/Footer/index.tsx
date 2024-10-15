import React from "react";
import { Tokens } from "@/data/tokens";
import { Wrapper } from "../../components";
import Logo from "../../components/Logo";

import { mediaFooterData } from "@/data/footer";
import styles from "./styles.module.scss";
import { Caption } from "@/components/Texts";
import Link from "next/link";

export const Footer = () => {
  return (
    <Wrapper
      bgColor={`${Tokens.colors.brand.beachclub_rooftop}`}
      contentClass={{
        content: styles.wrapper,
      }}
      style={{
        padding: "0 0 20px 0",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={styles.socialMediaContainer}>
        {mediaFooterData.map((item) => (
          <Link
            id={item.GA_id}
            target="_blank"
            key={item.id}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = item.bgColor;
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#fff";
            }}
            className={styles.midiaItem}
            href={item.link}
          >
            <item.icon />
          </Link>
        ))}
      </div>

      <div className={styles.bottom}>
        <div
          style={{
            width: "168px",
            height: "168px",
            position: "relative",
          }}
        >
          <Logo />
        </div>

        <div className={styles.content}>
          <Caption
            color="white"
            style={{
              lineHeight: "180%",
              justifyContent: "center",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            <b> Faro Beach Club ® 2024</b>
            <br />
            <a href="/privacidade">Políticas de Privacidade</a>
            <br />
            Todos os direitos reservados
            <br />
            <a
              href="https://www.majorssolutions.com.br"
              id="majorssolutions_click"
              target="_blank"
            >
              Site by Majors Solutions
            </a>
          </Caption>
        </div>
      </div>
    </Wrapper>
  );
};
