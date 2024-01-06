import { useMobile } from '../../hooks/useMobile';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function Layout() {
  const isMobile = useMobile();

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
