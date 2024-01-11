import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import * as S from './OnBoardingNextBtnWrapper.style';

interface OnBoardingNextBtnWrapperProps {
  children: React.ReactNode;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isActivated: boolean;
}

const OnBoardingNextBtnWrapper = ({ setStep, isActivated }: OnBoardingNextBtnWrapperProps) => {
  const BtnText = <S.BtnNextText>다음</S.BtnNextText>;

  return (
    <S.OnBoardingNextBtnWrapper>
      <OnBoardingBtn children={BtnText} setStep={setStep} isActivated={isActivated} />
    </S.OnBoardingNextBtnWrapper>
  );
};

export default OnBoardingNextBtnWrapper;
