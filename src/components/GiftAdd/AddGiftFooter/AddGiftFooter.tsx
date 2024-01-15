import { IcLeft } from '../../../assets/svg';
import GiftAddNextBtn from '../AddGiftLink/common/GiftAddNextBtn/GiftAddNextBtn';
import * as S from './AddGiftFooter.styled';

interface AddGiftFooterProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isActivated: boolean;
}

const AddGiftFooter = ({ setStep, isActivated }: AddGiftFooterProps) => {
  const onClick = () => {
    if (isActivated) {
      setStep(0);
    }
  };

  const handlePrevBtnClick = () => {
    setStep(1);
  };

  return (
    <S.AddGiftFooterWrapper>
      <S.BtnPrev>
        <IcLeft style={{ width: '2.4rem', height: '2.4rem' }} onClick={handlePrevBtnClick} />
        이전
      </S.BtnPrev>
      <GiftAddNextBtn isActivated={isActivated} onClick={onClick} children='완료' />
    </S.AddGiftFooterWrapper>
  );
};

export default AddGiftFooter;
