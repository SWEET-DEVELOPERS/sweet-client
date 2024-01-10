import Title from '../../common/title/Title';
import { IcUnselectedCalender } from '../../../assets/svg';
import * as S from './Step03.style';
import BtnNext from '../../common/Button/Next/BtnNext';

interface GiftDeliveryProps {
  onNext: VoidFunction;
}

const GiftDelivery = (props: GiftDeliveryProps) => {
  const { onNext } = props;

  return (
    <>
      {/* TODO 추후 로그인된 유저네임으로 변경 및 인풋창 클릭 시 켈린더 호출*/}
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
      <BtnNext type='button' onClick={onNext}>
        다음
      </BtnNext>
    </>
  );
};

export default GiftDelivery;
