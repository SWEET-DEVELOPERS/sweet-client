import HomeMypageHeader from '../components/HomeMypageHeader/HomeMypageHeader';
import { useMobile } from '../hooks/useMobile';
import { Outlet } from 'react-router-dom';

const HomeMypageHeaderLayout = () => {
  useMobile();

  return (
    <>
      <HomeMypageHeader />
      <Outlet />
    </>
  );
};

export default HomeMypageHeaderLayout;
