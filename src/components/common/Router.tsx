import { createBrowserRouter } from 'react-router-dom';
import Main from '../../pages/Main';
import Mypage from '../../pages/Mypage';
import AddGift from '../../pages/AddGift';
import Layout from '../../layouts/Layout';

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
        path: '/addgift',
        element: <AddGift />,
      },
    ],
  },
]);

export default router;
