import { IcGift } from '../../../assets/svg';
import * as S from './GiftStatusBar.styled';

const GiftStatusBar = () => {
  const currentStatus = 1;
  return (
    <S.GiftStatusBarWrapper>
      <S.GiftsWrapper>
        <IcGift style={{ width: '2.4rem', height: '2.4rem' }} />
        <IcGift style={{ width: '2.4rem', height: '2.4rem' }} />
      </S.GiftsWrapper>
      <S.GiftsStatusText>{currentStatus}/2</S.GiftsStatusText>
    </S.GiftStatusBarWrapper>
  );
};

export default GiftStatusBar;
