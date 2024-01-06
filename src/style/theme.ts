import mixin from './mixin';
import { css } from 'styled-components';

const colors = {
  Basic: {
    white: '#FFFFFF',
    black: '#222222',
  },
  Grayscale: {
    G_01: '#F8F8F8',
    G_02: '#EBE9EA',
    G_03: '#E1DEDF',
    G_04: '#D3CFD1',
    G_05: '#CAC6C8',
    G_06: '#BDB8BA',
    G_07: '#ACA7A9',
    G_08: '#868384',
    G_09: '#686566',
    G_10: '#4F4D4E',
  },
  Main: {
    Pink: {
      P_01: '#FFE9F1',
      P_02: '#FFBAD5',
      P_03: '#FF99C0',
      P_04: '#FF6AA3',
      P_05: '#FF4D91',
      P_06: '#FF2176',
      P_07: '#E81E6B',
      P_08: '#B51754',
      P_09: '#8C1241',
      P_10: '#6B0E32',
    },
  },
  Semantic: {
    Red: {
      R_01: '#FFEDED',
      R_02: '#FF4A4A',
    },
    Blue: {
      B_01: 'E5F9E6',
      B_02: '2CCB32',
    },
  },
};

const fonts = {
  Title: css`
    font-family: 'SUIT';
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  `,
  Heading: {
    heading_01: css`
      font-family: 'SUIT';
      font-size: 2.2rem;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
    `,
    heading_02: css`
      font-family: 'SUIT';
      font-size: 2.2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    `,
    heading_03: css`
      font-family: 'SUIT';
      font-size: 2rem;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
    `,
    heading_04: css`
      font-family: 'SUIT';
      font-size: 2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    `,
  },
  Body: {
    body_01: css`
      font-family: 'SUIT';
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
    `,
    body_02: css`
      font-family: 'SUIT';
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    `,
    body_03: css`
      font-family: 'SUIT';
      font-size: 1.7rem;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
    `,
    body_04: css`
      font-family: 'SUIT';
      font-size: 1.7rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    `,
    body_05: css`
      font-family: 'SUIT';
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
    `,
    body_06: css`
      font-family: 'SUIT';
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    `,
    body_07: css`
      font-family: 'SUIT';
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
    `,
    body_08: css`
      font-family: 'SUIT';
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    `,
    body_09: css`
      font-family: 'SUIT';
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
    `,
    body_10: css`
      font-family: 'SUIT';
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    `,
  },
  Caption: {
    caption_01: css`
      font-family: 'SUIT';
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
    `,
    caption_02: css`
      font-family: 'SUIT';
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    `,
    caption_03: css`
      font-family: 'SUIT';
      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
    `,
    caption_04: css`
      font-family: 'SUIT';
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    `,
  },
};

const theme = { mixin, colors, fonts };

export default theme;
