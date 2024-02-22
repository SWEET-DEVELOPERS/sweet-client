import Title from '../../common/title/Title';
import * as S from './Step06.style';
import { IcKakaoShare, IcLink } from '../../../assets/svg';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingFinalHeader from './OnboardingFinalHeader';
import useClipboard from '../../../hooks/useCopyClip';
import { useKakaoShare } from '../../../hooks/queries/onboarding/useKakaoShare';
import { useOnboardingContext } from '../../../context/Onboarding/OnboardingContext';
import useFormatDate from '../../../hooks/onboarding/useFormatDate';

interface OnboardingFinalProps {
  invitationCode: string;
  roomId: number;
}

const OnboardingFinal = (props: OnboardingFinalProps) => {
  const { invitationCode, roomId } = props;
  const { onboardingInfo } = useOnboardingContext();
  const { infoDetails } = useFormatDate();
  const navigate = useNavigate();
  const { handleCopyToClipboard } = useClipboard();

  const step = 6;

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
      <S.OnboardingFinalWrapper>
        <div>
          <S.GradientImg>
            <img src={onboardingInfo.imageUrl} style={{ width: '100%' }} />
            <S.TitleContainer>
              <S.TitleWrapper>
                <Title>
                  {`${onboardingInfo.gifteeName}님을 위한`} <br /> 선물 준비방이 개설됐어요
                </Title>
                <OnBoardingBtn
                  step={step}
                  customStyle={{ marginBottom: '1.6rem' }}
                  setStep={() => navigate(`/gift-home/${roomId}`)}
                  isActivated={true}
                >
                  입장
                </OnBoardingBtn>
              </S.TitleWrapper>
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
      <S.BtnWrapper>
        <S.LinkCopyBtn
          onClick={() =>
            // TODO 추후 로컬 주소를 배포 주소로 변경 및 주소 상수처리
            // handleCopyToClipboard(`http://localhost:5173/result/${invitationCode}`)
            handleCopyToClipboard(`http://sweetgift.vercel.app/result/${invitationCode}`)
          }
        >
          <IcLink style={{ width: '1.8rem', height: '1.8rem' }} />
          링크 복사
        </S.LinkCopyBtn>
        <S.KakaoLinkCopyBtn
          onClick={() => useKakaoShare(invitationCode, onboardingInfo.gifteeName)}
        >
          <IcKakaoShare style={{ width: '1.8rem', height: '1.8rem' }} />
          카카오톡 공유
        </S.KakaoLinkCopyBtn>
      </S.BtnWrapper>
    </>
  );
};
export default OnboardingFinal;
