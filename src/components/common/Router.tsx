import { createBrowserRouter } from 'react-router-dom';
import Main from '../../pages/Main';
import Mypage from '../../pages/Mypage';
import DashBoard from './DashBoard';
import Onboarding from '../../pages/Onboarding';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashBoard />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/mypage',
        element: <Mypage />,
      },
      { path: '/pretask', element: <Onboarding /> },
    ],
  },
]);

export default router;
