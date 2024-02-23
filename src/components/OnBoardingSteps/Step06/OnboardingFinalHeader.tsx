import { useNavigate } from 'react-router';
import * as S from './OnboardingFinalHeader.style';
import { useState } from 'react';
import { IcHome, IcProfile } from '../../../assets/svg';

const OnboardingFinalHeader = () => {
  const navigate = useNavigate();
  const [isTop, setIsTop] = useState(true);

  const handleMyPageIcon = () => {
    navigate(`/mypage`);
  };

  const handleSettingHomeIcon = () => {
    navigate(`/`);
  };

  return (
    <S.OnboardingFinalHeaderWrapper style={{ backgroundColor: isTop ? 'transparent' : 'white' }}>
      <IcHome style={{ width: '4.3rem' }} onClick={handleSettingHomeIcon} />

      <IcProfile style={{ width: '4.3rem' }} onClick={handleMyPageIcon} />
    </S.OnboardingFinalHeaderWrapper>
  );
};

export default OnboardingFinalHeader;
