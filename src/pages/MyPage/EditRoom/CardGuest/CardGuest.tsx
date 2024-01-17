import { IcCancel } from '../../../../assets/svg';
import Type1Tag from '../../../../components/IcTag/Type1/Type1';
import ProfileImage from '../../ProfileImage/ProfileImage';
import * as S from './CardGuest.style';
import useDeleteRoomMember from '../../../../hooks/queries/room/useDeleteRoomMember';

interface CardGuestProps {
  user?: string;
  makerState: boolean;
  profileImageUrl?: string;
  roomId: number;
  memberId?: number;
}

const CardGuest = ({ user, makerState, profileImageUrl, roomId, memberId }: CardGuestProps) => {
  const handleButton = () => {
    if (memberId !== undefined) {
      const { mutation } = useDeleteRoomMember({ roomId, memberId });
      mutation.mutateAsync();
    }
  };
  return (
    <S.CardGuestWrapper>
      <S.UserWrapper>
        <ProfileImage image={profileImageUrl} />
        <S.User>{user}</S.User>
      </S.UserWrapper>
      {makerState ? (
        <Type1Tag tag='개설자' />
      ) : (
        <IcCancel style={{ width: '2.4rem' }} onClick={handleButton} />
      )}
    </S.CardGuestWrapper>
  );
};

export default CardGuest;
