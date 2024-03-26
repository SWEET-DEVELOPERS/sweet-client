import {
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { OnboardingInfo } from '../../types/Onboarding';

interface OnboardingInfoContext {
  onboardingInfo: OnboardingInfo;
  updateOnboardingInfo: (newInfo: Partial<OnboardingInfo>) => void;
  selectedTime: string;
  setSelectedTime: React.Dispatch<SetStateAction<string>>;
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
  selectedTime: '',
  setSelectedTime: () => {},
});

export const useOnboardingContext = () => useContext(OnboardingContext);

export const OnboardingProvider = ({ children }: PropsWithChildren) => {
  const [onboardingInfo, setOnboardingInfo] = useState<OnboardingInfo>(initialOnboardingInfo);
  const [selectedTime, setSelectedTime] = useState<string>('');

  const updateOnboardingInfo = (newInfo: Partial<OnboardingInfo>) => {
    setOnboardingInfo((prev) => ({ ...prev, ...newInfo }));
  };

  useEffect(() => {
    console.log('전체 값 확인용', onboardingInfo);
  }, [onboardingInfo]);

  const OnboardingInfoContextValue = useMemo(
    () => ({
      onboardingInfo,
      updateOnboardingInfo,
      selectedTime,
      setSelectedTime,
    }),
    [onboardingInfo, selectedTime],
  );

  return (
    <OnboardingContext.Provider value={OnboardingInfoContextValue}>
      {children}
    </OnboardingContext.Provider>
  );
};
