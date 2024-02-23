import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import router from './router/Router';
import GlobalStyle from './style/GlobalStyle';
import { styled } from 'styled-components';
import Loading from './pages/Loading/Loading';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import FallbackUI from './pages/FallbackUI/FallbackUI';
import 'react-toastify/dist/ReactToastify.css';
import { StyledToastContainer } from './style/toast.style';

function App() {
  const Wrapper = styled.div`
    background-color: white;
    border: none;
  `;
  const queryClient = new QueryClient();

  return (
    <Wrapper>
      <QueryClientProvider client={queryClient}>
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary onReset={() => reset()} FallbackComponent={FallbackUI}>
              <Suspense fallback={<Loading />}>
                <RouterProvider router={router} />
                <GlobalStyle />
                <StyledToastContainer
                  position='bottom-center'
                  autoClose={3000}
                  hideProgressBar
                  closeButton={false}
                  closeOnClick={false}
                  pauseOnHover={false}
                  draggable={false}
                  rtl={false}
                  pauseOnFocusLoss={false}
                  limit={1}
                />
              </Suspense>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </QueryClientProvider>
    </Wrapper>
  );
}

export default App;
