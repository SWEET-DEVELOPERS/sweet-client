import DoneCardRoom from '../../../../components/CardRoom/DoneCardRoom';
import GiftRoomHeader from '../GiftRoomHeader/GiftRoomHeader';
import { ClosedRoomArrayType, ClosedRoomType } from '../../../../types/member';
import * as S from './DoneGiftView.style';
import { useNavigate } from 'react-router-dom';

interface DoneGiftViewType {
  data: ClosedRoomType | undefined;
  style?: React.CSSProperties;
}

const DoneGiftView = ({ data }: DoneGiftViewType) => {
  const navigate = useNavigate();

  const renderRoom = (doneData: ClosedRoomArrayType | undefined, index: number) => {
    if (!doneData) return null;

    return (
      <DoneCardRoom
        key={index}
        user={doneData.gifteeName || ''}
        srcImage={doneData.imageUrl || ''}
        userCount={doneData.gifterNumber || 0}
        onClick={() => navigate(`/tournament-ranking/${doneData.gifteeName}/${doneData.roomId}`)}
      />
    );
  };

  return (
    <S.DoneGiftViewWrapper>
      <GiftRoomHeader name='종료된 선물방' page='detail-done' doneData={data} />
      <S.RoomWrapper>
        {data?.data.map((doneData, index) => renderRoom(doneData, index))}
        {(!data || !data.data || data.data.length === 0) && (
          <S.NoneRoom>지금 진행 중인 선물방이 없어요</S.NoneRoom>
        )}
      </S.RoomWrapper>
    </S.DoneGiftViewWrapper>
  );
};

export default DoneGiftView;
