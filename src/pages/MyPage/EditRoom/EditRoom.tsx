import CardGuest from './CardGuest/CardGuest';
import * as S from './EditRoom.style';

const EditRoom = () => {
  const memberCount = 8;
  const candidate = '시동훈';
  return (
    <S.EditRoomWrapper>
      <S.TextWrapper>
        <S.Text>{memberCount}명이</S.Text>
        <S.Text>{candidate}님을 위한</S.Text>
        <S.Text>선물을 준비하고 있어요</S.Text>
      </S.TextWrapper>
      <S.CardWrapper>
        <CardGuest user='왕호은' makerState={true} />
        <CardGuest user='유지민' makerState={false} />
      </S.CardWrapper>
    </S.EditRoomWrapper>
  );
};

export default EditRoom;
