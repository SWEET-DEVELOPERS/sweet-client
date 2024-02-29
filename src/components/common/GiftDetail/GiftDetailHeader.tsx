import { useNavigate } from 'react-router-dom';
import * as S from './GiftDetailHeader.style';

interface GiftDetailHeaderProps {
  title: string;
  roomId: string;
}

const GiftDetailHeader = ({ title, roomId }: GiftDetailHeaderProps) => {
  const navigate = useNavigate();

  const handleClickBtn = () => {
    navigate(`/gift-home/${roomId}`);
  };

  return (
    <S.GiftDetailHeaderWrapper>
      <S.IcLeftSvg onClick={handleClickBtn} />
      {title}
    </S.GiftDetailHeaderWrapper>
  );
};

export default GiftDetailHeader;
