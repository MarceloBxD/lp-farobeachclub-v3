import { Caption } from "../Texts";
import styles from "./styles.module.scss";
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  color?: string;
  borderColor?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  color = "#fff",
  borderColor = "#fff",
  ...props
}) => {
  return (
    <div
      id="badge"
      className={styles.badge}
      style={{
        borderColor,
        ...props.style,
      }}
    >
      <Caption
        family="Termina Test"
        wrap={false}
        style={{
          color,
          textTransform: "uppercase",
        }}
      >
        {text}
      </Caption>
    </div>
  );
};
