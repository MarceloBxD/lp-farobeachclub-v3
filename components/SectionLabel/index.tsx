import React from "react";
import Text from "../Text";
import Subtitle from "../Subtitle";

type Props = {
  text: string;
  title?: string;
};

const SectionLabel: React.FC<Props> = ({ text, title }) => {
  return (
    <div
      className="
        w-full 
    "
    >
      <Text className="uppercase">{text}</Text>
      {title && <Subtitle>{title}</Subtitle>}
    </div>
  );
};

export default SectionLabel;
