import TournamentRankingCard from './TournamentRankingCard/TournamentRankingCard';
import TournamentRankingTitle from './TournamentRankingTitle/TournamentRankingTitle';
import { RankingWrapper } from './TournamentRanking.style';
import { IcMedal1 } from '../../../assets/svg';

const TournamentRanking = () => {
  return (
    <div>
      <TournamentRankingTitle />
      <RankingWrapper>
        <IcMedal1 style={{ width: '2.5rem' }} />
        <TournamentRankingCard />
      </RankingWrapper>
    </div>
  );
};

export default TournamentRanking;
