import type { SVGProps } from 'react';
const SvgIcAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20' {...props}>
    <circle cx={10} cy={10} r={10} fill='#BDB8BA' />
    <rect width={2} height={10} x={9} y={5} fill='#E1DEDF' rx={1} />
    <rect width={2} height={10} x={5} y={11} fill='#E1DEDF' rx={1} transform='rotate(-90 5 11)' />
  </svg>
);
export default SvgIcAdd;
