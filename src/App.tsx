import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './style/GlobalStyle';
import styled from 'styled-components';
import Router from './router/Router';

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  );
  return (
    <Wrapper>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Router />
          <GlobalStyle />
        </RecoilRoot>
      </QueryClientProvider>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background-color: white;
  border: none;
  min-height: calc(var(--vh, 1vh) * 100);
  /* min-width: var(--app-max-width, 375px); */
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;
