import Mypage from '../pages/Mypage';
import Start from '../pages/Start/Start';
import Login from '../components/Login';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';

// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Start />} />
//         <Route path='/api/oauth/kakao/login' element={<Login />} />
//         <Route path='/mypage' element={<Mypage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

//export default Router;

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
        element: <Mypage />,
      },
      // {
      //   // 임의로 세부페이지 추가
      //   path: '/giftdetailfriends',
      //   element: <GiftHomeDetailFriends />,
      // },
      // {
      //   // 임의로 세부페이지 추가
      //   path: '/giftdetail2030',
      //   element: <GiftHomeDetail2030 />,
      // },
      // {
      //   path: '/onboarding',
      //   element: <OnBoardingPage />,
      // },
      // {
      //   path: '/tournamentPro',
      //   element: <TournamentOngoing />,
      // },
      // {
      //   path: '/tournament',
      //   element: <TournamentPage />,
      // },
    ],
  },
]);

export default router;
