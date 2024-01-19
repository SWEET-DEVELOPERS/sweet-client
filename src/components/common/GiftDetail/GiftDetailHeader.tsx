import { useNavigate } from 'react-router-dom';
import { IcLeft, IcMenu } from '../../../assets/svg';
import * as S from './GiftDetailHeader.style';

interface GiftDetailHeaderProps {
  title: string;
  roomId: string;
  // targetDate: string;
}

const GiftDetailHeader = ({ title, roomId }: GiftDetailHeaderProps) => {
  const navigate = useNavigate();

  const handleClickBtn = () => {
    navigate(`/gift-home/${roomId}`);
  };

  return (
    <S.GiftDetailHeaderWrapper>
      <IcLeft
        style={{ width: '3.6rem', height: '3.6rem', cursor: 'pointer' }}
        onClick={handleClickBtn}
      />
      {title}
      <IcMenu style={{ width: '2.8rem', height: '2.8rem', cursor: 'pointer' }} />
    </S.GiftDetailHeaderWrapper>
  );
};

export default GiftDetailHeader;
