import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import Mypage from '../pages/Mypage';
import Layout from '../layouts/Layout';
import GiftHome from '../pages/GiftHome/GiftHome';

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
        // 임의로 선물방 홈 페이지 연결
        path: '/gifthome',
        element: <GiftHome />,
      },
    ],
  },
]);

export default router;
