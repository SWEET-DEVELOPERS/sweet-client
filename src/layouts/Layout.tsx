import { useMobile } from '../hooks/useMobile';
import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';

export default function Layout() {
  useMobile();

  return (
    <>
      <Outlet />
    </>
  );
}
