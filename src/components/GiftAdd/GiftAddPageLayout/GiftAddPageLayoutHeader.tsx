import { useNavigate } from 'react-router-dom';
import { IcLeft } from '../../../assets/svg';
import * as S from './GiftAddPageLayoutHeader.style';

interface GiftAddPageLayoutHeaderProps {
  title: string;
}

const GiftAddPageLayoutHeader = ({ title }: GiftAddPageLayoutHeaderProps) => {
  const navigate = useNavigate();

  const onClickBackBtn = () => {
    console.log('navigate 되나?');
    navigate('/gift-home');
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
