import * as S from './ParticipantsView.style';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import useGetGifteeInfo from '../../../hooks/queries/onboarding/useGetGifteeInfo';
// import usePostParticipation from '../../../hooks/queries/onboarding/usePostParticipation';
import { IcKakaoShare, IcKakoLarge, IcLink } from '../../assets/svg';
import OnboardingFinalHeader from '../../components/OnBoardingSteps/Step06/OnboardingFinalHeader';
import Title from '../../components/common/title/Title';
import useGetGifteeInfo from '../../hooks/queries/onboarding/useGetGifteeInfo';
import { kakaoURL } from '../../utils/login';
import OnBoardingBtn from '../../components/OnBoardingSteps/onboardingBtn/OnBoardingBtn';
import { useKakaoShare } from '../../hooks/queries/onboarding/useKakaoShare';
import useClipboard from '../../hooks/useCopyClip';
import usePostParticipation from '../../hooks/queries/onboarding/usePostParticipation';

const ParticipantsView = () => {
  // const { onboardingInfo, invitationCode } = props;

  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const invitationCode = searchParams.get('invitationCode');
  // console.log('step06 내 초대코드', invitationCode);

  const { invitationCode } = useParams<{ invitationCode?: string }>();
  const getGifteeInfo = useGetGifteeInfo(invitationCode || null);
  const [isToken, setIsToken] = useState<boolean>(false);
  console.log('추출된 초대 코드', invitationCode);
  const navigate = useNavigate();
  const { handleCopyToClipboard } = useClipboard();

  const { mutation } = usePostParticipation();

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      console.log('카카오 SDK 초기화 중...');
      window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('EXIT_LOGIN_TOKEN') !== '') {
      setIsToken(true);
      console.log('로컬스토리지 확인', localStorage.getItem('EXIT_LOGIN_TOKEN'));
    } else {
      console.log('로컬스토리지 ㄴㄴ', localStorage.getItem('EXIT_LOGIN_TOKEN'));
      setIsToken(false);
    }
  }, [isToken]);

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

  const infoDetails = getGifteeInfo?.data
    ? [
        { title: '선물 받을 사람', detail: getGifteeInfo.data.gifteeName },
        {
          title: '선물 등록 마감',
          detail: formatDate(getGifteeInfo.data.tournamentStartDate, true),
        },
        {
          title: '토너먼트 진행 시간',
          detail: formatDuration(getGifteeInfo.data.tournamentDuration),
        },
        { title: '선물 전달일', detail: formatDate(getGifteeInfo.data.deliveryDate, false) },
      ]
    : [];

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
              <div style={{ marginBottom: '4.6rem' }}>
                <Title title={`${getGifteeInfo.data.gifteeName}님을 위한`} />
                <Title title='선물 준비방이 개설됐어요' />
              </div>
              {isToken === true ? (
                <OnBoardingBtn
                  customStyle={{ marginBottom: '1.6rem' }}
                  setStep={() => handleClickRoom(getGifteeInfo.data.invitationCode)}
                  isActivated={true}
                  // onClick={() => handleClickRoom(getGifteeInfo.data.invitationCode)}
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
                // TODO 추후 로컬 주소를 배포 주소로 변경
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
      {/* 수정된 부분 끝 */}
    </>
  );
};
export default ParticipantsView;
