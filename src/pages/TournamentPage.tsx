import styled from 'styled-components';
import TournamentContainer from '../components/TournamentNew/Intro/TournamentContainer';

const TournamentPage = () => {
  return (
    <TournamentPageWrapper>
      <TournamentContainer />
    </TournamentPageWrapper>
  );
};

export default TournamentPage;

const TournamentPageWrapper = styled.section`
  padding: 1.2rem 2rem 0 2rem;
`;
