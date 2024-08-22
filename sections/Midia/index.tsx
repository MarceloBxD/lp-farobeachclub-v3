import { MidiaCard } from "@/components/MidiaCard";
import React from "react";
import Swiper from "@/components/Swiper";
import { Badge } from "@/components/Badge";
import styles from "./styles.module.scss";
import { Wrapper } from "@/components";
import { Description, Title } from "@/components/Texts";
import { ContentProps } from "@/types/content";

interface MidiaProps {
  category?:
    | "EVENTOS REALIZADOS"
    | "SHOWS REALIZADOS"
    | "ASSESSORIA DE IMPRENSA";
  hasSwiper?: boolean;
  content: ContentProps[];
  header?: {
    title: string;
    description: string | JSX.Element;
  };
  style?: React.CSSProperties;
  anchorId?: string;
}

const Midia: React.FC<MidiaProps> = ({
  category,
  hasSwiper = true,
  header,
  content,
  style,
  anchorId,
}) => {
  if (content === null) return null;

  const cards = content?.map((item, idx) => {
    return (
      <MidiaCard
        anchorId={anchorId}
        key={idx}
        date={item.date}
        banner={item.banner}
        tag={item.tag}
        title={item.title}
        link={item.link}
        description={item.description}
        fixed={item.fixed}
        type={item.type}
        category={item.category}
        pixieSet={item.pixieSet}
      />
    );
  });

  return (
    <Wrapper
      style={{
        paddingTop: 0,
        paddingBottom: 0,
      }}
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      {header?.title && <Title>{header?.title}</Title>}
      {header?.description && <Description>{header?.description}</Description>}
      {category ? (
        <div className={styles.badgeText}>
          <Badge text={category} color="#000" borderColor="transparent" />
        </div>
      ) : (
        <div className={styles.badgeText}>
          {[
            "EVENTOS REALIZADOS",
            "SHOWS REALIZADOS",
            "ASSESSORIA DE IMPRENSA",
          ].map((item, idx) => (
            <Badge
              text={item}
              key={idx}
              color="#000"
              borderColor="transparent"
            />
          ))}
        </div>
      )}
      {hasSwiper ? (
        <Swiper hasPadding childrenArray={cards} />
      ) : (
        <div className={styles.cardList}>{cards}</div>
      )}
    </Wrapper>
  );
};

export default Midia;
