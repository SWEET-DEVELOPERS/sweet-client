import DoneCardRoom from '../../../../components/CardRoom/DoneCardRoom';
import * as S from './DetailDoneRoom.style';

const DetailDoneRoom = () => {
  return (
    <S.DetailDoneRoomWrapper>
      <S.RoomWrapper>
        <DoneCardRoom />
        <DoneCardRoom />
      </S.RoomWrapper>
    </S.DetailDoneRoomWrapper>
  );
};

export default DetailDoneRoom;
