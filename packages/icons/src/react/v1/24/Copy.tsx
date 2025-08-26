import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCopy = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3 7a1 1 0 011 1v10a2 2 0 002 2h11a1 1 0 110 2H6a4 4 0 01-4-4V8a1 1 0 011-1z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 2a3 3 0 013 3v10a3 3 0 01-3 3H9a3 3 0 01-3-3V5a3 3 0 013-3h10zM9 4a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H9z"
      fill="currentColor"
    />
  </svg>
)
export const IconCopy24 = forwardRef(SvgCopy)
export default IconCopy24
