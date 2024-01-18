import { useEffect, useState } from 'react';
import BtnRadio from '../../common/Button/Radio/BtnRadio';
import SubTitle from '../../common/title/SubTitle';
import Title from '../../common/title/Title';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import * as S from './Step05.style';
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
  presignedUrl: string;
  setPresignedUrl: React.Dispatch<React.SetStateAction<string>>;
}

const SetTournamentDuration = (props: SetTournamentDurationProps) => {
  // TODO 오늘 기준 날짜로 수정 & map함수로 수정

  const {
    tournamentDuration,
    setTournamentDuration,
    tournamentStartDate,
    fileName,
    // imageUrl,
    setImageUrl,
    onboardingInfo,
    presignedUrl,
  } = props;

  const [selectedOption, setSelectedOption] = useState<string>('');
  const postPresignedUrl = usePostPresignedUrl();
  const putPresignedUrl = usePutPresignedUrl();
  const navigate = useNavigate();
  const { mutation } = usePostOnboardingInfo();

  const timeOptions = [
    { time: 6, textEnglish: 'SIX_HOURS' },
    { time: 12, textEnglish: 'TWELVE_HOURS' },
    { time: 18, textEnglish: 'EIGHTEEN_HOURS' },
    { time: 24, textEnglish: 'TWENTY_FOUR_HOURS' },
  ];
  // const timeOptions = [
  //   { text: '6시간', dateType: 'today', textEnglish: 'SIX_HOURS' },
  //   { text: '12시간', dateType: 'today', textEnglish: 'TWELVE_HOURS' },
  //   { text: '18시간', dateType: 'nottoday', textEnglish: 'EIGHTEEN_HOURS' },
  //   { text: '24시간', dateType: 'nottoday', textEnglish: 'TWENTY_FOUR_HOURS' },
  // ];

  useEffect(() => {
    // 컴포넌트가 마운트될 때마다 최신 토큰을 가져와서 설정
    instance.defaults.headers.Authorization = getAccessTokenLocalStorage();
    console.log('selectedOption', tournamentDuration);
    console.log('step05 fileName', fileName);
    console.log('확인용 프리사인 유알엘', presignedUrl);
  }, [tournamentDuration]);

  useEffect(() => {
    const timeOptionDate = new Date(tournamentStartDate);
    console.log('step05  내 유즈이펙트로 초대코드 확인', mutation);
    console.log('timeOptionDate', timeOptionDate);
    // console.log('formattedTime', formattedTime);
  }, [mutation]);

  const handleTimeSelect = (time: string) => {
    const updatedTime = new Date(tournamentStartDate);
    updatedTime.setHours(updatedTime.getHours() + parseInt(time.split('시간')[0]));

    // updatedTime.setMinutes(updatedTime.getMinutes() - updatedTime.getTimezoneOffset());
    setSelectedOption(time);
    // const formattedTime = updatedTime.toISOString();
  };

  // const isAfterDelivery = (dateType: string) => {
  //   const selectedTime = timeOptions.find((option) => option.textEnglish === dateType);
  //   if (!selectedTime) return false;

  //   const updatedTime = new Date(tournamentStartDate);
  //   updatedTime.setHours(updatedTime.getHours() + parseInt(selectedTime.text.split('시간')[0]));

  //   return updatedTime > new Date(onboardingInfo.deliveryDate);
  // };

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
    console.log('step05 내 invitationCode3', mutation);

    if (presignedUrl && presignedUrl !== '') {
      try {
        await putPresignedUrl.mutateAsync(presignedUrl);
        console.log('saveImageUrl 안 imageUrl 값 확인', imageUrl);
      } catch (error) {
        console.log('putPresignedUrl 실행 중 에러 발생:', error);
        return;
      }
    } else {
      console.log('preSignedUrl이 비어있어서 putPresignedUrl을 실행하지 않습니다.');
    }

    // putPresignedUrl이 성공하거나 빈 값일 때 실행됨
    console.log('step05 내 invitationCode1', mutation);
    try {
      const updatedOnboardingInfo = { ...onboardingInfo, imageUrl: imageUrl };
      const response = mutation.mutate(updatedOnboardingInfo, {
        onSuccess: (data) => {
          // console.log('step05 내 code:', code);
          console.log('step05 내 response:', response);

          navigate(`/result?invitationCode=${data.invitationCode}`);
        },
      });

      // const code = mutation.data?.invitationCode;
      // setInvitationCode(code);
      // console.log('code', code);
    } catch (error) {
      console.log('postOnboardingInfoMutation 실행 중 에러 발생:', error);
    }
  };

  return (
    <>
      <div>
        <Title title='선물 토너먼트' />
        <Title title='진행 시간을 설정해주세요' />
      </div>
      <div style={{ marginTop: '0.8rem' }}>
        <SubTitle subTitle='토너먼트가 아래 시간 동안 진행돼요.' />
      </div>
      <S.SetTournamentDurationWrapper>
        {timeOptions.map((hours) => {
          const optionText = `${hours.time}시간`;
          // const textEnglish = hours.textEnglish;

          // tournamentStartDate에 timeOptions 숫자와 시간 형식을 더한 값
          const optionDateTime = new Date(tournamentStartDate);
          optionDateTime.setHours(optionDateTime.getHours() + hours.time);

          const deliveryDateStart = new Date(onboardingInfo.deliveryDate);
          deliveryDateStart.setHours(0, 0, 0, 0);

          const deliveryDateEnd = new Date(onboardingInfo.deliveryDate);
          deliveryDateEnd.setHours(23, 59, 59, 999);

          // 선물 전달일과의 비교를 통해 isAfterDelivery 계산
          const isAfterDelivery = optionDateTime.getTime() > deliveryDateEnd.getTime();
          const isBeforeDelivery = optionDateTime.getTime() < deliveryDateStart.getTime();

          const dateType = isAfterDelivery
            ? '선물 전달일 이후'
            : isBeforeDelivery
              ? ''
              : '선물 전달일 당일';

          return (
            <S.TimeOptionsWrapper key={optionText}>
              <BtnRadio
                time={optionText}
                period={dateType}
                isSelected={() => selectedOption === optionText}
                onClick={() => setTournamentDuration(hours.textEnglish)}
                onTimeSelect={handleTimeSelect}
                $isAfterDelivery={isAfterDelivery}
              />
            </S.TimeOptionsWrapper>
          );
        })}
      </S.SetTournamentDurationWrapper>

      {/* <S.SetTournamentDurationWrapper>
        {timeOptions.map((option, index) => (
          <S.TimeOptionsWrapper>
            <BtnRadio
              key={index}
              time={option.text}
              period={option.dateType}
              isSelected={() => selectedOption === option.text}
              onClick={() => setTournamentDuration(option.textEnglish)}
              onTimeSelect={handleTimeSelect}
              isAfterDelivery={isAfterDelivery(option.textEnglish)}
            />
          </S.TimeOptionsWrapper>
        ))}
      </S.SetTournamentDurationWrapper> */}

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <OnBoardingBtn
          isActivated={!!selectedOption}
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
