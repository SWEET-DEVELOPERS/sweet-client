import EditCardRoom from '../../../../components/CardRoom/EditCardRoom';
import GiftRoomHeader from '../GiftRoomHeader/GiftRoomHeader';
import { ActiveRoomType } from '../../../../types/user';
import ProgressCardRoom from '../../../../components/CardRoom/ProgressCardRoom';
import * as S from './ProgressGiftView.style';

interface ProgressGiftViewType {
  data: ActiveRoomType | undefined;
}

const ProgressGiftView = ({ data }: ProgressGiftViewType) => {
  const progressData1 = data ? data[0] : undefined;
  const progressData2 = data ? data[1] : undefined;

  console.log(progressData1);
  return (
    <S.ProgressGiftViewWrapper>
      <GiftRoomHeader name='진행중인 선물방' page='detail-progress' />
      <S.RoomWrapper>
        {progressData1 && (
          <>
            {progressData1.isOwner ? (
              <EditCardRoom
                user={progressData1.gifteeName}
                userCount={progressData1.gifterNumber}
                srcImage={progressData1.imageUrl}
              />
            ) : (
              <ProgressCardRoom
                user={progressData1.gifteeName || ''}
                userCount={progressData1.gifterNumber || 0}
                srcImage={progressData1.imageUrl || ''}
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
              />
            ) : (
              <ProgressCardRoom
                user={progressData2.gifteeName || ''}
                userCount={progressData2.gifterNumber || 0}
                srcImage={progressData2.imageUrl || ''}
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
