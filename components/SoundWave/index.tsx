import React from "react"
import styles from "./styles.module.scss"
import Span from "./component/Span"

interface SoundWaveProps extends React.HTMLAttributes<HTMLDivElement> {
  muted: boolean
}

export const calculateScaleY = (index: number, muted: boolean) => {
  const baseScale = 0.2 // Base scale for all spans
  const scaleMultiplier = 2 // Multiplier for scale
  const middleSpanScale = 2.5 // Larger scale for the middle span

  if (muted) return baseScale

  // Calculate scale based on index (with the middle span having a larger scale)
  const scale =
    index === 2 ? baseScale * middleSpanScale : baseScale * scaleMultiplier
  return scale
}
const SoundWave: React.FC<SoundWaveProps> = ({ muted, ...props }) => {
  return (
    <div className={styles.container} {...props}>
      {[...Array(5)].map((_, index) => (
        <Span key={index} index={index} muted={muted} />
      ))}
    </div>
  )
}

export default SoundWave
