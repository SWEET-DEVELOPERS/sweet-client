import { css } from 'styled-components';
import SUIT_Bold from '../../assets/fonts/SUIT-Bold.ttf';
import SUIT_ExtraBold from '../../assets/fonts/SUIT-ExtraBold.ttf';
import SUIT_ExtraLight from '../../assets/fonts/SUIT-ExtraLight.ttf';
import SUIT_Heavy from '../../assets/fonts/SUIT-Heavy.ttf';
import SUIT_Light from '../../assets/fonts/SUIT-Light.ttf';
import SUIT_Medium from '../../assets/fonts/SUIT-Medium.ttf';
import SUIT_Regular from '../../assets/fonts/SUIT-Regular.ttf';
import SUIT_Thin from '../../assets/fonts/SUIT-Thin.ttf';
import SUIT_SemiBold from '../../assets/fonts/SUIT-SemiBold.ttf';

export default css`
  @font-face {
    font-family: 'SUIT';
    src:
      local('SUIT'),
      url(${SUIT_Bold}) format('truetype');
  }
  @font-face {
    font-family: 'SUIT';
    src: local('SUIT') url(${SUIT_ExtraBold}) format('truetype');
  }
  @font-face {
    font-family: 'SUIT';
    src: local('SUIT') url(${SUIT_ExtraLight}) format('truetype');
  }
  @font-face {
    font-family: 'SUIT';
    src: local('SUIT') url(${SUIT_Heavy}) format('truetype');
  }
  @font-face {
    font-family: 'SUIT';
    src: local('SUIT') url(${SUIT_Light}) format('truetype');
  }
  @font-face {
    font-family: 'SUIT';
    src: local('SUIT') url(${SUIT_Medium}) format('truetype');
  }
  @font-face {
    font-family: 'SUIT';
    src: local('SUIT') url(${SUIT_Regular}) format('truetype');
  }
  @font-face {
    font-family: 'SUIT';
    src: local('SUIT') url(${SUIT_SemiBold}) format('truetype');
  }
  @font-face {
    font-family: 'SUIT';
    src: local('SUIT') url(${SUIT_Thin}) format('truetype');
  }
`;
