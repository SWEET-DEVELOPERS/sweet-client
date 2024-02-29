import GiftHomePriceTag from '../../common/GiftHome/Price/GiftHomePriceTag';
import * as S from './GiftHomeMyGiftsItem.style';

interface GiftHomeMyGiftsItemProps {
  name: string;
  cost: number;
  imageUrl: string;
}

const GiftHomeMyGiftsItem: React.FC<GiftHomeMyGiftsItemProps> = ({ name, cost, imageUrl }) => {
  return (
    <S.GiftHomeMyGifts>
      <S.GiftHomeMygiftsImg src={imageUrl} />
      <S.InfoWrapper>
        <S.Title>{name}</S.Title>
        <GiftHomePriceTag price={cost} fonts='body_09' colors='G_10' gap={0} />
      </S.InfoWrapper>
    </S.GiftHomeMyGifts>
  );
};

export default GiftHomeMyGiftsItem;
