import { IcLeft, IcMenu } from '../../../../assets/svg';
import * as S from './DetailHeader.style';

interface DetailHeaderProps {
  title: string;
}

const DetailHeader = ({ title }: DetailHeaderProps) => {
  return (
    <S.DetailHeaderWrapper>
      <IcLeft />
      <S.Title>{title}</S.Title>
      <IcMenu />
    </S.DetailHeaderWrapper>
  );
};

export default DetailHeader;
