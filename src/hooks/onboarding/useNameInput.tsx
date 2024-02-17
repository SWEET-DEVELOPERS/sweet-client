import { useOnboardingContext } from '../../context/Onboarding/OnboardingContext';

const useNameInput = () => {
  const { onboardingInfo, updateOnboardingInfo } = useOnboardingContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const unicodeChars = [...inputValue].filter((char) => /[\ud800-\udfff]/.test(char)).length;

    inputValue.length + unicodeChars <= 10
      ? updateOnboardingInfo({ gifteeName: inputValue })
      : e.preventDefault();
  };

  const handleBtnClick = () => {
    updateOnboardingInfo({ gifteeName: '' });
  };

  const isActivated = onboardingInfo.gifteeName.length > 0;

  return {
    onboardingInfo,
    handleInputChange,
    handleBtnClick,
    isActivated,
  };
};

export default useNameInput;
