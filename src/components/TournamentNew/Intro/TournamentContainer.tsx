import TournamentStartText from './TournamentStartText/TournamentStartText';
import TournamentItemCount from './TournamentItemCount/TournamentItemCount';
import * as S from './TournamentContatiner.style';
import TournamentStartButton from './TournamentStartButton/TournamentStartButton';
import useTournament from '../../../hooks/tournament/useTournament';
import TournamentFlowContainer from '../TournamentFlow/TournamentFlowContainer';
import useGetItem from '../../../hooks/queries/tournament/useGetItem';
import trophy from '../../../assets/img/3dic_trophy3.png';

interface TournamentIntroProps {
  roomId: number;
  giftee: string;
}

const TournamentContainer = ({ roomId, giftee }: TournamentIntroProps) => {
  const { showTournamentContainer, handleStartClick } = useTournament();
  const memberData = useGetItem({ roomId: roomId });
  console.log(memberData);

  const tournamentData = memberData?.data || [];
  return (
    <>
      {showTournamentContainer ? (
        <>
          <TournamentStartText giftee={giftee} />
          <TournamentItemCount />
          <S.TournamentImg>
            <img src={trophy} alt='트로피' />
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
