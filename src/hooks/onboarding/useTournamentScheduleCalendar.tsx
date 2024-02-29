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
    const padTwoDigits = (value: number) => String(value).padStart(2, '0');
    const formattedDate =
      format(date, 'y-MM-dd') +
      'T' +
      `${padTwoDigits(time.getHours())}:${padTwoDigits(time.getMinutes())}:${padTwoDigits(
        time.getSeconds(),
      )}`;

    const timePart = format(date, 'y-MM-dd') + 'T' + `${selectedTime}`;
    const updatedTournamentStartDateInfo = {
      tournamentStartDate: onboardingInfo.tournamentStartDate ? timePart : formattedDate,
    };

    updateOnboardingInfo(updatedTournamentStartDateInfo);
    setSelectedDate(date);
    setIsOpen(false);
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
