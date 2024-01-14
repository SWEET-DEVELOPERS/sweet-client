import { IcLeft } from '../../../assets/svg';
import * as S from './GiftAddPageLayoutHeader.style';

interface GiftAddPageLayoutHeaderProps {
  title: string;
}

const GiftAddPageLayoutHeader = ({ title }: GiftAddPageLayoutHeaderProps) => {
  return (
    <S.GiftAddPageLayoutHeader>
      <IcLeft style={{ width: '3.6rem', height: '3.6rem', position: 'absolute', left: '0.7rem' }} />
      <S.HeaderText>{title}</S.HeaderText>
    </S.GiftAddPageLayoutHeader>
  );
};

export default GiftAddPageLayoutHeader;
