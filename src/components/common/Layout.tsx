import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { setScreenSize } from '../../../utils/setScreenSize';
import Footer from './Footer';
import Header from './Header';

export default function Layout() {
  useEffect(() => {
    setScreenSize(); // 화면 크기 조절 함수 호출
  }, []);

  useEffect(() => {
    const onResize = () => {
      setScreenSize(); // 화면 크기가 변경될 때마다 함수 호출
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <LayoutWrapper>
      <Header />
      <Outlet />
      <Footer />
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
