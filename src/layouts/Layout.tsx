import { useMobile } from '../hooks/useMobile';
import { Outlet } from 'react-router-dom';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

export default function Layout() {
  useMobile();

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
