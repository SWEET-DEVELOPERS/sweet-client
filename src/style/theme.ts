import mixin from './mixin';
import { css } from 'styled-components';

const colors = {
  white: '#FFFFFF',
  black: '#222222',
  gray_01: '#F8F8F8',
  gray_02: '#EBE9EA',
  gray_03: '#E1DEDF',
  gray_04: '#D3CFD1',
  gray_05: '#CAC6C8',
  gray_06: '#BDB8BA',
  gray_07: '#ACA7A9',
  gray_08: '#868384',
  gray_09: '#686566',
  gray_10: '#4F4D4E',
  pink_01: '#FFE9F1',
  pink_02: '#FFBAD5',
  pink_03: '#FF99C0',
  pink_04: '#FF6AA3',
  pink_05: '#FF4D91',
  pink_06: '#FF2176',
  pink_07: '#E81E6B',
  pink_08: '#B51754',
  pink_09: '#8C1241',
  pink_10: '#6B0E32',
  semantic_red_01: '#FFEDED',
  semantic_red_02: '#FF4A4A',
  semantic_blue_01: 'E5F9E6',
  semantic_blue_02: '2CCB32',
};

const fonts = {
  title: css`
    font-family: 'SUIT';
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  `,
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
};

const theme = { mixin, colors, fonts };

export default theme;
