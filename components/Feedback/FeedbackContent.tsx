import { useApp } from "@/context/AppContext";
import { Description } from "../Texts";
interface FeedbackContentProps {
  text: string;
}

export function FeedbackContent({ text }: FeedbackContentProps) {
  const {
    device: { isMobile },
  } = useApp();

  return (
    <Description
      style={{
        textAlign: "center",
        maxWidth: "550px",
        width: "100%",
        minHeight: isMobile ? "0" : "200px",
        color: "#555",
        fontWeight: 500,
      }}
    >
      &quot;{text}&quot;
    </Description>
  );
}
