import { toast } from 'react-toastify';
import { useOnboardingContext } from '../../context/Onboarding/OnboardingContext';

const useNameInput = () => {
  const { onboardingInfo, updateOnboardingInfo } = useOnboardingContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    const hasSpecialCharacter = /[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(inputValue);
    const hasIphoneSpecialCharacter = /[\ud800-\udfff]/.test(inputValue);

    if (hasSpecialCharacter || hasIphoneSpecialCharacter) {
      toast.info('특수문자는 입력하실 수 없습니다.', {
        position: 'top-right',
        autoClose: 2000,
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
