import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { OnboardingInfo } from '../../types/Onboarding';

interface OnboardingInfoContext {
  onboardingInfo: OnboardingInfo;
  updateOnboardingInfo: (newInfo: Partial<OnboardingInfo>) => void;
}

const initialOnboardingInfo: OnboardingInfo = {
  gifteeName: '',
  imageUrl: '',
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

  /**@todo 전체 값 확인용 useEffect */
  useEffect(() => {
    console.log('전체 값 확인:', onboardingInfo);
  }, [onboardingInfo]);

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
