import { ContentProps } from "@/types/content";
import React from "react";
import EventCard from "../EventCard";
import styles from "./styles.module.scss";

type DisclosureEventProps = {
  event?: ContentProps;
};

const DisclosureEvent: React.FC<DisclosureEventProps> = ({ event }) => {
  if (!event) return null;
  return (
    <div className={styles.wrapper}>
      <EventCard
        title={event.title}
        date={event.date}
        description={event.description}
        link={event.link}
        banner={event.banner}
        tag={event.tag}
        type={event.type}
        instagram={event.instagram}
        disclosure={event.disclosure}
        bannerCard={true}
      />
    </div>
  );
};

export default DisclosureEvent;
