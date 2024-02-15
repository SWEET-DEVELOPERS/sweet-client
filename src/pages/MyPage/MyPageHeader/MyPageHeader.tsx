import { useState } from 'react';
import { IcCancel, IcMenu } from '../../../assets/svg';
import { useNavigate } from 'react-router-dom';
import * as S from './MyPageHeader.style';

const MyPageHeader = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSettingIcon = () => {
    setSidebarOpen(!isSidebarOpen);
    navigate(`/mypage`);
  };
  const handleSettingHomeIcon = () => {
    setSidebarOpen(!isSidebarOpen);
    navigate(`/`);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <S.StartHeaderWrapper>
      <S.SidebarWrapper isOpen={isSidebarOpen}>
        <S.ImgWrapper>
          <IcCancel style={{ width: '2.8rem' }} onClick={toggleSidebar} />
        </S.ImgWrapper>

        <S.Sidebar>
          <p onClick={handleSettingHomeIcon}>홈</p>
          <p onClick={handleSettingIcon}>마이페이지</p>
        </S.Sidebar>
      </S.SidebarWrapper>

      {isSidebarOpen ? (
        <IcCancel style={{ width: '2.8rem' }} onClick={toggleSidebar} />
      ) : (
        <IcMenu style={{ width: '2.8rem' }} onClick={toggleSidebar} />
      )}
    </S.StartHeaderWrapper>
  );
};

export default MyPageHeader;
