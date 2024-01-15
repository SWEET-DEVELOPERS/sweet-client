import CardRoom from '../../../../components/CardRoom/ProgressCardRoom';
import EditCardRoom from '../../../../components/CardRoom/EditCardRoom';
import GiftRoomHeader from '../GiftRoomHeader/GiftRoomHeader';
import * as S from './ProgressGiftView.style';
import { ActiveRoomType } from '../../../../types/user';

interface ProgressGiftViewType {
  data: ActiveRoomType | undefined;
}

const ProgressGiftView = ({ data }: ProgressGiftViewType) => {
  //const giftData: boolean = true;
  return (
    <S.ProgressGiftViewWrapper>
      <GiftRoomHeader name='진행중인 선물방' page='detail-progress' />
      <S.RoomWrapper>
        {!data ? (
          <>
            <CardRoom />
            <EditCardRoom />
          </>
        ) : (
          <S.NoneRoom>지금 진행 중인 선물방이 없어요</S.NoneRoom>
        )}
      </S.RoomWrapper>
    </S.ProgressGiftViewWrapper>
  );
};

export default ProgressGiftView;
