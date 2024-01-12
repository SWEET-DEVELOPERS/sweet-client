import * as S from './CardRoom.style';
import Rectangle from '../../assets/img/Rectangle.png';
import { IcSettings, IcUser } from '../../assets/svg';
import Type2Tag from '../IcTag/Type2/Type2';
import Type1Tag from '../IcTag/Type1/Type1';

const EditCardRoom = () => {
  const user = '가나다라마바사';
  const userCount = 5;
  return (
    <S.Wrapper>
      <img src={Rectangle} />
      <S.SettingWrapper>
        <IcSettings style={{ width: '2.4rem', height: '2.4rem', stroke: '#686566' }} />
      </S.SettingWrapper>
      <S.Text>
        <S.User>{user}님</S.User>을 위한 선물방
      </S.Text>
      <S.CountUser>
        <IcUser style={{ width: '1.6rem', height: '1.6rem', color: '#ACA7A9' }} />
        {userCount}
      </S.CountUser>
      <S.TagWrapper>
        <Type1Tag tag='개설자' />
        <Type2Tag tag='토너먼트 진행 중' />
      </S.TagWrapper>
    </S.Wrapper>
  );
};

export default EditCardRoom;
