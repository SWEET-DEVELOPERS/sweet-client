import DoneCardRoom from '../../../../components/CardRoom/DoneCardRoom';
import GiftRoomHeader from '../GiftRoomHeader/GiftRoomHeader';
import * as S from './DoneGiftView.style';

const DoneGiftView = () => {
  const giftData: boolean = true;
  return (
    <S.DoneGiftViewWrapper>
      <GiftRoomHeader name='종료된 선물방' page='detail-done' />
      {giftData ? (
        <S.RoomWrapper>
          <DoneCardRoom />
        </S.RoomWrapper>
      ) : (
        <S.NoneRoom>준비했던 선물이 없어요</S.NoneRoom>
      )}
    </S.DoneGiftViewWrapper>
  );
};

export default DoneGiftView;
