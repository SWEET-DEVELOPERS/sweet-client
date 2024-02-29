import { useState } from 'react';
import { useOnboardingContext } from '../../context/Onboarding/OnboardingContext';
import { format } from 'date-fns';

const useTimerOpen = () => {
  const { onboardingInfo, updateOnboardingInfo, selectedTime, setSelectedTime } =
    useOnboardingContext();

  const [isTimerOpen] = useState<boolean>(false);

  const handleTimerSelect = (selectedTime: string) => {
    setSelectedTime(selectedTime);

    const currentDate = onboardingInfo.tournamentStartDate
      ? onboardingInfo.tournamentStartDate
      : new Date();

    updateOnboardingInfo({
      tournamentStartDate: format(
        new Date(`${format(currentDate, 'yyyy-MM-dd')} ${selectedTime}`),
        "yyyy-MM-dd'T'HH:mm:ss",
      ),
    });

    console.log('selectedTime', selectedTime);
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
