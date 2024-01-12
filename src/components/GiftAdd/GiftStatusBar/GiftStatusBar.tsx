import { IcGift } from '../../../assets/svg';
import * as S from './GiftStatusBar.styled';

interface GiftStatusBarProps {
  registeredGiftNum: number;
}

const GiftStatusBar = ({ registeredGiftNum }: GiftStatusBarProps) => {
  return (
    <S.GiftStatusBarWrapper>
      <S.GiftsWrapper>
        <IcGift
          style={{
            width: '2.4rem',
            height: '2.4rem',
            color: registeredGiftNum === 1 ? '#E1DEDF' : '##FF2176',
          }}
        />
        <IcGift style={{ width: '2.4rem', height: '2.4rem', color: '#E1DEDF' }} />
      </S.GiftsWrapper>
      <S.GiftsStatusText>{registeredGiftNum}/2</S.GiftsStatusText>
    </S.GiftStatusBarWrapper>
  );
};

export default GiftStatusBar;
