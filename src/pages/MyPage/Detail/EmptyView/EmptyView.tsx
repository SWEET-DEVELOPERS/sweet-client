import { IcLogoEmpty } from '../../../../assets/svg';
import BtnSmallStroke from '../../../../components/common/Button/Cta/SmallStroke/BtnSmallStroke';
import * as S from './EmptyView.style';

const EmptyView = () => {
  return (
    <S.EmptyViewWrapper>
      <IcLogoEmpty />
      <S.Text>준비했던 선물이 없어요</S.Text>
      <BtnSmallStroke>새로운 선물 준바하기</BtnSmallStroke>
    </S.EmptyViewWrapper>
  );
};

export default EmptyView;
