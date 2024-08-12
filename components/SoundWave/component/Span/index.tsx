import React from "react"
import { animated, config, useSpring } from "react-spring"
import { calculateScaleY } from "../.."

interface SpanProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number
  muted: boolean
}

const Span: React.FC<SpanProps> = ({ index, muted }) => {
  const springs = useSpring({
    loop: { reverse: true },
    from: {
      scaleY: 0.1,
    },
    to: {
      scaleY: !muted ? calculateScaleY(index, muted) : 0.1,
    },
    config: config.stiff,
    delay: index * 50,
  })
  return (
    <animated.span
      style={{
        ...springs,
      }}
    />
  )
}

export default Span
