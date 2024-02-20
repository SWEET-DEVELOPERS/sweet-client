import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ClosedRoomArrayType, ClosedRoomType } from '../../../../types/member';
import DoneCardRoom from '../../../../components/CardRoom/DoneCardRoom';
import GiftRoomHeader from '../GiftRoomHeader/GiftRoomHeader';
import * as S from './DoneGiftView.style';

interface DoneGiftViewProps {
  data: ClosedRoomType | undefined;
  customStyle?: React.CSSProperties;
}

const DoneGiftView = ({ data }: DoneGiftViewProps) => {
  const navigate = useNavigate();

  const [doneGiftRoomData1, doneGiftRoomData2] = Array.isArray(data)
    ? data
    : [undefined, undefined];

  const renderRoom = (doneGiftRoomData: ClosedRoomArrayType | undefined, index: number) => {
    if (!doneGiftRoomData) return null;

    return (
      <DoneCardRoom
        key={index}
        user={doneGiftRoomData.gifteeName || ''}
        srcImage={doneGiftRoomData.imageUrl || ''}
        userCount={doneGiftRoomData.gifterNumber || 0}
        onClick={() =>
          navigate(`/tournament-ranking/${doneGiftRoomData.gifteeName}/${doneGiftRoomData.roomId}`)
        }
      />
    );
  };

  return (
    <S.DoneGiftViewWrapper>
      <GiftRoomHeader name='종료된 선물방' page='detail-done' doneGiftRoomData={data} />
      <S.RoomWrapper>
        {[doneGiftRoomData1, doneGiftRoomData2].map(renderRoom)}
        {!doneGiftRoomData1 && !doneGiftRoomData2 && (
          <S.NoneRoom>지금 진행 중인 선물방이 없어요</S.NoneRoom>
        )}
      </S.RoomWrapper>
    </S.DoneGiftViewWrapper>
  );
};

export default DoneGiftView;
