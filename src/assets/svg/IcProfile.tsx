import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 40 40' {...props}>
    <path
      stroke='#868384'
      strokeLinecap='round'
      strokeWidth={1.5}
      d='M24 16a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z'
    />
    <path
      stroke='#868384'
      strokeWidth={1.5}
      d='M12 28.4a5.4 5.4 0 0 1 5.4-5.4h5.2a5.4 5.4 0 0 1 5.4 5.4.6.6 0 0 1-.6.6H12.6a.6.6 0 0 1-.6-.6Z'
    />
  </svg>
);
export default SvgIcProfile;
