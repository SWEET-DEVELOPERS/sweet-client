import Title from '../../common/title/Title';
import * as S from './Step06.style';
import { IcKakaoShare, IcLink } from '../../../assets/svg';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import { useEffect, useState } from 'react';
import usePostOnboardingInfo from '../../../hooks/queries/onboarding/usePostOnboardingInfo';
import useGetGifteeInfo from '../../../hooks/queries/onboarding/useGetGifteeInfo';
// import useGetGifteeInfo from '../../../hooks/queries/onboarding/useGetGifteeInfo';
interface OnboardingFinalProps {
  onboardingInfo: {
    gifteeName: string;
    // imageUrl: string;
    deliveryDate: string;
    tournamentStartDate: string;
    tournamentDuration: string;
  };
  imageUrl: string;
  invitationCode: string;
}
const OnboardingFinal = (props: OnboardingFinalProps) => {
  // TODO 추후 이전 STEP에서 유저가 입력한 값으로 변경
  const { onboardingInfo, imageUrl, invitationCode } = props;

  const updatedOnBoardingInfo = {
    ...onboardingInfo,
    imageUrl: imageUrl,
  };

  const enterRoom = () => {
    console.log('생성된 룸으로 입장', onboardingInfo);
  };
  const { data, isLoading, isError } = useGetGifteeInfo(invitationCode);

  const infoDetails = [
    { title: '선물 받을 사람', detail: onboardingInfo.gifteeName },
    { title: '선물 등록 마감', detail: onboardingInfo.tournamentStartDate },
    { title: '토너먼트 진행 시간', detail: onboardingInfo.tournamentDuration },
    { title: '선물 전달일', detail: onboardingInfo.deliveryDate },
  ];

  useEffect(() => {
    console.log('step06내 response.data', data);
  }, [data]);
  // useEffect(() => {
  //   if (invitationCode && !isLoading && !isError) {
  //     console.log('받은 데이타', data);
  //   } else if (isLoading) {
  //     console.log('Loading...');
  //   } else if (isError) {
  //     console.log('isError...');
  //   }
  // }, [data, isLoading, isError, invitationCode]);

  useEffect(() => {
    const initializeKakao = async () => {
      if (!window.Kakao.isInitialized()) {
        await window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
      }
    };
    initializeKakao();
    console.log('카카오 공유하기 확인', initializeKakao());
  }, []);

  const handleShareKakaoClick = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: `${onboardingInfo.gifteeName}님을 위한 선물 준비방에 초대장이 도착했어요`,
          description: onboardingInfo.gifteeName,
          imageUrl: updatedOnBoardingInfo.imageUrl,
          link: {
            mobileWebUrl: 'https://localhost:5173',
            webUrl: 'https://localhost:5173',
          },
        },
      });
    }
    console.log('카카오 공유 버튼 클릭!!');
  };

  return (
    <>
      <S.OnboardingFinalWrapper>
        <S.GradientImg>
          <S.TitleContainer>
            <div style={{ marginBottom: '4.6rem' }}>
              <Title userName={onboardingInfo.gifteeName} title='님을 위한' />
              <Title title='선물 준비방이 개설됐어요' />
            </div>
            {/* TODO 추후 지민이 버튼으로 변경(항상 활성화) */}
            <OnBoardingBtn
              customStyle={{ marginBottom: '1.6rem' }}
              setStep={enterRoom}
              isActivated={true}
            >
              입장
            </OnBoardingBtn>
          </S.TitleContainer>
        </S.GradientImg>
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
        <S.LinkCopyBtn>
          <IcLink style={{ width: '1.8rem', height: '1.8rem' }} />
          링크 복사
        </S.LinkCopyBtn>
        <S.KakaoLinkCopyBtn onClick={handleShareKakaoClick}>
          <IcKakaoShare style={{ width: '1.8rem', height: '1.8rem' }} />
          카카오톡 공유
        </S.KakaoLinkCopyBtn>
      </S.BtnWrapper>
    </>
  );
};
export default OnboardingFinal;
