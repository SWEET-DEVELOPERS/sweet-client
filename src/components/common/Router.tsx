import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/Main";
import Mypage from "../../pages/Mypage";
import DashBoard from "./DashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/mypage",
        element: <Mypage />,
      },
    ],
  },
]);

export default router;
