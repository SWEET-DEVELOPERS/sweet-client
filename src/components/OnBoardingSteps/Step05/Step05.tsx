import { useEffect, useState } from 'react';
import BtnRadio from '../../common/Button/Radio/BtnRadio';
import SubTitle from '../../common/title/SubTitle';
import Title from '../../common/title/Title';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import * as S from './Step05.style';
import OnBoardingHeader from '../onboardingHeader/OnBoardingHeader';
import { getAccessTokenLocalStorage, instance } from '../../../apis/client';
import usePostOnboardingInfo from '../../../hooks/queries/onboarding/usePostOnboardingInfo';
import usePostPresignedUrl from '../../../hooks/queries/etc/usePostPresignedUrl';
import usePutPresignedUrl from '../../../hooks/queries/onboarding/usePutPresignedUrl';
import { useNavigate } from 'react-router-dom';

interface SetTournamentDurationProps {
  onNext: VoidFunction;
  tournamentDuration: string;
  setTournamentDuration: React.Dispatch<React.SetStateAction<string>>;
  tournamentStartDate: string;
  fileName: string;
  imageUrl: string;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  onboardingInfo: {
    gifteeName: string;
    // imageUrl: string;
    deliveryDate: string;
    tournamentStartDate: string;
    tournamentDuration: string;
  };
  invitationCode: string;
  setInvitationCode: React.Dispatch<React.SetStateAction<string>>;
  setPresignedUrl: React.Dispatch<React.SetStateAction<string>>;
}

const SetTournamentDuration = (props: SetTournamentDurationProps) => {
  // TODO 오늘 기준 날짜로 수정 & map함수로 수정
  const timeOptions = [
    { text: '6시간', dateType: 'today', textEnglish: 'SIX_HOURS' },
    { text: '12시간', dateType: 'today', textEnglish: 'TWELVE_HOURS' },
    { text: '18시간', dateType: 'nottoday', textEnglish: 'EIGHTEEN_HOURS' },
    { text: '24시간', dateType: 'nottoday', textEnglish: 'TWENTY_FOUR_HOURS' },
  ];

  const {
    onNext,
    tournamentDuration,
    setTournamentDuration,
    tournamentStartDate,
    fileName,
    imageUrl,
    setImageUrl,
    onboardingInfo,
    invitationCode,
    setInvitationCode,
    setPresignedUrl,
  } = props;

  const [selectedOption] = useState<string>('');
  const postPresignedUrl = usePostPresignedUrl();
  const putPresignedUrl = usePutPresignedUrl();
  const navigate = useNavigate();
  const postOnboardingInfoMutation = usePostOnboardingInfo();

  useEffect(() => {
    // 컴포넌트가 마운트될 때마다 최신 토큰을 가져와서 설정
    instance.defaults.headers.Authorization = getAccessTokenLocalStorage();
    console.log('selectedOption', tournamentDuration);
    console.log('step05 fileName', fileName);
  }, [tournamentDuration]);

  const handleTimeSelect = (time: string) => {
    const updatedTime = new Date(tournamentStartDate);
    updatedTime.setHours(updatedTime.getHours() + parseInt(time.split('시간')[0]));

    updatedTime.setMinutes(updatedTime.getMinutes() - updatedTime.getTimezoneOffset());
    const formattedTime = updatedTime.toISOString();
  };

  const fetchPresignedUrl = async (fileName: string) => {
    if (!fileName) {
      console.log('파일명이 없어서 fetchPresignedUrl을 실행하지 않습니다.');
      return { imageUrl: '', presignedUrl: '' };
    }
    const response = await postPresignedUrl.mutateAsync({ filename: fileName, url: '' });

    const presignedUrl = response.presignedUrl;
    const imageUrl = presignedUrl.split('?')[0];
    console.log('imageUrl', imageUrl);
    console.log('presignedUrl', presignedUrl);
    setImageUrl(imageUrl);
    return { imageUrl, presignedUrl };
  };

  const saveImageUrl = async (fileName: string) => {
    const { presignedUrl, imageUrl } = await fetchPresignedUrl(fileName);
    console.log(' save ImageUrl 안 presignedUrl', presignedUrl);

    if (presignedUrl && presignedUrl !== '') {
      try {
        await putPresignedUrl.mutateAsync(presignedUrl);
        console.log('saveImageUrl 안 imageUrl 값 확인', imageUrl);
      } catch (error) {
        console.log('putPresignedUrl 실행 중 에러 발생:', error);
        return; // 에러가 발생하면 함수를 여기서 종료
      }
    } else {
      console.log('preSignedUrl이 비어있어서 putPresignedUrl을 실행하지 않습니다.');
    }

    // putPresignedUrl이 성공하거나 빈 값일 때 실행됨
    onNext();
    console.log('step05 내 invitationCode', invitationCode);
    try {
      const updatedOnboardingInfo = { ...onboardingInfo, imageUrl: imageUrl };
      // const { invitationCode } = await postOnboardingInfoMutation.mutate(updatedOnboardingInfo);
      postOnboardingInfoMutation.mutate(updatedOnboardingInfo);

      console.log('presignedUrl 1', presignedUrl);

      setPresignedUrl(presignedUrl);
      // setInvitationCode(invitationCode);
      console.log('presignedUrl 2', presignedUrl);
    } catch (error) {
      console.log('postOnboardingInfoMutation 실행 중 에러 발생:', error);
    }
    // try {
    //   await putPresignedUrl.mutateAsync(presignedUrl);
    //   console.log('saveImageUrl 안 imageUrl 값 확인', imageUrl);
    //   onNext();
    //   const updatedOnboardingInfo = { ...onboardingInfo, imageUrl: imageUrl };
    //   const { invitationCode } = await postOnboardingInfoMutation.mutate(updatedOnboardingInfo);
    //   postOnboardingInfoMutation.mutate(updatedOnboardingInfo);

    //   console.log('초대코드1', invitationCode);
    //   console.log('presignedUrl 1', presignedUrl);

    //   setPresignedUrl(presignedUrl);
    //   setInvitationCode(invitationCode);
    //   console.log('초대코드2', invitationCode);
    //   console.log('presignedUrl 2', presignedUrl);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      <OnBoardingHeader step={5} />
      <div>
        <Title title='선물 토너먼트' />
        <Title title='진행 시간을 설정해주세요' />
      </div>
      <div style={{ marginTop: '0.8rem' }}>
        <SubTitle subTitle='토너먼트가 아래 시간 동안 진행돼요.' />
      </div>
      <S.SetTournamentDurationWrapper>
        {timeOptions.map((option, index) => (
          <S.TimeOptionsWrapper>
            <BtnRadio
              key={index}
              time={option.text}
              period={option.dateType}
              isSelected={() => selectedOption === option.text}
              onClick={() => setTournamentDuration(option.textEnglish)}
              onTimeSelect={handleTimeSelect}
            />
          </S.TimeOptionsWrapper>
        ))}
      </S.SetTournamentDurationWrapper>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <OnBoardingBtn
          isActivated={selectedOption !== null}
          setStep={async () => {
            const { presignedUrl } = await fetchPresignedUrl(fileName);
            await saveImageUrl(presignedUrl);
            navigate('/result', { state: { value: 1234 } });
          }}
        >
          다음
        </OnBoardingBtn>
      </div>
    </>
  );
};

export default SetTournamentDuration;
