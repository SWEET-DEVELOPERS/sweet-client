import { useState } from 'react';
import BtnRadio from '../../common/Button/Radio/BtnRadio';
import SubTitle from '../../common/title/SubTitle';
import Title from '../../common/title/Title';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import * as S from './Step05.style';
import OnBoardingHeader from '../onboardingHeader/OnBoardingHeader';

interface SetTournamentDurationProps {
  onNext: VoidFunction;
  tournamentDuration: string;
  setTournamentDuration: React.Dispatch<React.SetStateAction<string>>;
}

const SetTournamentDuration = (props: SetTournamentDurationProps) => {
  // TODO 오늘 기준 날짜로 수정 & map함수로 수정
  const timeOptions = [
    { text: '6시간', dateType: 'today' },
    { text: '12시간', dateType: 'today' },
    { text: '18시간', dateType: 'nottoday' },
    { text: '24시간', dateType: 'nottoday' },
  ];

  const { onNext, tournamentDuration, setTournamentDuration } = props;

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const isToday = (dateType: string): boolean => {
    const currentDate = new Date();
    const targetDate = new Date(currentDate);

    if (dateType === 'nottoday') {
      targetDate.setDate(currentDate.getDate() + 1);
    }

    const targetDateString = targetDate.toISOString().split('T')[0];
    const currentDateString = currentDate.toISOString().split('T')[0];

    return targetDateString === currentDateString;
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
          <S.TimeOptionsWrapper key={index}>
            <S.DetailBox>
              <S.RadioBox>
                <S.TimeText>{option.text}</S.TimeText>
                {isToday(option.dateType) ? (
                  <S.InTodayDate>{'당일'}</S.InTodayDate>
                ) : (
                  <S.NotTodayDate>{'내일'}</S.NotTodayDate>
                )}
              </S.RadioBox>
            </S.DetailBox>
            <BtnRadio
              key={index}
              time={option.text}
              period={option.dateType}
              isSelected={() => selectedOption === option.text}
              onClick={() => setSelectedOption(option.text)}
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
