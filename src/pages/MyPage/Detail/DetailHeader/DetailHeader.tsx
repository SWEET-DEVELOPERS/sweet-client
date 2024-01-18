import { useNavigate } from 'react-router';
import { IcLeft, IcMenu } from '../../../../assets/svg';
import * as S from './DetailHeader.style';

interface DetailHeaderProps {
  title: string;
}

const DetailHeader = ({ title }: DetailHeaderProps) => {
  const navigate = useNavigate();
  const handleIcon = () => {
    navigate(-1);
  };
  return (
    <S.DetailHeaderWrapper>
      <IcLeft style={{ width: '3.6rem' }} onClick={handleIcon} />
      <S.Title>{title}</S.Title>
      <IcMenu style={{ width: '2.8rem' }} />
    </S.DetailHeaderWrapper>
  );
};

export default DetailHeader;
