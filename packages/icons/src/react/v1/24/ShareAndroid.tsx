import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgShareAndroid = (
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
      d="M13 6.375a2.75 2.75 0 111.03 2.146L8.72 11.586a2.773 2.773 0 010 .828l5.312 3.065a2.75 2.75 0 11-1 1.732l-5.312-3.065a2.75 2.75 0 110-4.293l5.312-3.064A2.773 2.773 0 0113 6.375z"
      fill="currentColor"
    />
  </svg>
)
export const IconShareAndroid24 = forwardRef(SvgShareAndroid)
export default IconShareAndroid24
