import styled from 'styled-components';
import TournamentCard from './TournamentCard/TournamentCard';
import TournamentFooter from './tournamentFooter/TournamentFooter';
import TournamentTitle from './tournamentTitle/TournamentTitle';
const TournamentFlowContainer = () => {
  return (
    <>
      <>
        <TournamentTitle />
        <TournamentCardWrapper>
          <TournamentCard /> <TournamentCard />
        </TournamentCardWrapper>
        <TournamentFooter />
      </>
    </>
  );
};

export default TournamentFlowContainer;


const TournamentCardWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;
