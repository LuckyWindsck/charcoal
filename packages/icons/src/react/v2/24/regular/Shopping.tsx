import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgShopping = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M8.262 5.746a3.744 3.744 0 017.488 0v1.156h.496a3.75 3.75 0 013.75 3.75v7.596a3.75 3.75 0 01-3.75 3.75H7.754a3.75 3.75 0 01-3.75-3.75v-7.596a3.75 3.75 0 013.75-3.75h.508V5.746zm0 2.656v2.33a.75.75 0 001.5 0v-2.33h4.488v2.33a.75.75 0 001.5 0v-2.33h.496a2.25 2.25 0 012.25 2.25v7.596a2.25 2.25 0 01-2.25 2.25H7.754a2.25 2.25 0 01-2.25-2.25v-7.596a2.25 2.25 0 012.25-2.25h.508zm5.988-1.5H9.762V5.746a2.244 2.244 0 014.488 0v1.156z" fill="currentColor"/>
  </svg>);
export const IconShopping = forwardRef(SvgShopping);
export default IconShopping;
