import { IcLeft, IcMenu } from '../../../../assets/svg';
import * as S from './DetailHeader.style';

interface DetailHeaderProps {
  title: string;
}

const DetailHeader = ({ title }: DetailHeaderProps) => {
  return (
    <S.Wrapper>
      <IcLeft />
      <S.Title>{title}</S.Title>
      <IcMenu />
    </S.Wrapper>
  );
};

export default DetailHeader;
