import DoneCardRoom from '../../../../components/CardRoom/DoneCardRoom';
import GiftRoomHeader from '../GiftRoomHeader/GiftRoomHeader';
import { ClosedRoomType } from '../../../../types/user';
import * as S from './DoneGiftView.style';

interface DoneGiftViewType {
  data: ClosedRoomType | undefined;
}

const DoneGiftView = ({ data }: DoneGiftViewType) => {
  const doneData1 = Array.isArray(data) ? data[0] : undefined;
  const doneData2 = Array.isArray(data) ? data[1] : undefined;

  return (
    <S.DoneGiftViewWrapper>
      <GiftRoomHeader name='종료된 선물방' page='detail-done' doneData={data} />
      <S.RoomWrapper>
        {doneData1 && (
          <DoneCardRoom
            user={doneData1?.gifteeName || ''}
            imageUrl={doneData1?.imageUrl || ''}
            userCount={doneData1?.gifterNumber || 0}
          />
        )}

        {doneData2 && (
          <DoneCardRoom
            user={doneData2?.gifteeName || ''}
            imageUrl={doneData2?.imageUrl || ''}
            userCount={doneData2?.gifterNumber || 0}
          />
        )}

        {!doneData1 && !doneData2 && <S.NoneRoom>지금 진행 중인 선물방이 없어요</S.NoneRoom>}
      </S.RoomWrapper>
    </S.DoneGiftViewWrapper>
  );
};

export default DoneGiftView;
