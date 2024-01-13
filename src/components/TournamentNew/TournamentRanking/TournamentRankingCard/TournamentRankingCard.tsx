import * as S from './TournamentRankingCard.style';
import example from '../../../../assets/img/Rectangle.png';
import PriceTag from '../../../common/title/Price/PriceTag';
const TournamentRankingCard = () => {
  return (
    <S.TournamentRankingCardWrapper>
      <img src={example} />
      <S.InfoWrapper>
        <S.Title>CHANEL 22 MINI 핸드백</S.Title>
        <PriceTag price={8130000} />
      </S.InfoWrapper>
    </S.TournamentRankingCardWrapper>
  );
};

export default TournamentRankingCard;
