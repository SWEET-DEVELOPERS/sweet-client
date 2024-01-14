import * as S from './CardRoom.style';
import Rectangle from '../../assets/img/Rectangle.png';
import { IcUser } from '../../assets/svg';
import Type3Tag from '../IcTag/Type3/Type3';

const DoneCardRoom = () => {
  const user = '가나다라마바사';
  const userCount = 5;
  return (
    <S.Wrapper>
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
    </S.Wrapper>
  );
};

export default DoneCardRoom;
