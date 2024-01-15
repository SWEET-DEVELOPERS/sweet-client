import Title from '../../common/title/Title';
import * as S from './Step06.style';
import { IcKakaoShare, IcLink } from '../../../assets/svg';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';

const OnboardingFinal = () => {
  // TODO 추후 이전 STEP에서 유저가 입력한 값으로 변경
  const infoDetails = [
    { title: '선물 받을 사람', detail: '가나다라마바사아자차님' },
    { title: '선물 등록 마감', detail: '2023.12.29(금) 13시' },
    { title: '토너먼트 진행 시간', detail: '6시간' },
    { title: '선물 전달일', detail: '2023.12.31(일)' },
  ];

  const enterRoom = () => {
    console.log('생성된 룸으로 입장');
  };

  return (
    <>
      <S.OnboardingFinalWrapper>
        <S.GradientImg>
          <S.TitleContainer>
            <div style={{ marginBottom: '4.6rem' }}>
              <Title userName='가나다라마사아자차' title='님을 위한' />
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
        <S.KakaoLinkCopyBtn>
          <IcKakaoShare style={{ width: '1.8rem', height: '1.8rem' }} />
          카카오톡 공유
        </S.KakaoLinkCopyBtn>
      </S.BtnWrapper>
    </>
  );
};
export default OnboardingFinal;
