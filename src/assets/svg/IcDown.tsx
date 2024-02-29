import type { SVGProps } from 'react';
const SvgIcDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 40 40' {...props}>
    <path
      stroke={props.stroke || '#FF2176'}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='m11.667 16.667 8.335 7.633 8.332-7.633'
    />
  </svg>
);
export default SvgIcDown;
