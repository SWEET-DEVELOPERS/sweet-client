import { IcMypage, IcHome2 } from '../../assets/svg';
import { useNavigate } from 'react-router';
import * as S from './NavigateHeader.style';

const NavigateHeader = () => {
  const navigate = useNavigate();

  const handleMyPageIcon = () => {
    navigate(`/mypage`);
  };
  const handleSettingHomeIcon = () => {
    navigate(`/`);
  };

  return (
    <S.NavigateHeaderWrapper>
      <IcHome2 style={{ width: '2.4rem' }} onClick={handleSettingHomeIcon} />
      <IcMypage style={{ width: '4.3rem' }} onClick={handleMyPageIcon} />
    </S.NavigateHeaderWrapper>
  );
};

export default NavigateHeader;