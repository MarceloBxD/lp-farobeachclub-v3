import * as React from "react"

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 16 15" fill="none" {...props}>
      <rect width="16" height="1" rx="0.5" fill="white" />
      <rect y="7" width="16" height="1" rx="0.5" fill="white" />
      <rect y="14" width="16" height="1" rx="0.5" fill="white" />
    </svg>
  )
}

export default MenuIcon
