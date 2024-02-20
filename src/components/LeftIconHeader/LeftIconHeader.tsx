import { useNavigate } from 'react-router';
import { IcLeft } from '../../assets/svg';
import * as S from './LeftIconHeader.style';

interface LeftIconHeaderProps {
  title?: string;
  customStyle?: React.CSSProperties;
}

const LeftIconHeader = ({ title, customStyle }: LeftIconHeaderProps) => {
  const navigate = useNavigate();
  const handleIcon = () => {
    navigate(-1);
  };
  return (
    <S.LeftIconHeaderWrapper style={customStyle}>
      <IcLeft
        style={{ width: '3.6rem', zIndex: '999', marginLeft: '0.7rem' }}
        onClick={handleIcon}
      />
      <S.Title>{title}</S.Title>
    </S.LeftIconHeaderWrapper>
  );
};

export default LeftIconHeader;
