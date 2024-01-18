import { useState } from 'react';
import { IcCancel, IcMenu, SweetLogoPink } from '../../../assets/svg';
import * as S from './StartHeader.style';

const StartHeader = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    console.log('눌렀다!');
  };

  return (
    <S.StartHeaderWrapper>
      <S.SidebarWrapper isOpen={isSidebarOpen}>
        <S.Sidebar>
          <h2>홈</h2>
          <h2>마이페이지</h2>
        </S.Sidebar>
      </S.SidebarWrapper>
      <SweetLogoPink style={{ width: '9.9rem' }} />
      {isSidebarOpen ? (
        <IcCancel style={{ width: '2.8rem' }} onClick={toggleSidebar} />
      ) : (
        <IcMenu style={{ width: '2.8rem' }} onClick={toggleSidebar} />
      )}
    </S.StartHeaderWrapper>
  );
};

export default StartHeader;
