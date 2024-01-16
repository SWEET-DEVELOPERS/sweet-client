import { IcCancel } from '../../../../assets/svg';
import Type1Tag from '../../../../components/IcTag/Type1/Type1';
import ProfileImage from '../../ProfileImage/ProfileImage';
import * as S from './CardGuest.style';
import useDeleteRoomMember from '../../../../hooks/queries/room/useDeleteRoomMember';
import { useNavigate } from 'react-router';

interface CardGuestProps {
  user?: string;
  makerState: boolean;
  profileImageUrl: string | undefined;
  roomId: number;
  memberId: number;
}

const CardGuest = ({ user, makerState, profileImageUrl, roomId, memberId }: CardGuestProps) => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate('/editpage', { state: { roomId, memberId } });
    useDeleteRoomMember(roomId, memberId);
  };
  return (
    <S.CardGuestWrapper>
      <S.UserWrapper>
        {profileImageUrl ? <ProfileImage image={profileImageUrl} /> : <p>null</p>}

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
