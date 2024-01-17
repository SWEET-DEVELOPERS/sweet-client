import useGetRoomMember from '../../../hooks/queries/room/useGetRoomMember';
import CardGuest from './CardGuest/CardGuest';
import * as S from './EditRoom.style';

interface EditRoom {
  roomId: number;
}

const EditRoom = ({ roomId }: EditRoom) => {
  // const { roomId } = useParams<{ roomId: string }>();
  // const parsedRoomId = parseInt(roomId, 10);
  const roomMemberWholeData = useGetRoomMember(roomId)?.data;
  console.log(roomMemberWholeData);

  const roomOwnerData = roomMemberWholeData?.owner;
  const roomGifteeData = roomMemberWholeData?.room;
  const roomMemberData = roomMemberWholeData?.members;
  console.log(roomMemberWholeData);
  return (
    <S.EditRoomWrapper>
      <S.TextWrapper>
        <S.Text>{roomGifteeData?.gifterNumber}명이</S.Text>
        <S.Text>{roomGifteeData?.gifteeName}님을 위한</S.Text>
        <S.Text>선물을 준비하고 있어요</S.Text>
      </S.TextWrapper>
      <S.CardWrapper>
        <CardGuest
          user={roomOwnerData?.name}
          makerState={true}
          profileImageUrl={roomOwnerData?.profileImgUrl}
          memberId={roomOwnerData?.ownerId}
          roomId={roomId}
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
