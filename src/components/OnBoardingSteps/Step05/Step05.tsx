import { useEffect, useState } from 'react';
import BtnRadio from '../../common/Button/Radio/BtnRadio';
import SubTitle from '../../common/title/SubTitle';
import Title from '../../common/title/Title';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import * as S from './Step05.style';
import { getAccessTokenLocalStorage, instance } from '../../../apis/client';

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
  imageFile: File | null;
}

const SetTournamentDuration = (props: SetTournamentDurationProps) => {
  // TODO 오늘 기준 날짜로 수정 & map함수로 수정

  const {
    onNext,
    tournamentDuration,
    setTournamentDuration,
    tournamentStartDate,
    fileName,
    // imageUrl,
    onboardingInfo,
    // presignedUrl,
    imageFile,
  } = props;

  const [selectedOption, setSelectedOption] = useState<string>('');

  const timeOptions = [
    { time: 6, textEnglish: 'SIX_HOURS' },
    { time: 12, textEnglish: 'TWELVE_HOURS' },
    { time: 18, textEnglish: 'EIGHTEEN_HOURS' },
    { time: 24, textEnglish: 'TWENTY_FOUR_HOURS' },
  ];

  useEffect(() => {
    // 컴포넌트가 마운트될 때마다 최신 토큰을 가져와서 설정
    instance.defaults.headers.Authorization = getAccessTokenLocalStorage();
    console.log('selectedOption', tournamentDuration);
    console.log('step05 fileName', fileName);
    console.log('step05 imageFile', imageFile);
  }, [tournamentDuration]);

  const handleTimeSelect = (time: string) => {
    const updatedTime = new Date(tournamentStartDate);
    updatedTime.setHours(updatedTime.getHours() + parseInt(time.split('시간')[0]));

    // updatedTime.setMinutes(updatedTime.getMinutes() - updatedTime.getTimezoneOffset());
    setSelectedOption(time);
    // const formattedTime = updatedTime.toISOString();
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
                isSelected={selectedOption === optionText}
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
          // setStep={async () => {
          //   const { finalPresigned } = await fetchPresignedUrl(fileName);
          //   await saveImageUrl(finalPresigned);
          setStep={onNext}
        >
          다음
        </OnBoardingBtn>
      </div>
    </>
  );
};

export default SetTournamentDuration;
