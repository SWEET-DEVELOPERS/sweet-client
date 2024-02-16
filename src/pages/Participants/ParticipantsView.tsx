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

const ParticipantsView = () => {
  const { invitationCode } = useParams<{ invitationCode?: string }>();
  const { data } = useGetGifteeInfo(invitationCode || null);
  const [isToken, setIsToken] = useState<boolean>(false);
  const { handleCopyToClipboard } = useClipboard();
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

  const getDayOfWeek = (date: Date) => {
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeekIndex = date.getDay();
    return daysOfWeek[dayOfWeekIndex];
  };

  const formatDuration = (durationType: string) => {
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

  const infoDetails = [
    { title: '선물 받을 사람', detail: data.gifteeName },
    {
      title: '선물 등록 마감',
      detail: formatDate(data.tournamentStartDate, true),
    },
    {
      title: '토너먼트 진행 시간',
      detail: formatDuration(data.tournamentDuration),
    },
    { title: '선물 전달일', detail: formatDate(data.deliveryDate, false) },
  ];

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
            {/* TODO s3에 업로드된 이미지로 변경 */}
            <img src={data.imageUrl} style={{ width: '100%' }} />
            <S.TitleContainer>
              <S.ParticipantsTitleWrapper>
                <Title>
                  {/* {`${getGifteeInfo.data.gifteeName}님을 위한`} */}
                  {/* {`${onboardingInfo.gifteeName}님을 위한`} */}
                  {`${data.gifteeName}님을 위한`}
                  <br /> 선물 준비방이 개설됐어요
                </Title>
              </S.ParticipantsTitleWrapper>
              <OnBoardingBtn
                step={6}
                customStyle={{ marginBottom: '1.6rem' }}
                setStep={() => handleClickRoom(data.invitationCode)}
                isActivated={true}
              >
                입장
              </OnBoardingBtn>
              {isToken === true ? (
                <OnBoardingBtn
                  step={6}
                  customStyle={{ marginBottom: '1.6rem' }}
                  setStep={() => handleClickRoom(data.invitationCode)}
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
                handleCopyToClipboard(`http://sweetgift.vercel.app/result/${data.invitationCode}`)
              }
            >
              <IcLink style={{ width: '1.8rem', height: '1.8rem' }} />
              링크 복사
            </S.LinkCopyBtn>
            <S.KakaoLinkCopyBtn onClick={() => useKakaoShare(data.invitationCode, data.gifteeName)}>
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
