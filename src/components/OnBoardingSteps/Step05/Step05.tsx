import { useState } from 'react';
import BtnRadio from '../../common/Button/Radio/BtnRadio';
import SubTitle from '../../common/title/SubTitle';
import Title from '../../common/title/Title';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import * as S from './Step05.style';
import OnBoardingHeader from '../onboardingHeader/OnBoardingHeader';
import { addHours, isSameDay } from 'date-fns';

interface SetTournamentDurationProps {
  onNext: VoidFunction;
  tournamentDuration: string;
  setTournamentDuration: React.Dispatch<React.SetStateAction<string>>;
  tournamentStartDate: string;
}

const SetTournamentDuration = (props: SetTournamentDurationProps) => {
  // TODO 오늘 기준 날짜로 수정 & map함수로 수정
  const timeOptions = [
    { text: '6시간', dateType: 'today' },
    { text: '12시간', dateType: 'today' },
    { text: '18시간', dateType: 'nottoday' },
    { text: '24시간', dateType: 'nottoday' },
  ];

  const { onNext, tournamentDuration, setTournamentDuration, tournamentStartDate } = props;

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');

  console.log('기존 step04에서 가지고 온 날짜와 시간을 step05에서 사용', tournamentStartDate);

  const checkDateType = (duration: number) => {
    const endDate = addHours(new Date(tournamentStartDate), duration);

    return isSameDay(new Date(), endDate) ? 'today' : 'nottoday';
  };

  const handleTimeSelect = (time: string) => {
    // 현재 선택된 날짜와 시간에 6시간을 더한 값을 콘솔에 출력
    const updatedTime = new Date(tournamentStartDate);
    updatedTime.setHours(updatedTime.getHours() + parseInt(time.split('시간')[0]));
    console.log(`선택된 시간: ${tournamentStartDate} + ${time}:`, updatedTime);
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
              onClick={() => setSelectedOption(option.text)}
              onTimeSelect={handleTimeSelect}
            />
          </S.TimeOptionsWrapper>
        ))}
      </S.SetTournamentDurationWrapper>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <OnBoardingBtn isActivated={selectedOption !== null} setStep={onNext}>
          다음
        </OnBoardingBtn>
      </div>
    </>
  );
};

export default SetTournamentDuration;
