import { createBrowserRouter } from 'react-router-dom';
import Main from '../../pages/Main';
import Mypage from '../../pages/Mypage';
import Layout from './Layout';

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
    ],
  },
]);

export default router;
