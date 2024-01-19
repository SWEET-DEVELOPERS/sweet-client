import { useNavigate } from 'react-router';
import { IcLeft, IcMenu } from '../../../../assets/svg';
import * as S from './DetailHeader.style';

interface DetailHeaderProps {
  title: string;
  customStyle?: React.CSSProperties;
}

const DetailHeader = ({ title, customStyle }: DetailHeaderProps) => {
  const navigate = useNavigate();
  const handleIcon = () => {
    navigate(-1);
  };
  return (
    <S.DetailHeaderWrapper style={customStyle}>
      <IcLeft
        style={{ width: '3.6rem', zIndex: '999', marginLeft: '0.7rem' }}
        onClick={handleIcon}
      />
      <S.Title>{title}</S.Title>
    </S.DetailHeaderWrapper>
  );
};

export default DetailHeader;
