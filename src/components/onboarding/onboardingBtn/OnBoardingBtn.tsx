import IcRight from '../../../assets/svg/IcRight';
import * as S from './OnBoardingBtn.style';

interface OnBoardingBtnProps {
  children: React.ReactNode;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isActivated: boolean;
}
const OnBoardingBtn = ({ children, setStep, isActivated }: OnBoardingBtnProps) => {
  const onClick = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <S.Wrapper isActivated={isActivated} onClick={onClick}>
      {children}
      <IcRight style={{ width: '2.4rem', height: '2.4rem' }} />
    </S.Wrapper>
  );
};

export default OnBoardingBtn;