import React from "react";

interface SubtitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Subtitle: React.FC<SubtitleProps> = ({
  children,
  style,
  onDragStart,
  onDragEnd,
  onAnimationStart,
  onAnimationEnd,
  onDrag,
  ...props
}) => {
  return (
    <h2
      {...props}
      style={style}
      className={
        props.className
      }
    >
      {children}
    </h2>
  );
};

export default Subtitle;
