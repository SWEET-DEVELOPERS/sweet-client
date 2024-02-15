import EditCardRoom from '../../../../components/CardRoom/EditCardRoom';
import GiftRoomHeader from '../GiftRoomHeader/GiftRoomHeader';
import { ActiveRoomArrayType, ActiveRoomType } from '../../../../types/member';
import ProgressCardRoom from '../../../../components/CardRoom/ProgressCardRoom';
import { useNavigate } from 'react-router-dom';
import DateCheck from '../../../../components/DateCheck/DateCheck';
import * as S from './ProgressGiftView.style';

interface ProgressGiftViewType {
  data: ActiveRoomType | undefined;
  style?: React.CSSProperties;
}

const ProgressGiftView = ({ data }: ProgressGiftViewType) => {
  const navigate = useNavigate();

  const getNavigateLink = (progressData: ActiveRoomArrayType) => {
    const isFuture = DateCheck({ date: progressData.tournamentStartDate });
    return isFuture
      ? `/gift-home/${progressData.roomId}`
      : `/tournament/${progressData.gifteeName}/${progressData.roomId}`;
  };

  const renderRoom = (progressData: ActiveRoomArrayType, index: number) => {
    if (!progressData) return null;

    const RoomComponent = progressData.isOwner ? EditCardRoom : ProgressCardRoom;

    return (
      <RoomComponent
        key={index}
        user={progressData.gifteeName || ''}
        userCount={progressData.gifterNumber || 0}
        srcImage={progressData.imageUrl || ''}
        roomId={progressData.roomId}
        date={progressData.tournamentStartDate}
        onClick={() => navigate(getNavigateLink(progressData))}
      />
    );
  };

  return (
    <S.ProgressGiftViewWrapper>
      <GiftRoomHeader name='진행중인 선물방' page='detail-progress' activeData={data} />
      <S.RoomWrapper>
        {data?.data?.map((progressData, index) => renderRoom(progressData, index))}
        {(!data || !data.data || data.data.length === 0) && (
          <S.NoneRoom>지금 진행 중인 선물방이 없어요</S.NoneRoom>
        )}
      </S.RoomWrapper>
    </S.ProgressGiftViewWrapper>
  );
};

export default ProgressGiftView;
