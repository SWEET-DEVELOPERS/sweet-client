import GiftAddNextBtn from '../GiftAddNextBtn/GiftAddNextBtn';
import * as S from './GiftAddBtnWrapper.styled';

interface GiftAddBtnWrapperProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isActivated: boolean;
}

const GiftAddBtnWrapper = ({ setStep, isActivated }: GiftAddBtnWrapperProps) => {
  const BtnText = <S.BtnNextText>다음</S.BtnNextText>;

  const handleClickNoLink = () => {
    setStep(3);
  };
  return (
    <S.GiftAddBtnWrapper>
      <S.NoLinkText onClick={handleClickNoLink}>링크 없이 상품을 등록할게요</S.NoLinkText>
      <GiftAddNextBtn children={BtnText} setStep={setStep} isActivated={isActivated} />
    </S.GiftAddBtnWrapper>
  );
};

export default GiftAddBtnWrapper;
