import { IcCancel } from '../../../../assets/svg';
import Type1Tag from '../../../../components/IcTag/Type1/Type1';
import ProfileImage from '../../ProfileImage/ProfileImage';
import * as S from './CardGuest.style';
import useDeleteRoomMember from '../../../../hooks/queries/room/useDeleteRoomMember';
import { useLocation } from 'react-router';

interface CardGuestProps {
  user?: string;
  makerState: boolean;
  profileImageUrl?: string;
  memberId?: number;
}

const CardGuest = ({ user, makerState, profileImageUrl, memberId }: CardGuestProps) => {
  const handleButton = () => {
    if (memberId !== undefined) {
      const location = useLocation();
      const searchParams = new URLSearchParams(location.search);
      const roomIdString = searchParams.get('roomId');

      if (roomIdString !== null) {
        const roomId = parseInt(roomIdString);
        console.log('추출된 초대 코드', roomId);
        const { mutation } = useDeleteRoomMember({ roomId, memberId });

        mutation.mutate();
      } else {
        console.error('roomId is null');
      }
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
