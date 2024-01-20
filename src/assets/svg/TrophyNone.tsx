import type { SVGProps } from 'react';
const SvgTrophyNone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    fill='none'
    viewBox='0 0 225 225'
    {...props}
  >
    <path fill='url(#trophyNone_svg__a)' d='M0 0h225v225H0z' />
    <defs>
      <pattern id='trophyNone_svg__a' width={1} height={1} patternContentUnits='objectBoundingBox'>
        <use xlinkHref='#trophyNone_svg__b' transform='scale(.00052)' />
      </pattern>
      <image
        id='trophyNone_svg__b'
        width={1920}
        height={1920}
      />
    </defs>
  </svg>
);
export default SvgTrophyNone;