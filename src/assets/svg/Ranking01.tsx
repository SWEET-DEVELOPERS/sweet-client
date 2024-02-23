import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRanking01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    fill='none'
    viewBox='0 0 34 34'
    {...props}
  >
    <path fill='url(#Ranking-01_svg__a)' d='M0 0h34v34H0z' />
    <defs>
      <pattern id='Ranking-01_svg__a' width={1} height={1} patternContentUnits='objectBoundingBox'>
        <use xlinkHref='#Ranking-01_svg__b' transform='scale(.00417)' />
      </pattern>
      <image
        xlinkHref='data:image/png;base64,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'
        id='Ranking-01_svg__b'
        width={240}
        height={240}
      />
    </defs>
  </svg>
);
export default SvgRanking01;
