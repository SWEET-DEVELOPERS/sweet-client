import { PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';
import { OnboardingInfo } from '../../types/Onboarding';

interface OnboardingInfoContext {
  onboardingInfo: OnboardingInfo;
  updateOnboardingInfo: (newInfo: Partial<OnboardingInfo>) => void;
}

const initialOnboardingInfo: OnboardingInfo = {
  gifteeName: '',
  deliveryDate: '',
  tournamentStartDate: '',
  tournamentDuration: '',
};

const OnboardingContext = createContext<OnboardingInfoContext>({
  onboardingInfo: initialOnboardingInfo,
  updateOnboardingInfo: () => {},
});

export const useOnboardingContext = () => useContext(OnboardingContext);

export const OnboardingProvider = ({ children }: PropsWithChildren) => {
  const [onboardingInfo, setOnboardingInfo] = useState<OnboardingInfo>(initialOnboardingInfo);

  const updateOnboardingInfo = (newInfo: Partial<OnboardingInfo>) => {
    setOnboardingInfo((prev) => ({ ...prev, ...newInfo }));
  };

  const OnboardingInfoContextValue = useMemo(
    () => ({
      onboardingInfo,
      updateOnboardingInfo,
    }),
    [onboardingInfo],
  );

  return (
    <OnboardingContext.Provider value={OnboardingInfoContextValue}>
      {children}
    </OnboardingContext.Provider>
  );
};
