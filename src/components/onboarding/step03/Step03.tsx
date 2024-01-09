import Title from '../../common/title/Title';
import { IcUnselectedCalender } from '../../../assets/svg';
import * as S from './Step03.style';

const GiftDelivery = () => {
  return (
    <>
      {/* TODO 추후 로그인된 유저네임으로 변경*/}
      <Title userName='시동훈' title='님께' />
      <Title title='언제 선물을' />
      <Title title='전달하실 예정인가요?' />
      <S.Wrapper>
        <S.TextField>
          <S.Input placeholder='날짜를 선택해주세요' />
        </S.TextField>
        <S.IconField>
          <IcUnselectedCalender style={{ width: '2.4rem', height: '2.4rem' }} />
        </S.IconField>
      </S.Wrapper>
    </>
  );
};

export default GiftDelivery;
