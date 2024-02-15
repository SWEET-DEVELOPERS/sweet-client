import { useNavigate } from 'react-router-dom';
import { IcRight } from '../../../../assets/svg';
import { ActiveRoomType, ClosedRoomType } from '../../../../types/member';
import * as S from './GiftRoomHeader.style';

interface GiftRoomHeaderProps {
  name: string;
  page: string;
  activeData?: ActiveRoomType | undefined;
  doneData?: ClosedRoomType | undefined;
  style?: React.CSSProperties;
}

const GiftRoomHeader = ({ name, page, style }: GiftRoomHeaderProps) => {
  const navigate = useNavigate();
  const handleHeader = () => {
    navigate(`/${page}`);
  };

  return (
    <S.GiftRoomHeaderWrapper onClick={handleHeader} style={style}>
      <S.Text>{name}</S.Text>
      <S.Icon>
        <IcRight style={{ width: '2.4rem' }} />
      </S.Icon>
    </S.GiftRoomHeaderWrapper>
  );
};
export default GiftRoomHeader;
