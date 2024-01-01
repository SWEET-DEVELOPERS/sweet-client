
import { RecoilRoot } from "recoil";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { setScreenSize } from "../utils/setScreenSize";
import "./App.css";
import router from "./components/common/Router";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <>
<RecoilRoot>
      <RouterProvider router={router} />      <GlobalStyle />
      <GlobalEvent />
      </RecoilRoot>
    </>
  );
}


export default App;


const GlobalEvent = () => {
  useEffect(() => {
    setScreenSize();
  }, []);

  useEffect(() => {
    const onResize = () => {
      setScreenSize();
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return null;
};
