import { useMobile } from '../hooks/useMobile';
import { Outlet } from 'react-router-dom';
import StartHeader from '../components/LogoHeader/LogoHeader';

export default function HeaderLayout() {
  useMobile();

  return (
    <>
      <StartHeader />
      <Outlet />
    </>
  );
}
