interface ContentMarginProps {
  ref: React.RefObject<HTMLDivElement>
}

export const useContentMargin = ({ ref }: ContentMarginProps): number => {
  if (!ref.current) return 0

  const { margin } = window.getComputedStyle(ref.current)
  return Number(margin.replace("px", ""))
}  

