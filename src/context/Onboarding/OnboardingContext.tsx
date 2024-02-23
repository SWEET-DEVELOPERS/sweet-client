import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { OnboardingInfo } from '../../types/Onboarding';

interface OnboardingInfoContext {
  onboardingInfo: OnboardingInfo;
  updateOnboardingInfo: (newInfo: Partial<OnboardingInfo>) => void;
  previewImage: string;
  setPreviewImage: (previewImage: string) => void;
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
  previewImage: '',
  setPreviewImage: () => {},
});

export const useOnboardingContext = () => useContext(OnboardingContext);

export const OnboardingProvider = ({ children }: PropsWithChildren) => {
  const [onboardingInfo, setOnboardingInfo] = useState<OnboardingInfo>(initialOnboardingInfo);
  const [previewImage, setPreviewImage] = useState<string>('');

  const updateOnboardingInfo = (newInfo: Partial<OnboardingInfo>) => {
    setOnboardingInfo((prev) => ({ ...prev, ...newInfo }));
  };

  /**@todo 전체 값 확인용 useEffect */
  useEffect(() => {
    console.log('전체 값 확인:', onboardingInfo);
  }, [onboardingInfo]);

  useEffect(() => {
    console.log(' 컨텍스트 내 previewImage 확인', previewImage);
  }, [previewImage]);

  const OnboardingInfoContextValue = useMemo(
    () => ({
      onboardingInfo,
      updateOnboardingInfo,
      previewImage,
      setPreviewImage,
    }),
    [onboardingInfo, previewImage],
  );

  return (
    <OnboardingContext.Provider value={OnboardingInfoContextValue}>
      {children}
    </OnboardingContext.Provider>
  );
};
