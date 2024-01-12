import GiftRoomHeader from '../GiftRoomHeader/GiftRoomHeader';
import * as S from './DoneGiftView.style';

const DoneGiftView = () => {
  const giftData: boolean = false;
  return (
    <S.Wrapper>
      <GiftRoomHeader name='종료된 선물방' />
      <S.RoomWrapper>
        {giftData ? <p>있음</p> : <S.NoneRoom>준비했던 선물이 없어요</S.NoneRoom>}
      </S.RoomWrapper>
    </S.Wrapper>
  );
};

export default DoneGiftView;
