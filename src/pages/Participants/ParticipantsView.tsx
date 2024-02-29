import * as S from '../../components/OnBoardingSteps/Step06/Step06.style';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Title from '../../components/common/title/Title';
import useGetGifteeInfo from '../../hooks/queries/onboarding/useGetGifteeInfo';
import { kakaoURL } from '../../utils/login';
import usePostParticipation from '../../hooks/queries/onboarding/usePostParticipation';
import btnKakao from '../../assets/img/btn_kakao.png';
import { IcAfterTournamentProgressLine, IcBeforeTournamentProgressLine } from '../../assets/svg';
import useFormatDate from '../../hooks/onboarding/useFormatDate';
import { addHours, format } from 'date-fns';
import OnboardingFinalFooter from '../../components/OnBoardingSteps/Step06/OnboardingFinalFooter';
import OnboardingFinalHeader from '../../components/OnBoardingSteps/Step06/OnboardingFinalHeader';
import { toast } from 'react-toastify';
import { MESSAGE } from '../../core/toast-messages';

const DURATION_MAPPING = {
  SIX_HOURS: 6,
  TWELVE_HOURS: 12,
  EIGHTEEN_HOURS: 18,
  TWENTY_FOUR_HOURS: 24,
};
const ParticipantsView = () => {
  const { invitationCode } = useParams<{ invitationCode?: string }>();
  const { data } = useGetGifteeInfo(invitationCode || null);
  const [isToken, setIsToken] = useState<boolean>();
  const { formatDuration, formatDate } = useFormatDate();
  const { mutation } = usePostParticipation();
  const navigate = useNavigate();

  console.log('useGetGifteeInfo로 받아온 data', data);

  /**@see 카카오 공유하기를 위한 useEffect */
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      console.log('카카오 SDK 초기화 중...');
      window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
    }
  }, []);

  /**@todo 겹치는 부분이니 커스텀 훅 수정  */

  const tournamentEndDate = addHours(
    new Date(data.data.tournamentStartDate),
    DURATION_MAPPING[data.data.tournamentDuration as keyof typeof DURATION_MAPPING] as number,
  );

  const formattedEndDate = format(tournamentEndDate, 'yyyy-MM-dd');

  /**@see 선물 전달 일이 토너먼트 종료일보다 일찍일 때 */
  const isDeliveryBeforeEnd =
    new Date(data.data.deliveryDate).getTime() < tournamentEndDate.getTime();

  useEffect(() => {
    setIsToken(localStorage.getItem('EXIT_LOGIN_TOKEN') !== null);
  }, [isToken, isDeliveryBeforeEnd]);

  const handleClickRoom = async (body: string | null) => {
    console.log('입장 버튼 클릭! 그리고 초대 코드', invitationCode);
    if (body === null) {
      console.error(MESSAGE.INVALID_INVITATION_CODE);
      toast(MESSAGE.INVALID_INVITATION_CODE);
      return;
    }
    try {
      const response = mutation.mutate(body, {
        onSuccess: (data) => {
          console.log('step06 내 포스트', data);
          console.log('step06 내 response', response);
          navigate(`/gift-home/${data.roomId}`);
        },
        onError: () => {
          navigate('/deadline');
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <OnboardingFinalHeader />
      <div>
        <S.OnboardingFinalWrapper>
          <div>
            <S.IconWrapper>
              <S.ImageUrlWrapper src={data.data.imageUrl} />
            </S.IconWrapper>
            <S.GifterNumberWrapper>
              <S.GifterNumberText>{`${data.data.gifterNumber}명의 친구가`}</S.GifterNumberText>
            </S.GifterNumberWrapper>
            <S.ParticipantsTitleWrapper>
              <Title>{`${data.data.gifteeName}님을 위한`}</Title>
            </S.ParticipantsTitleWrapper>
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
                  {formatDate(data.data.tournamentStartDate)}
                </S.InfoContainerDetail>
              </S.InfoContainer>

              <S.TournamentProceedWrapper>
                <S.InfoContainerTitle>토너먼트 진행</S.InfoContainerTitle>
                <S.InfoContainerDetail>
                  {formatDuration(data.data.tournamentDuration)}
                </S.InfoContainerDetail>
              </S.TournamentProceedWrapper>

              <>
                <S.InfoContainer>
                  <S.InfoContainerTitle>토너먼트 종료</S.InfoContainerTitle>
                  <S.InfoContainerDetail>
                    {formatDate(formattedEndDate, false)}
                    {/* {formattedEndDate} */}
                  </S.InfoContainerDetail>
                </S.InfoContainer>

                <S.InfoContainerPresent>
                  <S.InfoContainerTitle>선물 전달</S.InfoContainerTitle>
                  <S.InfoContainerDetail>
                    {formatDate(data.data.deliveryDate, false)}
                  </S.InfoContainerDetail>
                </S.InfoContainerPresent>
              </>
            </S.DetailWrapper>
          </S.ProgressLineAndDetailContainer>

          {isToken === true ? (
            <OnboardingFinalFooter
              invitationCode={data.data.invitationCode}
              roomId={data.data.roomId}
              onClick={handleClickRoom}
              giftee={data.data.gifteeName}
            />
          ) : (
            <S.BtnWrapper>
              <img src={btnKakao} onClick={() => window.location.replace(kakaoURL)} />
            </S.BtnWrapper>
          )}
        </S.OnboardingFinalWrapper>
      </div>
    </>
  );
};
export default ParticipantsView;
