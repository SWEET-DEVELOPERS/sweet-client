import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import router from './router/Router';
import GlobalStyle from './style/GlobalStyle';
import { styled } from 'styled-components';
import Loading from './pages/Loading/Loading';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import FallbackUI from './pages/FallbackUI/FallbackUI';

function App() {
  const Wrapper = styled.div`
    background-color: white;
    border: none;
    min-height: calc(var(--vh, 1vh) * 100);
    margin-left: auto;
    margin-right: auto;
  `;
  const queryClient = new QueryClient();

  return (
    <Wrapper>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary onReset={() => reset()} FallbackComponent={FallbackUI}>
                <Suspense fallback={<Loading />}>
                  <RouterProvider router={router} />
                  <GlobalStyle />
                </Suspense>
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
        </QueryClientProvider>
      </RecoilRoot>
    </Wrapper>
  );
}

export default App;
