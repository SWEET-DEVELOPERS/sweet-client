import type { SVGProps } from 'react';
const SvgGradientCta = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 375 92' {...props}>
    <path
      fill='url(#gradient_CTA_svg__a)'
      d='M375 92h375v92H375z'
      transform='rotate(-180 375 92)'
    />
    <defs>
      <linearGradient
        id='gradient_CTA_svg__a'
        x1={562.5}
        x2={562.5}
        y1={92}
        y2={184}
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
export default SvgGradientCta;
