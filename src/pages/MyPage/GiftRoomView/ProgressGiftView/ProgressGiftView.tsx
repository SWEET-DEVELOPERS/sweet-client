import EditCardRoom from '../../../../components/CardRoom/EditCardRoom';
import GiftRoomHeader from '../GiftRoomHeader/GiftRoomHeader';
import { ActiveRoomArrayType, ActiveRoomType } from '../../../../types/member';
import ProgressCardRoom from '../../../../components/CardRoom/ProgressCardRoom';
import { useNavigate } from 'react-router-dom';
import DateCheck from '../../../../components/DateCheck/DateCheck';
import * as S from './ProgressGiftView.style';

interface ProgressGiftViewProps {
  data: ActiveRoomType | undefined;
  style?: React.CSSProperties;
}

const ProgressGiftView: React.FC<ProgressGiftViewProps> = ({ data }) => {
  const navigate = useNavigate();

  const [progressData1, progressData2] = Array.isArray(data) ? data : [undefined, undefined];

  const getNavigateLink = (progressData: ActiveRoomArrayType) => {
    const isFuture = DateCheck({ date: progressData.tournamentStartDate });
    return isFuture
      ? `/gift-home/${progressData.roomId}`
      : `/tournament/${progressData.gifteeName}/${progressData.roomId}`;
  };

  return (
    <S.ProgressGiftViewWrapper>
      <GiftRoomHeader name='진행중인 선물방' page='detail-progress' activeData={data} />
      <S.RoomWrapper>
        {[progressData1, progressData2].map(
          (progressData, index) =>
            progressData && (
              <>
                {progressData.isOwner ? (
                  <EditCardRoom
                    user={progressData.gifteeName}
                    userCount={progressData.gifterNumber}
                    srcImage={progressData.imageUrl}
                    roomId={progressData.roomId}
                    date={progressData.tournamentStartDate}
                    onClick={() => navigate(getNavigateLink(progressData))}
                    key={index}
                  />
                ) : (
                  <ProgressCardRoom
                    user={progressData.gifteeName || ''}
                    userCount={progressData.gifterNumber || 0}
                    srcImage={progressData.imageUrl || ''}
                    roomId={progressData.roomId}
                    date={progressData.tournamentStartDate}
                    onClick={() => navigate(getNavigateLink(progressData))}
                    key={index}
                  />
                )}
              </>
            ),
        )}
        {!progressData1 && !progressData2 && (
          <S.NoneRoom>지금 진행 중인 선물방이 없어요</S.NoneRoom>
        )}
      </S.RoomWrapper>
    </S.ProgressGiftViewWrapper>
  );
};

export default ProgressGiftView;
