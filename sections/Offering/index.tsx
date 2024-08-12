import { Wrapper } from "@/components";
import { Text, Title } from "@/components/Texts";
import React from "react";
import { servicesData } from "@/utils/services";
import { eventContent } from "@/data/contents/home";
import Swiper from "@/components/Swiper";
import styles from "./styles.module.scss";

const Offering: React.FC = () => {
  return (
    <Wrapper contentClass={{ container: styles.wrapper }}>
      <div className={styles.insideWrapper}>
        <Title>{eventContent[3].texts.title}</Title>
        {eventContent[3].texts.description}
      </div>

      <div className={`desktop ${styles.desktopContainer}`}>
        {servicesData.map((item) => (
          <div className={styles.servicesBox} key={item.id}>
            <item.icon />
            <p className={styles.servicesText}>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="mobile">
        <Swiper
          childrenArray={servicesData.map((item) => (
            <div className={styles.servicesMobile} key={item.id}>
              <item.icon />
              <p className={styles.servicesTextMobile}>{item.text}</p>
            </div>
          ))}
        />
      </div>
    </Wrapper>
  );
};

export default Offering;
