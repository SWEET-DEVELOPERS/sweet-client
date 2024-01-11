import IcRight from '../../../assets/svg/IcRight';
import * as S from './GiftAddNextBtn.styled';

interface GiftAddNextBtnProps {
  children: React.ReactNode;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isActivated: boolean;
}
const GiftAddNextBtn = ({ children, setStep, isActivated }: GiftAddNextBtnProps) => {
  const onClick = () => {
    if (isActivated) {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <S.Wrapper isActivated={isActivated} onClick={onClick}>
      {children}
      <IcRight style={{ width: '2.4rem', height: '2.4rem' }} />
    </S.Wrapper>
  );
};

export default GiftAddNextBtn;
