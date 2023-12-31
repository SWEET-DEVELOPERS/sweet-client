import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import Mypage from '../pages/Mypage';
import Layout from '../layouts/Layout';
import GiftHomeDetailFriends from '../pages/GiftHomeDetail/GiftHomeDetailFriends';
import GiftHomeDetail2030 from '../pages/GiftHomeDetail/GiftHomeDetail2030';
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
        // 임의로 세부페이지 추가
        path: '/giftdetailfriends',
        element: <GiftHomeDetailFriends />,
      },
      {
        // 임의로 세부페이지 추가
        path: '/giftdetail2030',
        element: <GiftHomeDetail2030 />,
      },
      {
        path: '/onboarding',
        element: <OnBoardingPage />,
      },
    ],
  },
]);

export default router;
