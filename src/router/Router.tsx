import GiftHomeDetailFriends from '../pages/GiftHomeDetail/GiftHomeDetailFriends';
import GiftHomeDetail2030 from '../pages/GiftHomeDetail/GiftHomeDetail';
import OnBoardingPage from '../pages/OnBoardingPage';
import Start from '../pages/Start/Start';
import Login from '../components/Login';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import MyPage from '../pages/MyPage/MyPage';
import EditRoom from '../pages/MyPage/EditRoom/EditRoom';
import DetailProgressRoom from '../pages/MyPage/Detail/DetailProgressRoom/DetailProgressRoom';
import DetailDoneRoom from '../pages/MyPage/Detail/DetailDoneRoom/DetailDoneRoom';

import TournamentIntroContainer from '../components/Tournament/Intro/TournamentIntroContainer';
import GiftHome from '../pages/GiftHome/GiftHome';

import TournamentPage from '../pages/Tournament/TournamentPage';
import GiftAddPage from '../pages/GiftAdd/GiftAddPage';
import InvitationDeadline from '../components/OnBoardingSteps/invitationDeadline/InvitationDeadline';
import ParticipantsView from '../pages/Participants/ParticipantsView';
import { OnboardingProvider } from '../context/Onboarding/OnboardingContext';

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
        path: '/editpage/:roomId',
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
        path: '/gift-home/:roomId',
        element: <GiftHome />,
      },
      {
        path: '/gift-detail-friends/:roomId/:targetDate',
        element: <GiftHomeDetailFriends />,
      },
      {
        path: '/gift-detail-2030/:roomId/:targetDate',
        element: <GiftHomeDetail2030 />,
      },
      {
        path: '/onboarding',
        element: (
          <OnboardingProvider>
            <OnBoardingPage />
          </OnboardingProvider>
        ),
      },
      {
        path: '/result/:invitationCode',
        element: <ParticipantsView />,
      },
      {
        path: '/tournament/:giftee/:roomId',
        element: <TournamentIntroContainer />,
      },
      {
        path: '/tournament-ranking/:giftee/:roomId',
        element: <TournamentPage />,
      },
      {
        path: '/add-gift/:roomId/:targetTime',
        element: <GiftAddPage />,
      },
      {
        path: '/deadline',
        element: <InvitationDeadline />,
      },
    ],
  },
]);

export default router;
