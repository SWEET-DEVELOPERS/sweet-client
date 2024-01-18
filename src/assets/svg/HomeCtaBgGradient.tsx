import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHomeCtaBgGradient = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 374 163' {...props}>
    <path
      fill='url(#home_cta_bg_gradient_svg__a)'
      d='M374 163h374v163H374z'
      transform='rotate(-180 374 163)'
    />
    <defs>
      <linearGradient
        id='home_cta_bg_gradient_svg__a'
        x1={561}
        x2={561}
        y1={163}
        y2={326}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#fff' />
        <stop offset={0.23} stopColor='#fff' />
        <stop offset={0.63} stopColor='#fff' stopOpacity={0.7} />
        <stop offset={1} stopColor='#fff' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgHomeCtaBgGradient;
