import type { SVGProps } from 'react';
const SvgKakaoLo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 17' {...props}>
    <g clipPath='url(#kakaoLo_svg__a)'>
      <path
        fill='#222'
        fillRule='evenodd'
        d='M8.5.567C3.805.567 0 3.507 0 7.133c0 2.255 1.472 4.243 3.713 5.426l-.943 3.444c-.083.305.265.547.532.371l4.134-2.728q.523.051 1.064.053c4.694 0 8.5-2.94 8.5-6.566S13.194.567 8.5.567'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='kakaoLo_svg__a'>
        <path fill='#fff' d='M0 0h17v17H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgKakaoLo;
