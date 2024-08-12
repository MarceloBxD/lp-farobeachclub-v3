import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import InputMask from "react-input-mask";
import { montserrat } from "@/utils/fonts";

import styles from "./styles.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  mask?: string | (string | RegExp)[];
  name: string;
  type: string;
  rightIcon?: React.ReactNode;
  font?: {
    family: string;
    weight: 400 | 700;
    size: 16 | 32;
  };
  color?: string;
}

const Input: React.FC<InputProps> = ({
  mask,
  label,
  name,
  type,
  color = "#000",
  font = {
    family: "Montserrat",
    weight: 400,
    size: 16,
  },
  rightIcon,
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = () => {
    setIsFocused(true);
    inputRef.current?.focus();
  };

  const handleInputBlur = () => {
    !props.value && setIsFocused(false);
  };

  const labelAnimation = useSpring({
    from: {
      top: 0,
      fontSize: font.size,
    },
    to: {
      top: isFocused || props.value ? -30 : -5,
      fontSize: isFocused || props.value ? font.size - 3 : font.size,
    },
  });

  return (
    <div
      className={styles.wrapper}
      style={{
        ...props.style,
      }}
    >
      {label && (
        <animated.label
          className={`${styles.label} ${montserrat.className}`}
          style={{
            ...labelAnimation,
            pointerEvents: "none",
          }}
          onClick={handleInputFocus}
        >
          {label}
        </animated.label>
      )}

      <InputMask
        mask={mask || ""}
        maskChar={""}
        value={props.value}
        onChange={props.onChange}
        className={styles.input}
        inputMode="text"
        style={{
          borderBottom: "1px solid " + color,
          color: color,
        }}
        inputRef={inputRef}
        autoComplete="off"
        type={type}
        name={name}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {rightIcon && <div className={styles.icon}>{rightIcon}</div>}
    </div>
  );
};

export default Input;
