import { useParams } from 'react-router';
import useGetRoomMember from '../../../hooks/queries/room/useGetRoomMember';
import CardGuest from './CardGuest/CardGuest';
import * as S from './EditRoom.style';
import useGetRoomOwner from '../../../hooks/queries/room/useGetRoomOwner';

const EditRoom = () => {
  const params = useParams();

  const roomIdString = params.roomId;
  const roomId = parseInt(roomIdString || '', 10);
  const roomWholeMemberData = useGetRoomMember(roomId).data;
  const roomWholeOwnerData = useGetRoomOwner(roomId).data;

  const roomOwnerData = roomWholeOwnerData?.owner;
  const roomGifteeData = roomWholeOwnerData.room;
  const roomMemberData = roomWholeMemberData;

  return (
    <S.EditRoomWrapper>
      <S.TextWrapper>
        <S.Text>{roomGifteeData.gifterNumber}명이</S.Text>
        <S.Text>{roomGifteeData.gifteeName}님을 위한</S.Text>
        <S.Text>선물을 준비하고 있어요</S.Text>
      </S.TextWrapper>
      <S.CardWrapper>
        <CardGuest
          user={roomOwnerData.name}
          makerState={true}
          profileImageUrl={roomOwnerData?.profileImageUrl}
          memberId={roomOwnerData.ownerId}
        />

        {Array.isArray(roomMemberData) &&
          roomMemberData.map((item, index) => (
            <CardGuest
              key={index}
              user={item.name}
              makerState={false}
              profileImageUrl={item.profileImageUrl}
              memberId={item.memberId}
            />
          ))}
      </S.CardWrapper>
    </S.EditRoomWrapper>
  );
};

export default EditRoom;
