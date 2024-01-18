import { IcLogotypeFinal } from '../../../assets/svg';
import OnboardingFinalHeader from '../Step06/OnboardingFinalHeader';
import { useNavigate } from 'react-router-dom';
import * as S from './InvitationDeadline.style';

interface InvitationDeadlineProps {
  onClick: () => void;
}

const InvitationDeadline = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return (
    <>
      <OnboardingFinalHeader />
      <S.InvitationDeadlineWrapper>
        <IcLogotypeFinal style={{ width: '16.4rem', height: '4.2rem' }} />
        <S.Text>초대가 마감 되었어요</S.Text>
        <S.GoHomeBtnWrapper onClick={handleClick}>
          <S.GoHomeBtnText>홈으로 가기</S.GoHomeBtnText>
        </S.GoHomeBtnWrapper>
      </S.InvitationDeadlineWrapper>
    </>
  );
};

export default InvitationDeadline;
