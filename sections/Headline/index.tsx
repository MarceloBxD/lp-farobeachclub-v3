import { Title } from "@/components/Texts";
import { TitleTextProps } from "@/components/TitleText";
import React from "react";
import styles from "./styles.module.scss";

const Headline: React.FC<TitleTextProps> = ({
  texts: { title, description },
}) => {
  return (
    <div className={`${styles.container}`}>
      <div
        className={`${styles.centered} ${styles.noMidia}
          `}
      >
        <Title>{title}</Title>
        <div className={styles.descContainer}>
          <div
            style={{
              flex: 1,
            }}
          >
            {!!description && description}
          </div>
          <div
            style={{
              flex: 1,
            }}
          >
            {!!description && description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headline;
