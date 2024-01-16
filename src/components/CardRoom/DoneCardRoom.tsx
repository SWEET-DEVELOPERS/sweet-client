import * as S from './CardRoom.style';
import Rectangle from '../../assets/img/Rectangle.png';
import { IcUser } from '../../assets/svg';
import Type3Tag from '../IcTag/Type3/Type3';

interface DoneCardRoomType {
  user: string;
  imageUrl: string;
  userCount: number;
}

const DoneCardRoom = ({ user, imageUrl, userCount }: DoneCardRoomType) => {
  return (
    <S.CardRoomWrapper>
      <img src={Rectangle} />
      <S.Text>
        <S.User>{user}님</S.User>을 위한 선물방
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
