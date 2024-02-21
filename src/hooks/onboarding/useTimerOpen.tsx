import { useState } from 'react';
import { useOnboardingContext } from '../../context/Onboarding/OnboardingContext';
import { format } from 'date-fns';
import useCalendarOpen from './useCalendarOpen';

const useTimerOpen = () => {
  const { onboardingInfo, updateOnboardingInfo } = useOnboardingContext();
  const { selectedDate } = useCalendarOpen();
  // const [selectedDate] = useState<Date | null>(null);

  const [isTimerOpen] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<string>('');

  const handleTimerSelect = (selectedTime: string) => {
    setSelectedTime(selectedTime);

    const currentDate = onboardingInfo.tournamentStartDate;

    updateOnboardingInfo({
      tournamentStartDate: format(
        new Date(`${format(currentDate, 'yyyy-MM-dd')} ${selectedTime}`),
        "yyyy-MM-dd'T'HH:mm:ss",
      ),
    });
  };

  return {
    onboardingInfo,
    updateOnboardingInfo,
    isTimerOpen,
    selectedTime,
    setSelectedTime,
    handleTimerSelect,
  };
};

export default useTimerOpen;
