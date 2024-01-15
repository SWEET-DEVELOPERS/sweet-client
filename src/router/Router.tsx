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
import GiftHome from '../pages/GiftHome/GiftHome';
import GiftAddPage from '../pages/GiftAdd/GiftAddPage';
import TournamentContainer from '../components/TournamentNew/Intro/TournamentContainer';

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
        // 임의로 선물방 홈 페이지 연결
        path: '/gifthome',
        element: <GiftHome />,
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
        path: '/tournament',
        element: <TournamentContainer />,
      },
      {
        path: '/addgift',
        element: <GiftAddPage />,
      },
    ],
  },
]);

export default router;
