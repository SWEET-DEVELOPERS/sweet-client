import { useMobile } from '../hooks/useMobile';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  useMobile();

  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
