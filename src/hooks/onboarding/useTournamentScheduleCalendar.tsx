import { format } from 'date-fns';
import { useState } from 'react';
import { useOnboardingContext } from '../../context/Onboarding/OnboardingContext';

const useTournamentScheduleCalendar = () => {
  const { onboardingInfo, updateOnboardingInfo, selectedTime } = useOnboardingContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isActivated, setIsActivated] = useState<boolean>(false);
  const disabledDays = { before: new Date() };
  const time = new Date();

  const openCalendar = () => {
    setIsOpen(!isOpen);
  };

  const handleDateSelect = (date: Date) => {
    const tournamentStartDate = onboardingInfo.tournamentStartDate;
    const padTwoDigits = (value: number) => String(value).padStart(2, '0');
    const formattedDate =
      format(date, 'y-MM-dd') +
      'T' +
      `${padTwoDigits(time.getHours())}:${padTwoDigits(time.getMinutes())}:${padTwoDigits(
        time.getSeconds(),
      )}`;

    const timePart = format(date, 'y-MM-dd') + 'T' + `${selectedTime}`;
    const updateTournamentStartDate = (date: Date, formattedDate: string) => {
      updateOnboardingInfo({ tournamentStartDate: formattedDate });
      setSelectedDate(date);
      setIsOpen(false);
    };

    const tournamentStartDateArray = [
      tournamentStartDate === '',
      Boolean(tournamentStartDate && !selectedTime),
    ];

    const updateTournamentStartDateFormat = tournamentStartDateArray.some((conditon) => conditon);

    // tournamentStartDateArray 중 한 조건이라도 true면 formattedDate로 업데이트,
    // 하나라도 false면 timePart로 업데이트
    if (updateTournamentStartDateFormat) {
      updateTournamentStartDate(date, formattedDate);
    } else {
      updateTournamentStartDate(date, timePart);
    }
  };

  return {
    isOpen,
    selectedDate,
    isActivated,
    setIsActivated,
    disabledDays,
    time,
    openCalendar,
    handleDateSelect,
    onboardingInfo,
  };
};

export default useTournamentScheduleCalendar;
