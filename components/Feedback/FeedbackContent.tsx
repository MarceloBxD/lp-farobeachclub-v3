import { Description } from "../Texts";

interface FeedbackContentProps {
  text: string;
}

export function FeedbackContent({ text }: FeedbackContentProps) {
  return <p>{text}</p>;
}
