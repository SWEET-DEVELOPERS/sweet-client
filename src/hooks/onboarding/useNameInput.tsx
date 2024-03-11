import { toast } from 'react-toastify';
import { useOnboardingContext } from '../../context/Onboarding/OnboardingContext';
import { MESSAGE } from '../../core/toast-messages';

const useNameInput = () => {
  const { onboardingInfo, updateOnboardingInfo } = useOnboardingContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    const hasSpecialCharacter = /[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(inputValue);
    const hasIphoneSpecialCharacter = /[\ud800-\udfff]/.test(inputValue);

    if (hasSpecialCharacter || hasIphoneSpecialCharacter) {
      toast.info(MESSAGE.VALIDATE_SPACIAL_CHARACTER, {
        position: 'top-right',
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'colored',
        icon: false,
      });

      inputValue = inputValue.replace(/[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, ''); // 일반 특수문자 제거
      inputValue = inputValue.replace(/[\ud800-\udfff]/g, ''); // 아이폰 특수문자 제거

      updateOnboardingInfo({ gifteeName: inputValue });
    } else {
      updateOnboardingInfo({ gifteeName: inputValue });
    }
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
