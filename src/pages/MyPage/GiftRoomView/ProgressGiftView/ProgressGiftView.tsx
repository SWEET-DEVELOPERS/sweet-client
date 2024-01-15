import EditCardRoom from '../../../../components/CardRoom/EditCardRoom';
import GiftRoomHeader from '../GiftRoomHeader/GiftRoomHeader';
import { ActiveRoomType } from '../../../../types/user';
import ProgressCardRoom from '../../../../components/CardRoom/ProgressCardRoom';
import * as S from './ProgressGiftView.style';

interface ProgressGiftViewType {
  data: ActiveRoomType | undefined;
}

const ProgressGiftView = ({ data }: ProgressGiftViewType) => {
  const progressData = data?.data[0];

  console.log(progressData?.isOwner);
  return (
    <S.ProgressGiftViewWrapper>
      <GiftRoomHeader name='진행중인 선물방' page='detail-progress' />
      <S.RoomWrapper>
        {!data ? (
          <>
            {progressData?.isOwner ? (
              <EditCardRoom
                user={progressData?.gifteeName}
                userCount={progressData?.gifterNumber}
                srcImage={progressData?.imageUrl}
              />
            ) : (
              <ProgressCardRoom
                user={progressData?.gifteeName || ''}
                userCount={progressData?.gifterNumber || 0}
                srcImage={progressData?.imageUrl || ''}
              />
            )}
          </>
        ) : (
          <S.NoneRoom>지금 진행 중인 선물방이 없어요</S.NoneRoom>
        )}
      </S.RoomWrapper>
    </S.ProgressGiftViewWrapper>
  );
};

export default ProgressGiftView;
