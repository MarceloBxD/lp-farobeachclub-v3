import React, { useEffect, useState } from "react";
import Subtitle from "../Subtitle";
import Text from "../Text";
import Wrapper from "../Wrapper";
import SectionLabel from "../SectionLabel";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";
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
