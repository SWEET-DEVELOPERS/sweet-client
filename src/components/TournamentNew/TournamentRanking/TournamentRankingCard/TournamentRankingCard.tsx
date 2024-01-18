import * as S from './TournamentRankingCard.style';
import PriceTag from '../../../common/title/Price/PriceTag';

interface TournamentRankingCardProps {
  name: string;
  cost: number;
  imageUrl: string;
}

const TournamentRankingCard: React.FC<TournamentRankingCardProps> = ({ name, cost, imageUrl }) => {
  return (
    <S.TournamentRankingCardWrapper>
      <img src={imageUrl} />
      <S.InfoWrapper>
        <S.Title>{name}</S.Title>
        <PriceTag price={cost} />
      </S.InfoWrapper>
    </S.TournamentRankingCardWrapper>
  );
};

export default TournamentRankingCard;
