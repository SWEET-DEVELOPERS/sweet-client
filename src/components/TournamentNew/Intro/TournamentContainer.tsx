import TournamentStartText from './TournamentStartText/TournamentStartText';
import TournamentItemCount from './TournamentItemCount/TournamentItemCount';
import * as S from './TournamentContatiner.style';
import { Svg3Dicons } from '../../../assets/svg';
import TournamentStartButton from './TournamentStartButton/TournamentStartButton';
import useTournament from '../../../hooks/tournament/useTournament';
import TournamentFlowContainer from '../TournamentFlow/TournamentFlowContainer';
import useGetItem from '../../../hooks/queries/tournament/useGetItem';

const TournamentContainer = () => {
  const { showTournamentContainer, handleStartClick } = useTournament();
  const memberData = useGetItem({ roomId: 2 });
  console.log(memberData);

  // Use an empty array as a fallback if memberData is undefined
  const tournamentData = memberData?.data || [];
  return (
    <>
      {showTournamentContainer ? (
        <>
          <TournamentStartText />
          <TournamentItemCount />
          <S.TournamentImg>
            <Svg3Dicons />
          </S.TournamentImg>
          <TournamentStartButton onClick={handleStartClick} />
        </>
      ) : (
        <TournamentFlowContainer memberData={tournamentData} />
      )}
    </>
  );
};

export default TournamentContainer;
