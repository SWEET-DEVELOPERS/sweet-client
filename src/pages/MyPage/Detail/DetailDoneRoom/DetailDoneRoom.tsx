import DoneCardRoom from '../../../../components/CardRoom/DoneCardRoom';
import useGetDoneRoom from '../../../../hooks/queries/member/useGetClosedRoom';
import * as S from './DetailDoneRoom.style';

const DetailDoneRoom = () => {
  const data = useGetDoneRoom()?.data;
  console.log(data);
  return (
    <S.DetailDoneRoomWrapper>
      <S.RoomWrapper>
        {Array.isArray(data) ? (
          data.map((item, index) => (
            <DoneCardRoom
              key={index}
              user={item?.gifteeName}
              imageUrl={item?.imageUrl}
              userCount={item?.gifterNumber}
            />
          ))
        ) : (
          <p>데이터가 없습니다.</p>
        )}
      </S.RoomWrapper>
    </S.DetailDoneRoomWrapper>
  );
};

export default DetailDoneRoom;
