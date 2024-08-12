import React from "react";
import styles from "./styles.module.scss";

export default function BannerButton() {
  return (
    <div className={styles.button}>
      <a href="https://www.ingresse.com/reveillonfaro2024" target="_blank">
        <span>GARANTA JÁ O SEU INGRESSO!</span>
      </a>
    </div>
  );
}
