import GiftHomeDetailFriends from '../pages/GiftHomeDetail/GiftHomeDetailFriends';
import GiftHomeDetail2030 from '../pages/GiftHomeDetail/GiftHomeDetail2030';
import OnBoardingPage from '../pages/OnBoardingPage';
import Start from '../pages/Start/Start';
import Login from '../components/Login';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import MyPage from '../pages/MyPage/MyPage';
import EditRoom from '../pages/MyPage/EditRoom/EditRoom';
import DetailProgressRoom from '../pages/MyPage/Detail/DetailProgressRoom/DetailProgressRoom';
import DetailDoneRoom from '../pages/MyPage/Detail/DetailDoneRoom/DetailDoneRoom';
import GiftAddPage from '../pages/GiftAdd/GiftAddPage';
import TournamentContainer from '../components/TournamentNew/Intro/TournamentContainer';
import GiftHome from '../pages/GiftHome/GiftHome';

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
        path: '/api/oauth/kakao/login',
        element: <Login />,
      },
      {
        path: '/mypage',
        element: <MyPage />,
      },
      {
        path: '/editpage',
        element: <EditRoom />,
      },
      {
        path: '/detail-progress',
        element: <DetailProgressRoom />,
      },
      {
        path: '/detail-done',
        element: <DetailDoneRoom />,
      },
      {
        path: '/gift-home',
        element: <GiftHome roomId={1} />,
      },
      {
        path: '/gift-detail-friends',
        element: <GiftHomeDetailFriends roomId={1} />,
      },
      {
        path: '/gift-detail-2030',
        element: <GiftHomeDetail2030 roomId={1} />,
      },
      {
        path: '/onboarding',
        element: <OnBoardingPage />,
      },
      {
        path: '/tournament',
        element: <TournamentContainer />,
      },
      {
        path: '/add-gift',
        element: <GiftAddPage />,
      },
    ],
  },
]);

export default router;
