import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgLogout = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M6.75 3A3.75 3.75 0 003 6.75v10.5A3.75 3.75 0 006.75 21h5.5A3.75 3.75 0 0016 17.25V6.75A3.75 3.75 0 0012.25 3h-5.5zm10.47 6.03a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.22-2.22H11.5a.75.75 0 010-1.5h7.94l-2.22-2.22z" fill="currentColor"/>
  </svg>);
export const IconLogoutSolid = forwardRef(SvgLogout);
export default IconLogoutSolid;
