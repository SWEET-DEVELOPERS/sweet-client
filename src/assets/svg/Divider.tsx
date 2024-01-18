import type { SVGProps } from 'react';
const SvgDivider = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 1 10' {...props}>
    <path fill='#EBE9EA' d='M0 0h1v10H0z' />
  </svg>
);
export default SvgDivider;
