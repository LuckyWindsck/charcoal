import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgContest = (
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
    <path d="M12 15a5 5 0 100-10 5 5 0 000 10z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2a8 8 0 00-6 13.292V22l6-2 6 2v-6.708A8 8 0 0012 2zm0 14a6 6 0 100-12 6 6 0 000 12z"
      fill="currentColor"
    />
  </svg>
)
export const IconContest24 = forwardRef(SvgContest)
export default IconContest24
