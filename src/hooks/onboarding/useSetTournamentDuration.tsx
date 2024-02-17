import { useState } from 'react';
import usePostOnboardingInfo from '../queries/onboarding/usePostOnboardingInfo';
import { OnboardingInfo } from '../../types/Onboarding';
import { useOnboardingContext } from '../../context/Onboarding/OnboardingContext';

const useSetTournamentDuration = () => {
  const { onboardingInfo } = useOnboardingContext();

  const {
    mutation: { mutate },
  } = usePostOnboardingInfo();

  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleTimeSelect = (time: string) => {
    const updatedTime = new Date(onboardingInfo.tournamentStartDate);
    updatedTime.setHours(updatedTime.getHours() + parseInt(time.split('시간')[0]));

    setSelectedOption(time);
  };

  const postOnboarding = (onboardingInfo: OnboardingInfo) => {
    mutate(onboardingInfo);
  };

  return { selectedOption, handleTimeSelect, postOnboarding };
};

export default useSetTournamentDuration;
