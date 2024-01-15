import DoneCardRoom from '../../../../components/CardRoom/DoneCardRoom';
import GiftRoomHeader from '../GiftRoomHeader/GiftRoomHeader';
import { ClosedRoomType } from '../../../../types/user';
import * as S from './DoneGiftView.style';

interface DoneGiftViewType {
  data: ClosedRoomType | undefined;
}

const DoneGiftView = ({ data }: DoneGiftViewType) => {
  //console.log(data[0]);

  return (
    <S.DoneGiftViewWrapper>
      <GiftRoomHeader name='종료된 선물방' page='detail-done' />
      <S.RoomWrapper>
        {!data ? (
          <>{/* <DoneCardRoom user={data.done} imgSrc= userCount/> */}</>
        ) : (
          <S.NoneRoom>준비했던 선물이 없어요</S.NoneRoom>
        )}
      </S.RoomWrapper>
    </S.DoneGiftViewWrapper>
  );
};

export default DoneGiftView;
