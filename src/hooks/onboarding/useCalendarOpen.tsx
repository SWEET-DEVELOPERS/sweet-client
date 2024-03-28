import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useOnboardingContext } from '../../context/Onboarding/OnboardingContext';

const useCalendarOpen = () => {
  const { onboardingInfo, updateOnboardingInfo } = useOnboardingContext();
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
      format(date, 'y-MM-dd') + 'T' + `${padTwoDigits(time.getHours())}:${padTwoDigits(time.getMinutes())}:${padTwoDigits(
        time.getSeconds(),
      )}`;
    updateOnboardingInfo({ deliveryDate: formattedDate });

    setSelectedDate(date);
    setIsOpen(false);
  };

  useEffect(() => {
    setIsActivated(Boolean(onboardingInfo.deliveryDate));
  }, [onboardingInfo.deliveryDate]);

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

export default useCalendarOpen;
