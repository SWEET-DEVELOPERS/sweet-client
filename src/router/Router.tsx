import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import Mypage from '../pages/Mypage';
import Layout from '../layouts/Layout';
import OnBoardingName from '../pages/onBoarding/OnBoardingName';
import OnBoardingThumbnail from '../pages/onBoarding/OnBoardingThumbnail';
import OnBoardingGift from '../pages/onBoarding/OnBoardingGift';
import TournamentSchedule from '../pages/onBoarding/TournamentSchedule';
import TournamentDuration from '../pages/onBoarding/TournamentDuration';

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
        path: '/name-input',
        element: <OnBoardingName />,
      },
      {
        path: '/thumbnail-input',
        element: <OnBoardingThumbnail />,
      },
      {
        path: '/gift-input',
        element: <OnBoardingGift />,
      },
      {
        path: '/tournament-input',
        element: <TournamentSchedule />,
      },
      {
        path: '/tournament-Duration',
        element: <TournamentDuration />,
      },
    ],
  },
]);

export default router;
