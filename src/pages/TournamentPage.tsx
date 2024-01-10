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
  padding: 1.2rem 2rem 0 2rem;
`;
