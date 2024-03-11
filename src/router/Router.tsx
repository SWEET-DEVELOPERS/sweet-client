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

import TournamentIntroContainer from '../components/Tournament/Intro/TournamentIntroContainer';
import GiftHome from '../pages/GiftHome/GiftHome';

import TournamentPage from '../pages/Tournament/TournamentPage';
import GiftAddPage from '../pages/GiftAdd/GiftAddPage';
import InvitationDeadline from '../components/OnBoardingSteps/invitationDeadline/InvitationDeadline';
import { AddGiftProvider } from '../context/AddGift/AddGiftContext';
import LoginError from '../pages/LoginError/LoginError';
import { OnboardingProvider } from '../context/Onboarding/OnboardingContext';
import ParticipantsView from '../pages/Participants/ParticipantsView';
import HomeMypageHeaderLayout from '../layouts/HomeMypageHeaderLayout';
import LeftIconHeaderLayout from '../layouts/LeftIconHeaderLayout';
import { UpdateGifteeNameProvider } from '../context/GifteeName/GifteeNameContext';
import { PreviewImageProvider } from '../context/Onboarding/PreviewImageContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <HomeMypageHeaderLayout />,
        children: [
          {
            path: '/mypage',
            element: <MyPage />,
          },
          {
            path: '/gift-home/:roomId',
            element: <GiftHome />,
          },

          {
            path: '/error',
            element: <LoginError />,
          },
          {
            path: '/tournament-ranking/:giftee/:roomId',
            element: <TournamentPage />,
          },
          {
            path: '/tournament/:giftee/:roomId',
            element: <TournamentIntroContainer />,
          },
        ],
      },
      {
        element: <LeftIconHeaderLayout />,
        children: [
          {
            path: '/editpage/:roomId',
            element: <EditRoom />,
          },
        ],
      },
      {
        path: '/',
        element: <Start />,
      },
      {
        path: '/api/oauth/kakao/login',
        element: <Login />,
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
          <PreviewImageProvider>
            <OnboardingProvider>
              <OnBoardingPage />
            </OnboardingProvider>
          </PreviewImageProvider>
        ),
      },
      {
        path: '/result/:invitationCode',
        element: <ParticipantsView />,
      },
      {
        path: '/add-gift/:roomId/:targetTime',
        element: (
          <AddGiftProvider>
            <UpdateGifteeNameProvider>
              <GiftAddPage />
            </UpdateGifteeNameProvider>
          </AddGiftProvider>
        ),
      },
      {
        path: '/deadline',
        element: <InvitationDeadline />,
      },
    ],
  },
]);

export default router;
