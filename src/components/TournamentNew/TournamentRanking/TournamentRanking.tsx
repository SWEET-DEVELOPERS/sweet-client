import TournamentRankingCard from './TournamentRankingCard/TournamentRankingCard';
import TournamentRankingTitle from './TournamentRankingTitle/TournamentRankingTitle';
import { RankingWrapper } from './TournamentRanking.style';
import { IcMedal1 } from '../../../assets/svg';
import useGetRanking from '../../../hooks/queries/tournament/useGetRanking';


const TournamentRanking = () => {

  const RankingData = useGetRanking({ roomId: 2 });
  console.log(RankingData);

 const tournamentRankingData = RankingData?.data || [];
  return (
    <>
      <TournamentRankingTitle />
      <RankingWrapper>
        <IcMedal1 style={{ width: '2.5rem' }} />
        <TournamentRankingCard RankingData={tournamentRankingData} />
      </RankingWrapper>
    </>
  );
};

export default TournamentRanking;
