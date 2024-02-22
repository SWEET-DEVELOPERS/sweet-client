import LeftIconHeader from '../components/LeftIconHeader/LeftIconHeader';
import { useMobile } from '../hooks/useMobile';
import { Outlet } from 'react-router-dom';

const LeftIconHeaderLayout = () => {
  useMobile();

  return (
    <>
      <LeftIconHeader />
      <Outlet />
    </>
  );
};

export default LeftIconHeaderLayout;
