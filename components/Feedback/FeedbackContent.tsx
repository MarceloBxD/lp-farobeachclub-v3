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
      }}
    >
      {text}
    </Description>
  );
}
