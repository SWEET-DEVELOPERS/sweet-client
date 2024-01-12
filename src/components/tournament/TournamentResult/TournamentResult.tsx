import TournamentResultCard from './TournamentResultCard/TournamentResultCard';
import TournamentResultFooter from './TournamentResultFooter/TournamentResultFooter';
import TournamentResultUser from './TournamentResultUser/TournamentResultUser';
import TournamentTitle from './TournamentTitle/TournamentTitle';

const TournamentResult = () => {
  return (
    <>
      <TournamentTitle />
      <TournamentResultCard />
      <TournamentResultUser />
      <TournamentResultFooter />
    </>
  );
};

export default TournamentResult;
