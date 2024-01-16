import useGetRoomMember from '../../../hooks/queries/room/useGetRoomMember';
import CardGuest from './CardGuest/CardGuest';
import Rectangle from '../../../assets/img/Rectangle.png';
import * as S from './EditRoom.style';

interface EditRoom {
  roomId: number;
}

const EditRoom = ({ roomId }: EditRoom) => {
  const roomMemberWholeData = useGetRoomMember(roomId)?.data;
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
        <CardGuest
          user='개설자'
          makerState={true}
          profileImageUrl={Rectangle}
          roomId={roomId}
          memberId={999}
        />

        {Array.isArray(roomMemberData) ? (
          roomMemberData.map((item, index) => (
            <CardGuest
              key={index}
              user={item?.name}
              makerState={false}
              profileImageUrl={item?.profileImageUrl}
              roomId={roomId}
              memberId={item?.memberId}
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
