import TournamentCard from './TournamentCard/TournamentCard';
import TournamentFooter from './tournamentFooter/TournamentFooter';
import TournamentTitle from './tournamentTitle/TournamentTitle';
import { TournamentCardWrapper } from './TournamentFlowContainer.style';

const TournamentFlowContainer = () => {
  return (
    <>
      <TournamentTitle />
      <TournamentCardWrapper>
        <TournamentCard /> <TournamentCard />
      </TournamentCardWrapper>
      <TournamentFooter />
    </>
  );
};

export default TournamentFlowContainer;
