import { css } from 'styled-components';
import SUIT_Regular from '../../assets/fonts/SUIT-Regular.ttf';
import SUIT_SemiBold from '../../assets/fonts/SUIT-SemiBold.ttf';

export default css`
  @font-face {
    font-family: 'SUIT';
    src: local('SUIT') url(${SUIT_Regular}) format('truetype');
    font-weight: 400;
  }
  @font-face {
    font-family: 'SUIT';
    src: local('SUIT') url(${SUIT_SemiBold}) format('truetype');
    font-weight: 600;
  }
`;
