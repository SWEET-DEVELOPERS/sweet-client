import EditCardRoom from '../../../../components/CardRoom/EditCardRoom';
import GiftRoomHeader from '../GiftRoomHeader/GiftRoomHeader';
import { ActiveRoomType } from '../../../../types/member';
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
  const progressData1 = Array.isArray(data) ? data[0] : undefined;
  const progressData2 = Array.isArray(data) ? data[1] : undefined;

  const getNavigateLink1 = (progressData1: any) => {
    const isFuture = DateCheck({ date: progressData1.tournamentStartDate });
    return isFuture
      ? `/gift-home/${progressData1.roomId}`
      : `/tournament/${progressData1.gifteeName}/${progressData1.roomId}`;
  };
  const getNavigateLink2 = (progressData2: any) => {
    const isFuture = DateCheck({ date: progressData2.tournamentStartDate });
    return isFuture
      ? `/gift-home/${progressData2.roomId}`
      : `/tournament/${progressData1.gifteeName}/${progressData2.roomId}`;
  };

  return (
    <S.ProgressGiftViewWrapper>
      <GiftRoomHeader name='진행중인 선물방' page='detail-progress' activeData={data} />
      <S.RoomWrapper>
        {progressData1 && (
          <>
            {progressData1.isOwner ? (
              <EditCardRoom
                user={progressData1.gifteeName}
                userCount={progressData1.gifterNumber}
                srcImage={progressData1.imageUrl}
                roomId={progressData1.roomId}
                date={progressData1.tournamentStartDate}
                onClick={() => navigate(getNavigateLink1(progressData1))}
              />
            ) : (
              <ProgressCardRoom
                user={progressData1.gifteeName || ''}
                userCount={progressData1.gifterNumber || 0}
                srcImage={progressData1.imageUrl || ''}
                roomId={progressData1.roomId}
                date={progressData1.tournamentStartDate}
                onClick={() => navigate(getNavigateLink1(progressData1))}
              />
            )}
          </>
        )}

        {progressData2 && (
          <>
            {progressData2.isOwner ? (
              <EditCardRoom
                user={progressData2.gifteeName}
                userCount={progressData2.gifterNumber}
                srcImage={progressData2.imageUrl}
                roomId={progressData2.roomId}
                date={progressData2.tournamentStartDate}
                onClick={() => navigate(getNavigateLink2(progressData2))}
              />
            ) : (
              <ProgressCardRoom
                user={progressData2.gifteeName || ''}
                userCount={progressData2.gifterNumber || 0}
                srcImage={progressData2.imageUrl || ''}
                roomId={progressData2.roomId}
                date={progressData2.tournamentStartDate}
                onClick={() => navigate(getNavigateLink2(progressData2))}
              />
            )}
          </>
        )}

        {!progressData1 && !progressData2 && (
          <S.NoneRoom>지금 진행 중인 선물방이 없어요</S.NoneRoom>
        )}
      </S.RoomWrapper>
    </S.ProgressGiftViewWrapper>
  );
};

export default ProgressGiftView;
