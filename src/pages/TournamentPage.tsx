import { useLocation } from 'react-router';
import TournamentRanking from '../components/TournamentNew/TournamentRanking/TournamentRanking';

const TournamentPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const giftee = searchParams.get('giftee') || '';
  const roomIdString = searchParams.get('roomId');
  const roomId = parseInt(roomIdString || '', 10);
  console.log('추출된 초대 코드', roomId);
  return <TournamentRanking roomId={roomId} giftee={giftee} />;
};

export default TournamentPage;
