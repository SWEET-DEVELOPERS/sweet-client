import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`

${reset}

 a{
  text-decoration: none;
 }

 * {
  box-sizing: border-box;
 }

 button {
  cursor: pointer;
 }

 :root {
  --vh: 100%
 }
#root, body, html {
    scrollbar-width: none; /* 파이어폭스 스크롤바 숨김 */
    
    margin: 0 auto;
    padding:0;
    font-size: 62.5%;
    -ms-overflow-style: none; /* 인터넷 익스플로러  스크롤바 숨김 */
    scrollbar-width: none; /* 파이어폭스 스크롤바 숨김 */
}
#root::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 스크롤바 숨김 */
}
`;

export default GlobalStyle;
