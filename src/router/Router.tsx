import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import Mypage from '../pages/Mypage';
import Layout from '../layouts/Layout';
import OnBoardingPage from '../pages/OnBoardingPage';
import GiftAddPage from '../pages/GiftAddPage/GiftAddPage';

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
      {
        path: '/giftadd',
        element: <GiftAddPage />,
      },
    ],
  },
]);

export default router;
