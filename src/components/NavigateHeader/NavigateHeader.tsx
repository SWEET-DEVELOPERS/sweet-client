import { IcHome, IcProfile } from '../../assets/svg';
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
      <S.IconWrapper>
        <IcHome style={{ width: '4.3rem' }} onClick={handleSettingHomeIcon} />
        <IcProfile style={{ width: '4.3rem' }} onClick={handleMyPageIcon} />
      </S.IconWrapper>
    </S.NavigateHeaderWrapper>
  );
};

export default NavigateHeader;
