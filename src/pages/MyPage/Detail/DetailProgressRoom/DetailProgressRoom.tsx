import EditCardRoom from '../../../../components/CardRoom/EditCardRoom';
import ProgressCardRoom from '../../../../components/CardRoom/ProgressCardRoom';
import useGetActiveRoom from '../../../../hooks/queries/member/useGetActiveRoom';
import * as S from './DetailProgress.style';

const DetailProgressRoom = () => {
  const data = useGetActiveRoom()?.data;
  console.log(data);
  return (
    <S.DetailProgressRoomWrapper>
      <S.RoomWrapper>
        {Array.isArray(data) ? (
          data.map((item, index) =>
            item.isOwner ? (
              <EditCardRoom
                key={index}
                user={item.gifteeName}
                userCount={item.gifterNumber}
                srcImage={item.imageUrl}
              />
            ) : (
              <ProgressCardRoom
                key={index}
                user={item.gifteeName || ''}
                userCount={item.gifterNumber || 0}
                srcImage={item.imageUrl || ''}
              />
            ),
          )
        ) : (
          <p>데이터가 없습니다.</p>
        )}
      </S.RoomWrapper>
    </S.DetailProgressRoomWrapper>
  );
};

export default DetailProgressRoom;
