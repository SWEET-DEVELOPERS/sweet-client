import EditCardRoom from '../../../../components/CardRoom/EditCardRoom';
import ProgressCardRoom from '../../../../components/CardRoom/ProgressCardRoom';
import * as S from './DetailProgress.style';

const DetailProgressRoom = () => {
  return (
    <S.Wrapper>
      <S.RoomWrapper>
        <EditCardRoom />
        <ProgressCardRoom />
      </S.RoomWrapper>
    </S.Wrapper>
  );
};

export default DetailProgressRoom;