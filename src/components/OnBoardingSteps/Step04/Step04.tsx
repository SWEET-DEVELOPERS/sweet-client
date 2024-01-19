import SubTitle from '../../common/title/SubTitle';
import Title from '../../common/title/Title';
import { IcUnselectedCalender } from '../../../assets/svg';
import * as S from './Step04.style';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import TimePicker from './TimePicker';

interface SetTournamentScheduleProps {
  onNext: VoidFunction;
  tournamentStartDate: string;
  setTournamentStartDate: React.Dispatch<React.SetStateAction<string>>;
}

const SetTournamentSchedule = (props: SetTournamentScheduleProps) => {
  // TODO 시간 선택되면 인풋창 가리고, border-bottom 원래대로 돌리기
  const { onNext, setTournamentStartDate } = props;
  const disabledDays = { before: new Date() };
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isTimerOpen] = useState<boolean>(false);

  const openCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setIsCalendarOpen(false);
    setTournamentStartDate(format(date, "yyyy-mm-dd'T'HH:mm:ss"));
  };

  const handleTimerSelect = (selectedTime: string) => {
    setSelectedTime(selectedTime);
    const currentDate = selectedDate || new Date();
    setTournamentStartDate(
      format(new Date(`${currentDate.toDateString()} ${selectedTime}`), "yyyy-MM-dd'T'HH:mm:ss"),
    );
  };

  return (
    <>
      <div>
        <div>
          <Title title='선물 토너먼트' />
          <Title title='시작 일정을 설정해주세요' />
        </div>
        <div style={{ marginTop: '0.8rem' }}>
          <SubTitle subTitle='토너먼트 시작 전까지 선물을 등록할 수 있어요.' />
        </div>
      </div>
      <S.SetTournamentScheduleWrapper $hasContent={isCalendarOpen}>
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
        <div style={{ display: 'flex', justifyContent: 'center', zIndex: 1000, position: 'fixed' }}>
          <DayPicker
            defaultMonth={new Date()}
            mode='single'
            onDayClick={handleDateSelect}
            disabled={disabledDays}
          />
        </div>
      )}

      {/* 여기서부터 타이머 */}
      <S.Container $hasContent={isTimerOpen}>
        <S.TextField>
          <S.Input
            placeholder='시작 시간을 선택해주세요'
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            disabled
          />
        </S.TextField>
        <div>
          <TimePicker onSelect={(time) => handleTimerSelect(time)} />
        </div>
        {/* <S.IconField>
          <input type='time' style={{ display: 'none' }} id='timeInput' />
          <label htmlFor='timeInput'>
            <IcUnselectedClock
              style={{ width: '2.4rem', height: '2.4rem', position: 'relative' }}
              onClick={openTimer}
            />
          </label>
          {isTimerOpen ? (
            <input id='timeInput' type='time' onChange={(e) => handleTimerSelect(e.target.value)} />
          ) : null}
        </S.IconField> */}
      </S.Container>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <OnBoardingBtn isActivated={selectedDate !== null && selectedTime !== ''} setStep={onNext}>
          다음
        </OnBoardingBtn>
      </div>
    </>
  );
};

export default SetTournamentSchedule;
