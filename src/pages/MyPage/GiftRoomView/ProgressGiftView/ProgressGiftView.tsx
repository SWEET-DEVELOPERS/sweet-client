import GiftRoomHeader from '../GiftRoomHeader/GiftRoomHeader';
import * as S from './ProgressGiftView.style';

const ProgressGiftView = () => {
  const giftData: boolean = false;
  return (
    <S.Wrapper>
      <GiftRoomHeader name='진행중인 선물방' page='' />
      {giftData ? <p>있음</p> : <S.NoneRoom>지금 진행 중인 선물방이 없어요</S.NoneRoom>}
    </S.Wrapper>
  );
};

export default ProgressGiftView;
