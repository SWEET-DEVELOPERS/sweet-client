import * as S from './CardRoom.style';
import Rectangle from '../../assets/img/Rectangle.png';
import { IcUser } from '../../assets/svg';
import Type2Tag from '../IcTag/Type2/Type2';

const ProgressCardRoom = () => {
  const user = '가나다라마바사';
  const userCount = 5;
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
        <Type2Tag tag='토너먼트 진행 중' />
      </S.TagWrapper>
    </S.CardRoomWrapper>
  );
};

export default ProgressCardRoom;
