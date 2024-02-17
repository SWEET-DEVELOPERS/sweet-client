import NavigateHeader from '../components/NavigateHeader/NavigateHeader';
import { useMobile } from '../hooks/useMobile';
import { Outlet } from 'react-router-dom';

export default function HeaderLayout() {
  useMobile();

  return (
    <>
      <NavigateHeader />
      <Outlet />
    </>
  );
}
