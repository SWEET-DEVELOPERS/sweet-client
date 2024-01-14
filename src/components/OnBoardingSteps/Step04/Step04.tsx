import SubTitle from '../../common/title/SubTitle';
import Title from '../../common/title/Title';
import { IcUnselectedCalender, IcUnselectedClock } from '../../../assets/svg';
import * as S from './Step04.style';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import OnBoardingHeader from '../onboardingHeader/OnBoardingHeader';

interface SetTournamentScheduleProps {
  onNext: VoidFunction;
}

const SetTournamentSchedule = (props: SetTournamentScheduleProps) => {
  // TODO 인풋창 클릭 시 캘린더 & 시간 선택 창 구현
  const { onNext } = props;
  const disabledDays = { before: new Date() };
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isTimerOpen, setIsTimerOpen] = useState<boolean>(false);

  const openCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const openTimer = () => {
    setIsTimerOpen(!isTimerOpen);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setIsCalendarOpen(false);
  };

  return (
    <>
      <OnBoardingHeader step={4} />
      <div>
        <div>
          <Title title='선물 토너먼트' />
          <Title title='시작 일정을 설정해주세요' />
        </div>
        <div style={{ marginTop: '0.8rem' }}>
          <SubTitle subTitle='토너먼트 시작 전까지 선물을 등록할 수 있어요.' />
        </div>
      </div>
      <S.SetTournamentScheduleWrapper hasContent={isCalendarOpen}>
        <S.TextField>
          <S.Input
            placeholder='날짜를 선택해주세요'
            value={selectedDate ? format(selectedDate, 'y년 M월 d일') : ''}
          />
        </S.TextField>
        <S.IconField>
          <IcUnselectedCalender
            style={{ width: '2.4rem', height: '2.4rem' }}
            onClick={openCalendar}
          />
        </S.IconField>
      </S.SetTournamentScheduleWrapper>
      {isCalendarOpen && (
        <DayPicker
          defaultMonth={new Date()}
          mode='single'
          onDayClick={handleDateSelect}
          disabled={disabledDays}
        />
      )}
      <S.Container hasContent={isTimerOpen}>
        <S.TextField>
          <S.Input placeholder='시작 시간을 선택해주세요' />
        </S.TextField>
        <S.IconField>
          <input type='time' style={{ display: 'none' }} id='timeInput' onClick={openTimer} />
          <label htmlFor='timeInput'>
            <IcUnselectedClock
              style={{ width: '2.4rem', height: '2.4rem', position: 'relative' }}
            />
          </label>
          {isTimerOpen && <input id='timeInput' type='time' />}
        </S.IconField>
      </S.Container>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <OnBoardingBtn isActivated={isCalendarOpen && isTimerOpen} setStep={onNext}>
          다음
        </OnBoardingBtn>
      </div>
    </>
  );
};

export default SetTournamentSchedule;
