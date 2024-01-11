import { createBrowserRouter } from 'react-router-dom';
import Mypage from '../pages/Mypage';
import Layout from '../layouts/Layout';
import GiftHomeDetailFriends from '../pages/GiftHomeDetail/GiftHomeDetailFriends';
import GiftHomeDetail2030 from '../pages/GiftHomeDetail/GiftHomeDetail2030';
import OnBoardingPage from '../pages/OnBoardingPage';
import TournamentOngoing from '../pages/TournamentOngoing';
import TournamentPage from '../pages/TournamentPage';
import Start from '../pages/Start/Start';
import Login from '../components/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Start />,
      },
      {
        path: '/api/oauth/kakao/login?',
        element: <Login />,
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
      {
        path: '/tournamentPro',
        element: <TournamentOngoing />,
      },
      {
        path: '/tournament',
        element: <TournamentPage />,
      },
    ],
  },
]);

export default router;
