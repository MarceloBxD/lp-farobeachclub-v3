import { Caption } from "../Texts";
import styles from "./styles.module.scss";
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  color?: string;
  borderColor?: string;
  family?: "Termina Test" | "Montserrat" | undefined;
}

// Texto para trocar Eventos realizados por que vem do Contentful e não quebrar o padrão
const BADGE_TEXT_IF_EVENTOS_REALIZADOS = "Transformando Sonhos em Realidade";

export const Badge: React.FC<BadgeProps> = ({
  text,
  color = "#fff",
  borderColor = "#fff",
  family = "Termina Test",
  ...props
}) => {

  return (
    <div
      id="badge"
      className={`${styles.badge} ${props.className}`}
      style={{
        borderColor,
        ...props.style,
      }}
    >
      <Caption
        family={family}
        wrap={false}
        style={{
          color,
          textTransform: "uppercase",
        }}
      >
        {/* Fazendo validação por que o texto está vindo do Eventos Realizados */}
        {text === "EVENTOS REALIZADOS"
          ? BADGE_TEXT_IF_EVENTOS_REALIZADOS
          : text}
      </Caption>
    </div>
  );
};
