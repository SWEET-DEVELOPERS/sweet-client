import TournamentStartText from './tournamentStartText/TournamentStartText';
import TournamentItemCount from './tournamentItemCount/TournamentItemCount';
import styled from 'styled-components';
import { Svg3Dicons } from '../../../assets/svg';

export default function TournamentConatainer() {
  return (
    <>
      <TournamentStartText />
      <TournamentItemCount />
      <TournamentImg>
        <Svg3Dicons />
      </TournamentImg>
      {/* 공통버튼 btn_cta_fill 들어갈 예정*/}
    </>
  );
}

const TournamentImg = styled.div`
  width: 20rem;
  height: 20rem;
  margin: 0 auto;
`;
