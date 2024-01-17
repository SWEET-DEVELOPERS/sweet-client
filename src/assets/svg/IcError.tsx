import type { SVGProps } from 'react';
const SvgIcError = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 100 100' {...props}>
    <rect width={100} height={100} fill='#F8F8F8' rx={50} />
    <path
      fill='#E1DEDF'
      d='m54 30-.91 28.084h-5.988L46 30zm-7.281 36.49c0-2.077 1.389-3.511 3.4-3.511 1.965 0 3.354 1.434 3.354 3.51 0 2.028-1.39 3.511-3.353 3.511-2.012 0-3.401-1.483-3.401-3.51'
    />
  </svg>
);
export default SvgIcError;
