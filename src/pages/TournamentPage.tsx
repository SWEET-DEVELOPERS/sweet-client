import TournamentRanking from '../components/TournamentNew/TournamentRanking/TournamentRanking';

interface TournamentRankingProps {
  roomId: number;
  giftee: string;
}
const TournamentPage = ({ roomId, giftee }: TournamentRankingProps) => {
  return <TournamentRanking roomId={roomId} giftee={giftee} />;
};

export default TournamentPage;
