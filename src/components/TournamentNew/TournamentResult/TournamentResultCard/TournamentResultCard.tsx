import exampleItemImg from '../../../../assets/img/Rectangle.png';
import { GiftData } from '../../../../core/mockupData';
import PriceTag from '../../../common/title/Price/PriceTag';
import * as S from './TournamentResultCard.style';

interface TournamentResultCardProps {
  item: GiftData | null;
}
const TournamentResultCard: React.FC<TournamentResultCardProps> = ({ item }) => {
  if (!item) {
    return <div>Item not available</div>;
  }
  return (
    <>
      <S.TournamentCardWrapper>
        <S.TournamentImgWrapper>
          <img src={exampleItemImg} alt='제품이미지' />
        </S.TournamentImgWrapper>

        <S.ItemInfo>
          <S.Title>{item.name}</S.Title>
          <PriceTag price={item.cost} />
        </S.ItemInfo>
      </S.TournamentCardWrapper>
    </>
  );
};

export default TournamentResultCard;
