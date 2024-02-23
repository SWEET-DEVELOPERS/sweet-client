import { useParams } from 'react-router';
import TournamentRanking from '../../components/Tournament/TournamentRanking/TournamentRanking';

const TournamentPage = () => {
  const params = useParams();

  const giftee = params.giftee;
  const roomIdString = params.roomId;
  const roomId = parseInt(roomIdString || '', 10);
  return <TournamentRanking roomId={roomId} giftee={giftee} />;
};

export default TournamentPage;
