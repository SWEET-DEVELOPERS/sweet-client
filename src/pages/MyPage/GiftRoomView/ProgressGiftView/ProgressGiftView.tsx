import EditCardRoom from '../../../../components/CardRoom/EditCardRoom';
import GiftRoomHeader from '../GiftRoomHeader/GiftRoomHeader';
import ProgressCardRoom from '../../../../components/CardRoom/ProgressCardRoom';
import { useNavigate } from 'react-router-dom';
import DateCheck from '../../../../components/DateCheck/DateCheck';
import * as S from './ProgressGiftView.style';
import { ActiveRoomType, ActiveRoomArrayType } from '../../../../types/member';

interface ProgressGiftViewProps {
  data: ActiveRoomType | undefined;
  customStyle?: React.CSSProperties;
}

const ProgressGiftView = ({ data }: ProgressGiftViewProps) => {
  const navigate = useNavigate();

  const [progressGiftRoomData1, progressGiftRoomData2] = Array.isArray(data)
    ? data
    : [undefined, undefined];

  const getNavigateLink = (progressGiftRoomData: ActiveRoomArrayType) => {
    const isFuture = DateCheck({ date: progressGiftRoomData.tournamentStartDate });
    return isFuture
      ? `/gift-home/${progressGiftRoomData.roomId}`
      : `/tournament/${progressGiftRoomData.gifteeName}/${progressGiftRoomData.roomId}`;
  };

  const renderRoom = (progressGiftRoomData: ActiveRoomArrayType | undefined, index: number) => {
    if (!progressGiftRoomData) return null;

    const CardComponent = progressGiftRoomData.isOwner ? EditCardRoom : ProgressCardRoom;

    return (
      <CardComponent
        user={progressGiftRoomData.gifteeName || ''}
        userCount={progressGiftRoomData.gifterNumber || 0}
        srcImage={progressGiftRoomData.imageUrl || ''}
        roomId={progressGiftRoomData.roomId}
        date={progressGiftRoomData.tournamentStartDate}
        onClick={() => navigate(getNavigateLink(progressGiftRoomData))}
        key={index}
      />
    );
  };

  return (
    <S.ProgressGiftViewWrapper>
      <GiftRoomHeader name='진행중인 선물방' page='detail-progress' activeGiftRoomData={data} />
      <S.RoomWrapper>
        {[progressGiftRoomData1, progressGiftRoomData2].map((progressData, index) =>
          renderRoom(progressData, index),
        )}
        {!progressGiftRoomData1 && !progressGiftRoomData2 && (
          <S.NoneRoom>지금 진행 중인 선물방이 없어요</S.NoneRoom>
        )}
      </S.RoomWrapper>
    </S.ProgressGiftViewWrapper>
  );
};

export default ProgressGiftView;
