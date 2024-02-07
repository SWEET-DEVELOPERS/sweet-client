import * as S from './ParticipantsView.style';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IcKakaoShare, IcKakoLarge, IcLink } from '../../assets/svg';
import OnboardingFinalHeader from '../../components/OnBoardingSteps/Step06/OnboardingFinalHeader';
import Title from '../../components/common/title/Title';
import useGetGifteeInfo from '../../hooks/queries/onboarding/useGetGifteeInfo';
import { kakaoURL } from '../../utils/login';
import OnBoardingBtn from '../../components/OnBoardingSteps/onboardingBtn/OnBoardingBtn';
import { useKakaoShare } from '../../hooks/queries/onboarding/useKakaoShare';
import useClipboard from '../../hooks/useCopyClip';
import usePostParticipation from '../../hooks/queries/onboarding/usePostParticipation';
import useFormatDate from '../../hooks/onboarding/useFormatDate';

const ParticipantsView = () => {
  const { invitationCode } = useParams<{ invitationCode?: string }>();
  const getGifteeInfo = useGetGifteeInfo(invitationCode || null);
  const { infoDetails } = useFormatDate();
  const [isToken, setIsToken] = useState<boolean>(false);
  const { handleCopyToClipboard } = useClipboard();
  const { mutation } = usePostParticipation();
  const navigate = useNavigate();

  /**@see 카카오 공유하기를 위한 useEffect */
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      console.log('카카오 SDK 초기화 중...');
      window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
    }
  }, []);

  /**@TODO 현재 token값의 유무에 따라 다른 뷰를 보여주는 로직인데,
   * token의 값이 있든 없든 항상 토큰이 있는 값을 보여주고 있음. 처리 필요 */
  useEffect(() => {
    if (localStorage.getItem('EXIT_LOGIN_TOKEN') !== '') {
      setIsToken(true);
      console.log('로컬스토리지 확인', localStorage.getItem('EXIT_LOGIN_TOKEN'));
    } else {
      console.log('로컬스토리지 ㄴㄴ', localStorage.getItem('EXIT_LOGIN_TOKEN'));
      setIsToken(false);
    }
  }, [isToken]);

  const handleClickRoom = async (body: string | null) => {
    console.log('입장 버튼 클릭! 그리고 초대 코드', invitationCode);
    if (body === null) {
      console.error('초대 코드가 유효하지 않습니다.');
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
      <S.OnboardingFinalWrapper>
        <div>
          <S.GradientImg>
            <img
              src='https://sweet-gift-bucket.s3.ap-northeast-2.amazonaws.com/sweet.png'
              style={{ width: '100%', opacity: 0.7 }}
            />
            <S.TitleContainer>
              <S.ParticipantsTitleWrapper>
                <Title>
                  {`${getGifteeInfo.data.gifteeName}님을 위한`}
                  <br /> 선물 준비방이 개설됐어요
                </Title>
              </S.ParticipantsTitleWrapper>
              {isToken === true ? (
                <OnBoardingBtn
                  customStyle={{ marginBottom: '1.6rem' }}
                  setStep={() => handleClickRoom(getGifteeInfo.data.invitationCode)}
                  isActivated={true}
                >
                  입장
                </OnBoardingBtn>
              ) : (
                ''
              )}
            </S.TitleContainer>
          </S.GradientImg>
        </div>
      </S.OnboardingFinalWrapper>
      <S.InfoWrapper>
        {infoDetails.map((item, index) => (
          <S.InfoDetailWrapper key={index}>
            <S.InfoTitle>{item.title}</S.InfoTitle>
            <S.InfoDetail>{item.detail}</S.InfoDetail>
          </S.InfoDetailWrapper>
        ))}
      </S.InfoWrapper>
      {/* 수정된 부분 시작 */}
      <S.BtnWrapper>
        {isToken === false ? (
          <IcKakoLarge onClick={() => window.location.replace(kakaoURL)} />
        ) : (
          <>
            <S.LinkCopyBtn
              onClick={() =>
                handleCopyToClipboard(
                  `http://sweetgift.vercel.app/result/${getGifteeInfo.data.invitationCode}`,
                )
              }
            >
              <IcLink style={{ width: '1.8rem', height: '1.8rem' }} />
              링크 복사
            </S.LinkCopyBtn>
            <S.KakaoLinkCopyBtn
              onClick={() =>
                useKakaoShare(getGifteeInfo.data.invitationCode, getGifteeInfo.data.gifteeName)
              }
            >
              <IcKakaoShare style={{ width: '1.8rem', height: '1.8rem' }} />
              카카오톡 공유
            </S.KakaoLinkCopyBtn>
          </>
        )}
      </S.BtnWrapper>
    </>
  );
};
export default ParticipantsView;
