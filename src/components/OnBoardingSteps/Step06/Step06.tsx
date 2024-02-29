import Title from '../../common/title/Title';
import * as S from './Step06.style';
import {
  IcAfterTournamentProgressLine,
  IcBeforeTournamentProgressLine,
  IcOnboardingFinal,
} from '../../../assets/svg';
import { useEffect } from 'react';
import { useOnboardingContext } from '../../../context/Onboarding/OnboardingContext';
import useFormatDate from '../../../hooks/onboarding/useFormatDate';
import OnboardingFinalFooter from './OnboardingFinalFooter';
import { addHours, format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import OnboardingFinalHeader from './OnboardingFinalHeader';

interface OnboardingFinalProps {
  invitationCode: string;
  roomId: number;
}

const DURATION_MAPPING = {
  SIX_HOURS: 6,
  TWELVE_HOURS: 12,
  EIGHTEEN_HOURS: 18,
  TWENTY_FOUR_HOURS: 24,
};

const OnboardingFinal = (props: OnboardingFinalProps) => {
  const { invitationCode, roomId } = props;
  const { onboardingInfo } = useOnboardingContext();
  const { formatDuration, formatDate } = useFormatDate();
  const navigate = useNavigate();

  const navigateRoom = () => {
    navigate(`/gift-home/${roomId}`);
  };

  const tournamentEndDate = addHours(
    new Date(onboardingInfo.tournamentStartDate),
    DURATION_MAPPING[onboardingInfo.tournamentDuration as keyof typeof DURATION_MAPPING] as number,
  );
  const formattedEndDate = format(tournamentEndDate, 'yyyy-MM-dd');

  const isDeliveryBeforeEnd =
    new Date(onboardingInfo.deliveryDate).getTime() < tournamentEndDate.getTime();

  /** @see 카카오 공유하기를 위한 useEffect */
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      console.log('카카오 SDK 초기화 중...');
      window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
    }
  }, []);

  return (
    <>
      <OnboardingFinalHeader />
      <div>
        <S.OnboardingFinalWrapper>
          <div>
            <S.IconWrapper>
              <IcOnboardingFinal style={{ width: '6.4rem', height: '6.4rem' }} />
            </S.IconWrapper>
            <S.TitleWrapper>
              <Title>{`${onboardingInfo.gifteeName}님을 위한`}</Title>
            </S.TitleWrapper>
            <S.SecondTitleWrapper>
              <Title>선물 준비방이 개설됐어요</Title>
            </S.SecondTitleWrapper>
          </div>
          <S.ProgressLineAndDetailContainer>
            {isDeliveryBeforeEnd === false ? (
              <IcBeforeTournamentProgressLine
                style={{ width: '1.6rem', height: '24.1rem', marginTop: '3.5rem' }}
              />
            ) : (
              <IcAfterTournamentProgressLine
                style={{ width: '1.6rem', height: '24.1rem', marginTop: '3.5rem' }}
              />
            )}

            <S.DetailWrapper>
              <S.InfoContainer>
                <S.InfoContainerTitle>선물 등록 마감</S.InfoContainerTitle>
                <S.InfoContainerDetail>
                  {formatDate(onboardingInfo.tournamentStartDate)}
                </S.InfoContainerDetail>
              </S.InfoContainer>

              <S.TournamentProceedWrapper>
                <S.InfoContainerTitle>토너먼트 진행</S.InfoContainerTitle>
                <S.InfoContainerDetail>
                  {formatDuration(onboardingInfo.tournamentDuration)}
                </S.InfoContainerDetail>
              </S.TournamentProceedWrapper>

              <>
                <S.InfoContainer>
                  <S.InfoContainerTitle>토너먼트 종료</S.InfoContainerTitle>
                  <S.InfoContainerDetail>
                    {formatDate(formattedEndDate, false)}
                  </S.InfoContainerDetail>
                </S.InfoContainer>

                <S.InfoContainerPresent>
                  <S.InfoContainerTitle>선물 전달</S.InfoContainerTitle>
                  <S.InfoContainerDetail>
                    {formatDate(onboardingInfo.deliveryDate, false)}
                  </S.InfoContainerDetail>
                </S.InfoContainerPresent>
              </>
            </S.DetailWrapper>
          </S.ProgressLineAndDetailContainer>
          <OnboardingFinalFooter
            invitationCode={invitationCode}
            roomId={roomId}
            onClick={navigateRoom}
            giftee={onboardingInfo.gifteeName}
          />
        </S.OnboardingFinalWrapper>
      </div>
    </>
  );
};
export default OnboardingFinal;
