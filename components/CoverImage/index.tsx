import Image from "next/legacy/image";
import React from "react";
import { Badge, BadgeProps } from "@/components/Badge";
import styles from "./styles.module.scss";
interface CoverImageProps {
  src?: string;
  alt: string;
  badges?: BadgeProps[];
}

const CoverImage: React.FC<CoverImageProps> = ({ alt, src, badges }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {badges &&
          badges.map((badge, index) => <Badge key={index} text={badge.text} />)}
      </div>

      {src && (
        <Image
          src={src}
          alt={alt}
          layout="fill"
          style={{ zIndex: -1 }}
        />
      )}
    </div>
  );
};

export default CoverImage;
