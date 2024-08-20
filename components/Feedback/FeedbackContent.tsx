import { Description } from "../Texts";
import styles from "./styles.module.scss";
interface FeedbackContentProps {
  text: string;
}

export function FeedbackContent({ text }: FeedbackContentProps) {
  return (
    <Description
      style={{
        textAlign: "center",
        maxWidth: "550px",
        width: "100%",
        minHeight: "200px",
        color: "#555",
        fontWeight: 500,
      }}
    >
      {text}
    </Description>
  );
}
