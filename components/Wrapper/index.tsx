import React from "react"
import styles from "./styles.module.scss"

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  bgColor?: string
  children: React.ReactNode
  anchor?: string
  contentStyle?: React.CSSProperties
  contentClass?: {
    container?: string
    content?: string
  }
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  bgColor = "transparent",
  anchor,
  contentStyle,
  contentClass,
  ...props
}) => {
  return (
    <>
      <div
        className={`${styles.container} ${contentClass?.container}`}
        {...props}
        style={{
          backgroundColor: bgColor,
          ...props.style,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-80px",
          }}
          id={anchor}
        />
        <div
          className={`${styles.content} ${contentClass?.content}`}
          style={{
            ...contentStyle,
          }}
        >
          {children}
        </div>
      </div>
    </>
  )
}

export default Wrapper
