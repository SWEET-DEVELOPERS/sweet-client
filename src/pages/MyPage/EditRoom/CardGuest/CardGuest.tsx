import { IcCancel } from '../../../../assets/svg';
import Type1Tag from '../../../../components/IcTag/Type1/Type1';
import ProfileImage from '../../ProfileImage/ProfileImage';
import * as S from './CardGuest.style';
import useDeleteRoomMember from '../../../../hooks/queries/room/useDeleteRoomMember';
// import { useLocation } from 'react-router';
import { useParams } from 'react-router-dom';

interface CardGuestProps {
  user: string;
  makerState: boolean;
  profileImageUrl: string;
  memberId: number;
}

const CardGuest = ({ user, makerState, profileImageUrl, memberId }: CardGuestProps) => {
  // 주소가 path variable 형태이기 때문에 location.search로 쿼리 파라미터를 가져올 수 없어
  // 룸아이디가 null로 받아지고 있었고, 이로 인해 400에러가 발생해서 임의로 수정했습니다
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);

  // const roomIdString = searchParams.get('roomId');

  const params = useParams();
  const roomIdString = params.roomId;

  const roomId = parseInt(roomIdString || '');
  console.log('추출된 초대 코드', roomId);
  const { mutation } = useDeleteRoomMember({ roomId, memberId });
  const handleButton = () => {
    mutation.mutate({ roomId, memberId });
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
