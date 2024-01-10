import type { SVGProps } from 'react';
const SvgIcCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' {...props}>
    <rect width={23} height={23} x={0.5} y={0.5} stroke='#EBE9EA' rx={11.5} />
  </svg>
);
export default SvgIcCircle;
