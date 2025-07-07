import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgItalic = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.75 3.752c0-.69.56-1.25 1.25-1.25h7a1.25 1.25 0 110 2.5h-2.457l-2.545 13.996H14a1.25 1.25 0 010 2.5H7a1.25 1.25 0 110-2.5h2.457l2.545-13.996H10c-.69 0-1.25-.56-1.25-1.25z"
      fill="currentColor"
    />
  </svg>
)
export const IconItalicSolid = forwardRef(SvgItalic)
export default IconItalicSolid
