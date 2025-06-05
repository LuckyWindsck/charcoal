import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCurvenodes = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M19.502 3.252a1 1 0 100 2 1 1 0 000-2zM5.006 17.118c.195-6.634 5.457-11.996 12.05-12.35a2.5 2.5 0 10.15-1.508c-7.49.28-13.502 6.344-13.7 13.856a2.501 2.501 0 101.5.002zm-1.754 2.384a1 1 0 112 0 1 1 0 01-2 0z" fill="currentColor"/>
  </svg>);
export const IconCurveNodes = forwardRef(SvgCurvenodes);
export default IconCurveNodes;
