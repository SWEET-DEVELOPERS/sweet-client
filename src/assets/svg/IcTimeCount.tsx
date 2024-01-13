import type { SVGProps } from 'react';
const SvgIcTimeCount = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 74 82' {...props}>
    <g filter='url(#ic_time_count_svg__a)'>
      <rect width={50} height={58} x={12} y={8} fill='#FFE9F1' rx={8} />
      <rect width={49} height={57} x={12.5} y={8.5} stroke='#FF2176' rx={7.5} />
    </g>
    <path fill='#6B0E32' d='M11 34h1v6h-1zM62 34h1v6h-1z' />
    <defs>
      <filter
        id='ic_time_count_svg__a'
        width={74}
        height={82}
        x={0}
        y={0}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={6} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0.815686 0 0 0 0 0.705882 0 0 0 0 0.717647 0 0 0 0.25 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_1277_19921' />
        <feBlend in='SourceGraphic' in2='effect1_dropShadow_1277_19921' result='shape' />
      </filter>
    </defs>
  </svg>
);
export default SvgIcTimeCount;
