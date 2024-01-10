import styled from 'styled-components';
import TournamentConatainer from '../components/tournament/intro/TournamentContainer';

const TournamentPage = () => {
  return (
    <TournamentPageWrapper>
      <TournamentConatainer />
    </TournamentPageWrapper>
  );
};

export default TournamentPage;

const TournamentPageWrapper = styled.section`
  margin: 0 2rem;
`;
