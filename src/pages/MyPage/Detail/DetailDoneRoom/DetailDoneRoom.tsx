import DoneCardRoom from '../../../../components/CardRoom/DoneCardRoom';
import * as S from './DetailDoneRoom.style';

const DetailDoneRoom = () => {
  return (
    <S.Wrapper>
      <S.RoomWrapper>
        <DoneCardRoom />
        <DoneCardRoom />
      </S.RoomWrapper>
    </S.Wrapper>
  );
};

export default DetailDoneRoom;
