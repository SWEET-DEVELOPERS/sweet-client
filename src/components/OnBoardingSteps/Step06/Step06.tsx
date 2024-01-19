import Title from '../../common/title/Title';
import * as S from './Step06.style';
import { IcKakaoShare, IcLink } from '../../../assets/svg';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import usePostParticipation from '../../../hooks/queries/onboarding/usePostParticipation';
import OnboardingFinalHeader from './OnboardingFinalHeader';
import useClipboard from '../../../hooks/useCopyClip';
import { useKakaoShare } from '../../../hooks/queries/onboarding/useKakaoShare';

interface OnboardingFinalProps {
  onboardingInfo: {
    gifteeName: string;
    // imageUrl: string;
    deliveryDate: string;
    tournamentStartDate: string;
    tournamentDuration: string;
  };
  invitationCode: string;
  imageUrl: string;
}

const OnboardingFinal = (props: OnboardingFinalProps) => {
  const { onboardingInfo, invitationCode, imageUrl } = props;
  const { mutation } = usePostParticipation();

  console.log('step06 내 imageUrl', imageUrl);

  const navigate = useNavigate();
  const { handleCopyToClipboard } = useClipboard();

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      console.log('카카오 SDK 초기화 중...');
      window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
    }
  }, []);

  // console.log('getGifteeInfo', getGifteeInfo);

  const formatDate = (dateString: string, includeTime: boolean = true) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    if (includeTime) {
      return `${year}.${month}.${day} (${getDayOfWeek(date)}) ${hours}시 ${minutes}분`;
    } else {
      return `${year}.${month}.${day} (${getDayOfWeek(date)})`;
    }
  };

  const getDayOfWeek = (date: any) => {
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeekIndex = date.getDay();
    return daysOfWeek[dayOfWeekIndex];
  };

  const formatDuration = (durationType: any) => {
    switch (durationType) {
      case 'SIX_HOURS':
        return '6시간';
      case 'TWELVE_HOURS':
        return '12시간';
      case 'EIGHTEEN_HOURS':
        return '18시간';
      case 'TWENTY_FOUR_HOURS':
        return '24시간';
      default:
        return '';
    }
  };

  const infoDetails = onboardingInfo.gifteeName
    ? [
        { title: '선물 받을 사람', detail: onboardingInfo.gifteeName },
        {
          title: '선물 등록 마감',
          detail: formatDate(onboardingInfo.tournamentStartDate, true),
        },
        {
          title: '토너먼트 진행 시간',
          detail: formatDuration(onboardingInfo.tournamentDuration),
        },
        { title: '선물 전달일', detail: formatDate(onboardingInfo.deliveryDate, false) },
      ]
    : [];

  const handleClickRoom = async (body: string) => {
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
          navigate('/gift-home');
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
        {/* TODO presignedUrl이 null 또는 빈 스트링일 경우 엠티 뷰 보이기 / 값이 있으면 저장되어있는 imageUrl 보이기 */}
        {/* <S.GradientImg> */}
        <div>
          <S.GradientImg>
            <img
              src='https://sweet-gift-bucket.s3.ap-northeast-2.amazonaws.com/sweet.png'
              style={{ width: '100%' }}
            />
            <S.TitleContainer>
              <div style={{ marginBottom: '4.6rem' }}>
                <Title title={`${onboardingInfo.gifteeName} 님을 위한 `} />
                <Title title='선물 준비방이 개설됐어요' />
              </div>
              {/* TODO 추후 지민이 버튼으로 변경(항상 활성화) */}
              <OnBoardingBtn
                customStyle={{ marginBottom: '1.6rem' }}
                setStep={() => handleClickRoom(invitationCode)}
                isActivated={true}
              >
                입장
              </OnBoardingBtn>
            </S.TitleContainer>
          </S.GradientImg>
        </div>

        {/* </S.GradientImg> */}
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
            // TODO 추후 로컬 주소를 배포 주소로 변경
            handleCopyToClipboard(
              `http://sweetgift.vercel.app/result?invitationCode=${invitationCode}`,
            )
          }
        >
          <IcLink style={{ width: '1.8rem', height: '1.8rem' }} />
          링크 복사
        </S.LinkCopyBtn>
        <S.KakaoLinkCopyBtn onClick={() => useKakaoShare()}>
          <IcKakaoShare style={{ width: '1.8rem', height: '1.8rem' }} />
          카카오톡 공유
        </S.KakaoLinkCopyBtn>
      </S.BtnWrapper>
    </>
  );
};
export default OnboardingFinal;
