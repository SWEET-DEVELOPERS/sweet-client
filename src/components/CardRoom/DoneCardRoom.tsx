import * as S from './CardRoom.style';
import { IcUser } from '../../assets/svg';
import Type3Tag from '../IcTag/Type3/Type3';

interface DoneCardRoomType {
  user: string;
  srcImage: string;
  userCount: number;
  onClick: VoidFunction;
}

const DoneCardRoom = ({ user, srcImage, userCount, onClick }: DoneCardRoomType) => {
  const multiline = user.length > 3 || (/[a-zA-Z]/.test(user) && user.length > 5);
  return (
    <S.CardRoomWrapper onClick={onClick}>
      <S.RoomImgWrapper src={srcImage} />
      <S.Text>
        <S.User multiline={multiline}>{user}님</S.User>을 위한 선물방
      </S.Text>
      <S.CountUser>
        <IcUser style={{ width: '1.6rem', height: '1.6rem', color: '#ACA7A9' }} />
        {userCount}
      </S.CountUser>
      <S.TagWrapper>
        <Type3Tag tag='토너먼트 완료' />
      </S.TagWrapper>
    </S.CardRoomWrapper>
  );
};

export default DoneCardRoom;
