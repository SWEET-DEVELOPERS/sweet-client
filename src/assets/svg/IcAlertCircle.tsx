import type { SVGProps } from 'react';
const SvgIcAlertCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' {...props}>
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M12 12V7.5m0 7.835v.04'
    />
  </svg>
);
export default SvgIcAlertCircle;
