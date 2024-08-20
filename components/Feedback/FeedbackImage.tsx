import Image from "next/image";
import styles from "./styles.module.scss";
interface FeedbackImageProps {
  imageUrl: string;
}

export function FeedbackImage({ imageUrl }: FeedbackImageProps) {
  return (
    <div className={styles.logoCompany}>
      <Image className={styles.image} alt="" src={imageUrl} layout="fill" />
    </div>
  );
}
