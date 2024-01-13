import TournamentCard from './TournamentCard/TournamentCard';
import { TournamentCardWrapper } from './TournamentFlowContainer.style';
import TournamentFooter from './TournamentFooter/TournamentFooter';
import TournamentTitle from './TournamentTitle/TournamentTitle';

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
