import useGetRoomMember from '../../../hooks/queries/member/useGetRoomMember';
import CardGuest from './CardGuest/CardGuest';
import Rectangle from '../../../assets/img/Rectangle.png';
import * as S from './EditRoom.style';

const EditRoom = () => {
  const roomMemberWholeData = useGetRoomMember(1)?.data;
  const roomMemberData = roomMemberWholeData?.roomMemberDtoList;
  console.log(roomMemberWholeData);
  return (
    <S.EditRoomWrapper>
      <S.TextWrapper>
        <S.Text>{roomMemberWholeData?.gifterNumber}명이</S.Text>
        <S.Text>{roomMemberWholeData?.myId}님을 위한</S.Text>
        <S.Text>선물을 준비하고 있어요</S.Text>
      </S.TextWrapper>
      <S.CardWrapper>
        <CardGuest user='개설자' makerState={true} profileImageUrl={Rectangle} />

        {Array.isArray(roomMemberData) ? (
          roomMemberData.map((item, index) => (
            <CardGuest
              key={index}
              user={item?.name}
              makerState={false}
              profileImageUrl={item?.profileImageUrl}
            />
          ))
        ) : (
          <p>null</p>
        )}
      </S.CardWrapper>
    </S.EditRoomWrapper>
  );
};

export default EditRoom;
