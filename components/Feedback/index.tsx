import React from "react";

import styles from "./styles.module.scss";
import Wrapper from "../Wrapper";

interface FeedbackProps {
  children: React.ReactNode;
}

const FeedbackCard: React.FC<FeedbackProps> = ({ children }) => {
  return <Wrapper className={styles.container}>{children}</Wrapper>;
};

export default FeedbackCard;
