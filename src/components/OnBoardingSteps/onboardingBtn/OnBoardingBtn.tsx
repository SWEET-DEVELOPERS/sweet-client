import { CSSProperties } from 'styled-components';
import IcRight from '../../../assets/svg/IcRight';
import * as S from './OnBoardingBtn.style';

interface OnBoardingBtnProps {
  children: React.ReactNode;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isActivated: boolean;
  customStyle?: CSSProperties;
  onClick?: () => void;
}
const OnBoardingBtn = ({ children, setStep, isActivated }: OnBoardingBtnProps) => {
  const onClick = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <S.Wrapper>
      <S.Container $isActivated={isActivated} onClick={onClick} disabled={!isActivated}>
        <S.NextBtnText $isActivated={isActivated}>{children}</S.NextBtnText>
        <IcRight style={{ width: '2.4rem', height: '2.4rem' }} />
      </S.Container>
    </S.Wrapper>
  );
};

export default OnBoardingBtn;
