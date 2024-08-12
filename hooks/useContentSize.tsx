interface ContentSizeProps {
  ref: React.RefObject<HTMLDivElement>
}

export const useContentSize = ({ ref }: ContentSizeProps) => {
  if (!ref.current) return

  return {
    width: ref.current.offsetWidth,
    height: ref.current.offsetHeight,
  }
}
