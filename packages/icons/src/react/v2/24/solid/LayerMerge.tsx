import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLayermerge = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="M3.678 3.672h1.75a.75.75 0 100-1.5h-1.75a1.85 1.85 0 00-1.85 1.849v1.807l-.545-.546a.75.75 0 10-1.06 1.06L2.047 8.17a.75.75 0 001.061 0l1.826-1.826a.75.75 0 10-1.06-1.06l-.546.545V4.021a.35.35 0 01.349-.35zm11.884-.219a3.023 3.023 0 00-3.238 0L5.107 8.03a1.924 1.924 0 000 3.25l1.988 1.26-1.988 1.261a1.924 1.924 0 000 3.25l7.217 4.576c.989.627 2.25.627 3.238 0l7.218-4.577a1.924 1.924 0 000-3.249l-1.989-1.26 1.989-1.262a1.924 1.924 0 000-3.249l-7.218-4.577zm3.69 9.087l-4.278 2.713a1.923 1.923 0 01-2.06 0l-4.28-2.713 4.28-2.713a1.924 1.924 0 012.06 0l4.278 2.713z"
      fill="currentColor"
    />
  </svg>
)
export const IconLayerMergeSolid = forwardRef(SvgLayermerge)
export default IconLayerMergeSolid
