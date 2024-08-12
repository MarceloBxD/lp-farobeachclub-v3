import React from "react"

interface arrowProps extends React.SVGProps<SVGSVGElement> {
  fill?: string
}

const ArrowRightIcon: React.FC<arrowProps> = ({ fill = "#fff", ...props }) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 20" fill="none" {...props}>
      <path
        d="M13.7215 0.254403C13.393 0.593607 13.393 1.16765 13.7215 1.50685L21.075 9.0998H0.859174C0.379047 9.0998 0 9.49119 0 9.98695C0 10.4827 0.379047 10.8741 0.859174 10.8741H21.075L13.7215 18.4932C13.393 18.8324 13.393 19.4064 13.7215 19.7456C14.05 20.0848 14.6059 20.0848 14.9345 19.7456L23.7536 10.6132C24.0821 10.274 24.0821 9.69993 23.7536 9.36073L14.9345 0.254403C14.6059 -0.084801 14.05 -0.084801 13.7215 0.254403Z"
        fill={fill}
      />
    </svg>
  )
}

export default ArrowRightIcon
