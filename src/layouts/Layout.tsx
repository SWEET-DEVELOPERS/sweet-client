import { useMobile } from '../hooks/useMobile';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  useMobile();

  return (
    <>
      <Outlet />
    </>
  );
}
