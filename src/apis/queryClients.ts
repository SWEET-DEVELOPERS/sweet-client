import { QueryClient } from '@tanstack/react-query';

/**
 * @name global queryClient
 */
export const queryClient = new QueryClient({
  // defaultOptions: {
  //   // queries: {
  //   //   suspense: true,
  //   //   retry: 1,
  //   //   refetchOnWindowFocus: false,
  //   //   refetchOnMount: false,
  //   //   useErrorBoundary: true,
  //   // },
  // },
});
