import React from "react";
import Wrapper from "../Wrapper";
import SectionLabel from "../SectionLabel";

type SubtitleAndTextProps = {
  subtitle: string;
  text: string;
  anchorId?: string;
};

const SubtitleAndText: React.FC<SubtitleAndTextProps> = ({
  subtitle,
  text,
}) => {
 
  return (
    <Wrapper>
      <SectionLabel text={subtitle} title={text} />
    </Wrapper>
  );
};

export default SubtitleAndText;
