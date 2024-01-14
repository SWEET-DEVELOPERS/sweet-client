import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import router from './router/Router';
import GlobalStyle from './style/GlobalStyle';
import { styled } from 'styled-components';

function App() {
  const Wrapper = styled.div`
    background-color: white;
    border: none;
    min-height: calc(var(--vh, 1vh) * 100);
    margin-left: auto;
    margin-right: auto;
    position: relative;
  `;
  const queryClient = new QueryClient();

  return (
    <Wrapper>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <GlobalStyle />
        </QueryClientProvider>
      </RecoilRoot>
    </Wrapper>
  );
}

export default App;
