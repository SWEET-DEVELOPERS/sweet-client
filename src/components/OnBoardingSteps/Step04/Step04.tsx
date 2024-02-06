import SubTitle from '../../common/title/SubTitle';
import Title from '../../common/title/Title';
import { IcUnselectedCalender } from '../../../assets/svg';
import * as S from './Step04.style';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import TimePicker from './TimePicker';
import useCalendarOpen from '../../../hooks/onboarding/useCalendarOpen';
import useTimerOpen from '../../../hooks/onboarding/useTimerOpen';

interface SetTournamentScheduleProps {
  onNext: VoidFunction;
}

const SetTournamentSchedule = (props: SetTournamentScheduleProps) => {
  const { onNext } = props;
  const { isOpen, selectedDate, disabledDays, openCalendar, handleDateSelect } = useCalendarOpen();
  const { isTimerOpen, selectedTime, setSelectedTime, handleTimerSelect } = useTimerOpen();
  const isActivated = selectedDate !== null && selectedTime !== '';
  const selectedDateValue = selectedDate ? format(selectedDate, 'y년 M월 d일') : '';

  return (
    <>
      <Title>
        선물 토너먼트 <br /> 시작 일정을 설정해주세요
      </Title>
      <S.SubTitleWrapper>
        <SubTitle subTitle='토너먼트 시작 전까지 선물을 등록할 수 있어요.' />
      </S.SubTitleWrapper>

      <S.SetTournamentScheduleWrapper $hasContent={isOpen}>
        <S.TextField>
          <S.Input
            placeholder='날짜를 선택해주세요'
            value={selectedDateValue}
            onChange={(e) => e.preventDefault()}
          />
        </S.TextField>
        <S.IconField>
          <IcUnselectedCalender
            style={{ width: '2.4rem', height: '2.4rem' }}
            onClick={openCalendar}
          />
        </S.IconField>
      </S.SetTournamentScheduleWrapper>
      {isOpen && (
        <S.CalendarWrapper>
          <DayPicker
            defaultMonth={new Date()}
            mode='single'
            onDayClick={handleDateSelect}
            disabled={disabledDays}
          />
        </S.CalendarWrapper>
      )}

      {/* 타이머 */}
      <S.Container $hasContent={isTimerOpen}>
        <S.TextField>
          <S.Input
            placeholder='시작 시간을 선택해주세요'
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            disabled
          />
        </S.TextField>
        <TimePicker onSelect={(time) => handleTimerSelect(time)} />
      </S.Container>
      <S.OnBoardingBtnWrapper>
        <OnBoardingBtn isActivated={isActivated} setStep={onNext}>
          다음
        </OnBoardingBtn>
      </S.OnBoardingBtnWrapper>
    </>
  );
};

export default SetTournamentSchedule;
