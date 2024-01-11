import { IcLeft } from '../../../assets/svg';
import GiftAddNextBtn from '../GiftAddNextBtn/GiftAddNextBtn';
import * as S from './AddGiftFooter.styled';

interface AddGiftFooterProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isActivated: boolean;
}

const AddGiftFooter = ({ setStep, isActivated }: AddGiftFooterProps) => {
  return (
    <S.TournamentFooterWrapper>
      <S.BtnPrev>
        <IcLeft style={{ width: '2.4rem', height: '2.4rem' }} />
        이전
      </S.BtnPrev>
      <GiftAddNextBtn setStep={setStep} isActivated={isActivated}>
        완료
      </GiftAddNextBtn>
    </S.TournamentFooterWrapper>
  );
};

export default AddGiftFooter;
