import React from "react";

import styles from "./styles.module.scss";

interface FeedbackProps {
  children: React.ReactNode;
}

const FeedbackCard: React.FC<FeedbackProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default FeedbackCard;
