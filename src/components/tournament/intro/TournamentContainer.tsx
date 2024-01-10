import TournamentStartText from './tournamentStartText/TournamentStartText';
import TournamentItemCount from './tournamentItemCount/TournamentItemCount';
import styled from 'styled-components';
import { Svg3Dicons } from '../../../assets/svg';
import TournamentStartButton from './tournamentStartButton/TournamentStartButton';

export default function TournamentConatainer() {
  return (
    <>
      <TournamentStartText />
      <TournamentItemCount />
      <TournamentImg>
        <Svg3Dicons />
      </TournamentImg>
      <TournamentStartButton />
    </>
  );
}

const TournamentImg = styled.div`
  width: 20rem;
  height: 20rem;
  margin: 0 auto;
`;
