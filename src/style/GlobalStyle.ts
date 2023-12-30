import { createGlobalStyle, css } from "styled-components";

export const reset = css`
  * {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  :root {
    --vh: 100%;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

export const GlobalStyle = createGlobalStyle`

${reset}
#root, body, html {
    scrollbar-width: none; /* 파이어폭스 스크롤바 숨김 */
    max-width: 43rem;
    margin: 0 auto;
    -ms-overflow-style: none; /* 인터넷 익스플로러  스크롤바 숨김 */
    scrollbar-width: none; /* 파이어폭스 스크롤바 숨김 */
}
#root::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 스크롤바 숨김 */
}
`;

export default GlobalStyle;
