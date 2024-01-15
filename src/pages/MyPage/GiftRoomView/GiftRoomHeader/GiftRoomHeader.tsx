import { useNavigate } from 'react-router-dom';
import { IcRight } from '../../../../assets/svg';
import * as S from './GiftRoomHeader.style';

interface GiftRoomHeaderProps {
  name: string;
  page: string;
}

const GiftRoomHeader = ({ name, page }: GiftRoomHeaderProps) => {
  const navigate = useNavigate();
  const handleHeader = () => {
    navigate(`/${page}`);
  };
  return (
    <S.GiftRoomHeaderWrapper onClick={handleHeader}>
      <S.Text>{name}</S.Text>
      <S.Icon>
        <IcRight style={{ width: '2.4rem' }} />
      </S.Icon>
    </S.GiftRoomHeaderWrapper>
  );
};
export default GiftRoomHeader;
