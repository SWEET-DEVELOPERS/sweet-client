import { toast } from 'react-toastify';
import { useOnboardingContext } from '../../context/Onboarding/OnboardingContext';

const useNameInput = () => {
  const { onboardingInfo, updateOnboardingInfo } = useOnboardingContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    const hasSpecialCharacter = /[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(inputValue);
    const hasIphoneSpecialCharacter = /[\ud800-\udfff]/.test(inputValue);
    const hasEmoji =
      /[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u.test(
        inputValue,
      );

    if (hasSpecialCharacter || hasIphoneSpecialCharacter || hasEmoji) {
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
      inputValue = inputValue.replace(
        /[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu,
        '',
      ); //아이폰 이모티콘 제거
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
