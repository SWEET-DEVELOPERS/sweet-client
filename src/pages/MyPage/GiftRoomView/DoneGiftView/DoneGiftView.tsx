import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ClosedRoomArrayType, ClosedRoomType } from '../../../../types/member';
import DoneCardRoom from '../../../../components/CardRoom/DoneCardRoom';
import GiftRoomHeader from '../GiftRoomHeader/GiftRoomHeader';
import * as S from './DoneGiftView.style';

interface DoneGiftViewProps {
  data?: ClosedRoomType;
  customStyle?: React.CSSProperties;
}

const DoneGiftView: React.FC<DoneGiftViewProps> = ({ data }) => {
  const navigate = useNavigate();

  const [doneData1, doneData2] = Array.isArray(data) ? data : [undefined, undefined];

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
        {[doneData1, doneData2].map(renderRoom)}
        {!doneData1 && !doneData2 && <S.NoneRoom>지금 진행 중인 선물방이 없어요</S.NoneRoom>}
      </S.RoomWrapper>
    </S.DoneGiftViewWrapper>
  );
};

export default DoneGiftView;
