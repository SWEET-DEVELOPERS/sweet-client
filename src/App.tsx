import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import router from './router/Router';
import GlobalStyle from './style/GlobalStyle';
import Loading from './pages/Loading/Loading';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import FallbackUI from './pages/FallbackUI/FallbackUI';
import 'react-toastify/dist/ReactToastify.css';
import { StyledToastContainer } from './style/toast.style';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import * as S from './App.style';

function App() {
  const queryClient = new QueryClient();

  return (
    <S.Wrapper>
      <QueryClientProvider client={queryClient}>
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary onReset={() => reset()} FallbackComponent={FallbackUI}>
              <Suspense fallback={<Loading />}>
                <RouterProvider router={router} />
                <Analytics />
                <SpeedInsights />
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
    </S.Wrapper>
  );
}

export default App;
