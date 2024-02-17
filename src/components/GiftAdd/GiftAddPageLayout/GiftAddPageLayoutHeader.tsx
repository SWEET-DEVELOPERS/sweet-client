import { useNavigate, useParams } from 'react-router-dom';
import { IcLeft } from '../../../assets/svg';
import * as S from './GiftAddPageLayoutHeader.style';

interface GiftAddPageLayoutHeaderProps {
  title: string;
}

const GiftAddPageLayoutHeader = ({ title }: GiftAddPageLayoutHeaderProps) => {
  const navigate = useNavigate();
  const params = useParams();
  const roomId = params.roomId;
  const onClickBackBtn = () => {
    navigate(`/gift-home/${roomId}`);
  };

  return (
    <S.GiftAddPageLayoutHeader>
      <IcLeft
        style={{
          width: '3.6rem',
          height: '3.6rem',
          position: 'absolute',
          left: '0.7rem',
          cursor: 'pointer',
        }}
        onClick={onClickBackBtn}
      />
      <S.HeaderText>{title}</S.HeaderText>
    </S.GiftAddPageLayoutHeader>
  );
};

export default GiftAddPageLayoutHeader;
