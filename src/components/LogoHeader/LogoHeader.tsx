import { IcMenu, SweetLogoPink } from '../../assets/svg';
import { useNavigate } from 'react-router';
import * as S from './LogoHeader.style';

const LogoHeader = () => {
  const navigate = useNavigate();

  const handleMyPageIcon = () => {
    navigate(`/mypage`);
  };
  const handleSettingHomeIcon = () => {
    navigate(`/`);
  };

  return (
    <S.LogoHeaderWrapper>
      <SweetLogoPink style={{ width: '9.9rem' }} onClick={handleSettingHomeIcon} />

      <IcMenu style={{ width: '2.8rem' }} onClick={handleMyPageIcon} />
    </S.LogoHeaderWrapper>
  );
};

export default LogoHeader;
