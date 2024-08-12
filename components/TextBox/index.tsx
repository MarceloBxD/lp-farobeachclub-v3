import styles from "./styles.module.scss";

export const TextBox = () => {
  return (
    <div className={styles.balao}>
      <div className={styles.seta}></div>
      <p style={{ fontSize: "15px", textAlign: "center" }}>
        Contate-nos pelo <b>Whatsapp</b>
      </p>
    </div>
  );
};
