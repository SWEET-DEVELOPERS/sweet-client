import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './App.css';
import router from './components/common/Router';
import GlobalStyle from './style/GlobalStyle';

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
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RouterProvider router={router} />
        <GlobalStyle />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
