import React, { ReactNode } from "react";
interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return (
    <p
      {...props}
      className={"text-black text-base dark:text-gray-400 md:text-lg lg:text-xl" +' '+ props.className}
    >
      {children}
    </p>
  );
};

export default Text;
