import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import Mypage from '../pages/Mypage';
import Layout from '../layouts/Layout';
import OnBoardingPage from '../pages/OnBoardingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/mypage',
        element: <Mypage />,
      },
      {
        path: '/onboarding',
        element: <OnBoardingPage />,
      },
    ],
  },
]);

export default router;
