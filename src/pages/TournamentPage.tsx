import { useParams } from 'react-router';
import TournamentRanking from '../components/Tournament/TournamentRanking/TournamentRanking';

const TournamentPage = () => {
  const params = useParams();

  const giftee = params.giftee;
  const roomIdString = params.roomId;
  const roomId = parseInt(roomIdString || '', 10);
  console.log('추출된 초대 코드', roomId);
  return <TournamentRanking roomId={roomId} giftee={giftee} />;
};

export default TournamentPage;
