import SubTitle from '../../common/title/SubTitle';
import Title from '../../common/title/Title';
import * as S from './Step04.style';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import TimePicker from './TimePicker';
import useTimerOpen from '../../../hooks/onboarding/useTimerOpen';
import DatePicker from './DatePicker';
import useTournamentScheduleCalendar from '../../../hooks/onboarding/useTournamentScheduleCalendar';

interface SetTournamentScheduleProps {
  onNext: VoidFunction;
}

const SetTournamentSchedule = (props: SetTournamentScheduleProps) => {
  const { onNext } = props;
  const { isOpen, disabledDays, openCalendar, handleDateSelect, onboardingInfo } =
    useTournamentScheduleCalendar();
  const { selectedTime, handleTimerSelect } = useTimerOpen();
  const isActivated = !!onboardingInfo.tournamentStartDate && !!selectedTime;

  return (
    <>
      <Title>
        선물 토너먼트를 <br /> 언제부터 시작할까요?
      </Title>
      <S.SubTitleWrapper>
        <SubTitle subTitle='토너먼트 시작 전까지 선물을 등록할 수 있어요.' />
      </S.SubTitleWrapper>

      <S.SetTournamentScheduleWrapper $hasContent={isOpen} onClick={openCalendar}>
        <S.TextField>
          <S.Input
            placeholder='날짜를 선택해주세요'
            value={
              onboardingInfo.tournamentStartDate
                ? format(new Date(onboardingInfo.tournamentStartDate), 'yyyy년 M월 d일')
                : ''
            }
            onChange={(e) => e.preventDefault()}
          />
        </S.TextField>
        <DatePicker onClick={openCalendar} />
      </S.SetTournamentScheduleWrapper>
      {isOpen && (
        <S.CalendarWrapper>
          <DayPicker
            defaultMonth={new Date()}
            mode='single'
            onDayClick={handleDateSelect}
            disabled={disabledDays}
            modifiersClassNames={{
              selected: 'my-selected',
              today: 'my-today',
            }}
            modifiersStyles={{
              disabled: { fontSize: '75%' },
            }}
          />
        </S.CalendarWrapper>
      )}

      {/* 타이머 */}
      <TimePicker onSelect={(time) => handleTimerSelect(time)} />
      <S.OnBoardingBtnWrapper>
        <OnBoardingBtn isActivated={isActivated} setStep={onNext}>
          다음
        </OnBoardingBtn>
      </S.OnBoardingBtnWrapper>
    </>
  );
};

export default SetTournamentSchedule;
