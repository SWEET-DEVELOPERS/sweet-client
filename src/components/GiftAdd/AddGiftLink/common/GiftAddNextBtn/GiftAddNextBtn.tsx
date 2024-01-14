import IcRight from '../../../../../assets/svg/IcRight';
import * as S from './GiftAddNextBtn.styled';

interface GiftAddNextBtnProps {
  children: React.ReactNode;
  isActivated: boolean;
  onClick: () => void;
}
const GiftAddNextBtn = ({ children, isActivated, onClick }: GiftAddNextBtnProps) => {
  return (
    <S.GiftAddNextBtnWrapper $isActivated={isActivated} onClick={onClick}>
      {children}
      <IcRight style={{ width: '2.4rem', height: '2.4rem' }} />
    </S.GiftAddNextBtnWrapper>
  );
};

export default GiftAddNextBtn;
