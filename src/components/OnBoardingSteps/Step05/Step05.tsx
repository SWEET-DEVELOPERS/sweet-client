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
    // imageUrl,
    setImageUrl,
    onboardingInfo,
  } = props;

  const [selectedOption] = useState<string>('');
  const postPresignedUrl = usePostPresignedUrl();
  const putPresignedUrl = usePutPresignedUrl();
  const postOnboardingInfoMutation = usePostOnboardingInfo();

  useEffect(() => {
    // 컴포넌트가 마운트될 때마다 최신 토큰을 가져와서 설정
    instance.defaults.headers.Authorization = getAccessTokenLocalStorage();
    console.log('selectedOption', tournamentDuration);
    console.log('step05 fileName', fileName);
  }, [tournamentDuration]);

  console.log('기존 step04에서 가지고 온 날짜와 시간을 step05에서 사용', tournamentStartDate);

  const handleTimeSelect = (time: string) => {
    const updatedTime = new Date(tournamentStartDate);
    updatedTime.setHours(updatedTime.getHours() + parseInt(time.split('시간')[0]));

    updatedTime.setMinutes(updatedTime.getMinutes() - updatedTime.getTimezoneOffset());
    const formattedTime = updatedTime.toISOString();

    console.log(`선택된 시간: ${tournamentStartDate} + ${time}:`, formattedTime);
  };

  const fetchPresignedUrl = async (fileName: string) => {
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
    try {
      await putPresignedUrl.mutateAsync(presignedUrl);
      console.log('saveImageUrl 안 imageUrl 값 확인', imageUrl);
      onNext();
      const updatedOnboardingInfo = { ...onboardingInfo, imageUrl: imageUrl };
      postOnboardingInfoMutation.mutate(updatedOnboardingInfo);
      console.log('onboardingInfo 값 확인2', imageUrl);
    } catch (error) {
      console.log(error);
    }
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
          }}
        >
          다음
        </OnBoardingBtn>
      </div>
    </>
  );
};

export default SetTournamentDuration;
