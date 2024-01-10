import GiftAddNextBtn from '../GiftAddNextBtn/GiftAddNextBtn';
import * as S from './GiftAddBtnWrapper.styled';
interface GiftAddBtnWrapperProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isActivated: boolean;
}

const GiftAddBtnWrapper = ({ setStep, isActivated }: GiftAddBtnWrapperProps) => {
  const BtnText = <S.BtnNextText>다음</S.BtnNextText>;

  return (
    <S.GiftAddBtnWrapper>
      <GiftAddNextBtn children={BtnText} setStep={setStep} isActivated={isActivated} />
    </S.GiftAddBtnWrapper>
  );
};

export default GiftAddBtnWrapper;
