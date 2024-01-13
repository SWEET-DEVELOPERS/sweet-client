import type { SVGProps } from 'react';
const SvgIcEmptyThumbnail = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 240 240' {...props}>
    <g filter='url(#ic_empty_thumbnail_svg__a)'>
      <rect width={240} height={240} fill='#F8F8F8' rx={12} />
    </g>
    <path
      fill='#CAC6C8'
      d='M105.211 135.844a1.5 1.5 0 0 0 2.121 2.122zm10.343-8.222 1.061-1.06a1.5 1.5 0 0 0-2.121 0zm4.642 4.642-1.061 1.06a1.5 1.5 0 0 0 2.121 0zm10.443-10.443 1.06-1.061a1.5 1.5 0 0 0-2.121 0zm8.222 10.343a1.5 1.5 0 1 0 2.121-2.121zm-31.529 5.802 9.283-9.283-2.121-2.121-9.283 9.282zm7.162-9.283 4.641 4.641 2.121-2.121-4.641-4.641zm6.762 4.641 10.443-10.443-2.121-2.121-10.443 10.443zm8.322-10.443 9.283 9.283 2.121-2.121-9.283-9.283zm-18.665-18.126h23.207v-3h-23.207zm28.669 5.462v23.207h3v-23.207zm-5.462 28.669h-23.207v3h23.207zm-28.669-5.462v-23.207h-3v23.207zm5.462 5.462a5.463 5.463 0 0 1-5.462-5.462h-3a8.463 8.463 0 0 0 8.462 8.462zm28.669-5.462a5.463 5.463 0 0 1-5.462 5.462v3a8.463 8.463 0 0 0 8.462-8.462zm-5.462-28.669a5.463 5.463 0 0 1 5.462 5.462h3a8.463 8.463 0 0 0-8.462-8.462zm-23.207-3a8.463 8.463 0 0 0-8.462 8.462h3a5.463 5.463 0 0 1 5.462-5.462zm5.462 11.943a1.98 1.98 0 0 1-1.981 1.981v3a4.98 4.98 0 0 0 4.981-4.981zm-1.981 1.981a1.98 1.98 0 0 1-1.981-1.981h-3a4.98 4.98 0 0 0 4.981 4.981zm-1.981-1.981c0-1.094.887-1.981 1.981-1.981v-3a4.98 4.98 0 0 0-4.981 4.981zm1.981-1.981c1.094 0 1.981.887 1.981 1.981h3a4.98 4.98 0 0 0-4.981-4.981z'
    />
    <circle cx={141.413} cy={103.587} r={9.283} fill='#BDB8BA' />
    <rect width={1.857} height={9.283} x={140.485} y={98.946} fill='#F8F8F8' rx={0.928} />
    <rect
      width={1.857}
      height={9.283}
      x={136.772}
      y={104.516}
      fill='#F8F8F8'
      rx={0.928}
      transform='rotate(-90 136.772 104.516)'
    />
    <defs>
      <filter
        id='ic_empty_thumbnail_svg__a'
        width={280}
        height={280}
        x={-20}
        y={-20}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feGaussianBlur in='BackgroundImageFix' stdDeviation={10} />
        <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_1094_29288' />
        <feBlend in='SourceGraphic' in2='effect1_backgroundBlur_1094_29288' result='shape' />
      </filter>
    </defs>
  </svg>
);
export default SvgIcEmptyThumbnail;
