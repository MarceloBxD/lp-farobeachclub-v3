import { Tokens } from "@/data/tokens"
import { markdownOptions } from "@/utils/markdownOptions"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import React from "react"
import { animated, config, useSpring } from "react-spring"

type InfoBoxProps = {
  description: any
  spring: any
}

export const InfoBox = ({ description, spring }: InfoBoxProps) => {
  return (
    <animated.div
      style={{
        display: "flex",
        flexDirection: "column",
        ...spring,
      }}
    >
      <div
        style={{
          color: Tokens.colors.neutral.white,
          marginTop: 12,
          overflow: "auto",
        }}
      >
        {documentToReactComponents(description, markdownOptions)}
      </div>
    </animated.div>
  )
}
