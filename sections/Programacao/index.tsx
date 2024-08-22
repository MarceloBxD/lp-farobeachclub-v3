import EventCard from "@/components/EventCard";
import Swiper from "@/components/Swiper";
import React from "react";
import styles from "./styles.module.scss";
import { Wrapper } from "@/components";
import { Title } from "@/components/Texts";
import { ContentProps } from "@/types/content";

type ProgramacaoProps = {
  events: ContentProps[];
  style?: React.CSSProperties;
};

function Programacao({ events, style }: ProgramacaoProps) {
  const removeDisclosuredEvent = (events: ContentProps[]) => {
    return events.filter((event) => !event.disclosure);
  };

  return (
    <Wrapper
      anchor="programacao"
      contentStyle={{
        gap: 32,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Title>Programação</Title>
      <Swiper
        childrenArray={removeDisclosuredEvent(events)?.map((event, index) => (
          <EventCard
            title={event.title}
            key={index}
            date={event.date}
            description={event.description}
            link={event.link}
            banner={event.banner}
            tag={event.tag}
            type={event.type}
            instagram={event.instagram}
          />
        ))}
      />
    </Wrapper>
  );
}

export default Programacao;
