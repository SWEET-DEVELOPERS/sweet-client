import { useParams } from 'react-router';
import useGetRoomMember from '../../../hooks/queries/room/useGetRoomMember';
import CardGuest from './CardGuest/CardGuest';
import * as S from './EditRoom.style';
import useGetRoomOwner from '../../../hooks/queries/room/useGetRoomOwner';

const EditRoom = () => {
  const { roomId } = useParams();

  const roomIdInt = parseInt(roomId || '', 10);

  const { data: roomOwnerData } = useGetRoomOwner(roomIdInt);
  const { data: roomMemberData } = useGetRoomMember(roomIdInt);

  const { owner: roomOwner, room: roomGifteeData } = roomOwnerData || {};

  return (
    <S.EditRoomWrapper>
      <S.TextWrapper>
        <S.Text>{roomGifteeData?.gifterNumber || 0}명이</S.Text>
        <S.Text>{roomGifteeData?.gifteeName || ''}님을 위한</S.Text>
        <S.Text>선물을 준비하고 있어요</S.Text>
      </S.TextWrapper>
      <S.CardWrapper>
        {roomOwner && (
          <CardGuest
            user={roomOwner.name}
            makerState={true}
            profileImageUrl={roomOwner.profileImageUrl}
            memberId={roomOwner.ownerId}
          />
        )}

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
