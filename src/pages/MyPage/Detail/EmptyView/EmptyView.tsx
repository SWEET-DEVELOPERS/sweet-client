import { useNavigate } from 'react-router-dom';
import { IcLogoEmpty } from '../../../../assets/svg';
import BtnSmallStroke from '../../../../components/common/Button/Cta/SmallStroke/BtnSmallStroke';
import DetailHeader from '../../../../components/LeftIconHeader/LeftIconHeader';
import * as S from './EmptyView.style';

interface EmptyViewType {
  title: string;
}

const EmptyView = ({ title }: EmptyViewType) => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate('/onboarding');
  };
  return (
    <S.EmptyViewWrapper>
      <DetailHeader title={title} />
      <IcLogoEmpty />
      <S.Text>준비했던 선물이 없어요</S.Text>
      <BtnSmallStroke onClick={handleClickButton}>새로운 선물 준바하기</BtnSmallStroke>
    </S.EmptyViewWrapper>
  );
};

export default EmptyView;
