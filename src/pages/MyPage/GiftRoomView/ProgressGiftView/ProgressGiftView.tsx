import CardRoom from '../../../../components/CardRoom/ProgressCardRoom';
import EditCardRoom from '../../../../components/CardRoom/EditCardRoom';
import GiftRoomHeader from '../GiftRoomHeader/GiftRoomHeader';
import * as S from './ProgressGiftView.style';

const ProgressGiftView = () => {
  const giftData: boolean = true;
  return (
    <S.Wrapper>
      <GiftRoomHeader name='진행중인 선물방' page='detail-progress' />
      {giftData ? (
        <S.RoomWrapper>
          <CardRoom />
          <EditCardRoom />
        </S.RoomWrapper>
      ) : (
        <S.NoneRoom>지금 진행 중인 선물방이 없어요</S.NoneRoom>
      )}
    </S.Wrapper>
  );
};

export default ProgressGiftView;
