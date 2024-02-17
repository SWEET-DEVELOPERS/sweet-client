import { useState } from 'react';
import { useOnboardingContext } from '../../context/Onboarding/OnboardingContext';
import { format } from 'date-fns';
import useCalendarOpen from './useCalendarOpen';

const useTimerOpen = () => {
  const { onboardingInfo, updateOnboardingInfo } = useOnboardingContext();
  const { selectedDate } = useCalendarOpen();
  const [isTimerOpen] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<string>('');

  const handleTimerSelect = (selectedTime: string) => {
    setSelectedTime(selectedTime);
    const currentDate = selectedDate || new Date();

    updateOnboardingInfo({
      tournamentStartDate: format(
        new Date(`${currentDate.toDateString()} ${selectedTime}`),
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
