import type { SVGProps } from 'react';
const SvgHomeBgGradientFix = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 375 78'
    width='37.5rem'
    {...props}
  >
    <path fill='url(#home_bg_gradient_fix_svg__a)' d='M0 0h375v78H0z' />
    <defs>
      <linearGradient
        id='home_bg_gradient_fix_svg__a'
        x1={187.5}
        x2={187.5}
        y1={0}
        y2={78}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#F8F8F8' stopOpacity={0} />
        <stop offset={1} stopColor='#F8F8F8' />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgHomeBgGradientFix;
