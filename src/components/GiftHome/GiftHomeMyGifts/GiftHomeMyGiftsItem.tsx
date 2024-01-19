import PriceTag from '../../common/title/Price/PriceTag';
import * as S from './GiftHomeMyGiftsItem.style';

interface GiftHomeMyGiftsItemProps {
  name: string;
  cost: number;
  imageUrl: string;
}

const GiftHomeMyGiftsItem: React.FC<GiftHomeMyGiftsItemProps> = ({ name, cost, imageUrl }) => {
  return (
    <S.GiftHomeMyGifts>
      <img src={imageUrl} />
      <S.InfoWrapper>
        <S.Title>{name}</S.Title>
        <PriceTag price={cost} />
      </S.InfoWrapper>
    </S.GiftHomeMyGifts>
  );
};

export default GiftHomeMyGiftsItem;
