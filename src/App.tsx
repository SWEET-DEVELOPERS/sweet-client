import { useEffect } from "react";
import GlobalStyle from "./style/GlobalStyle";
import { setScreenSize } from "../utils/setScreenSize";

function App() {
  return (
    <>
      <GlobalStyle />
      <GlobalEvent />
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
