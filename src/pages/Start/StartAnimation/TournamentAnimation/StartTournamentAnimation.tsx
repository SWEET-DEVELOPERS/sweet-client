import { Tournament01, Tournament02, Tournament03, Tournament04 } from '../../../../assets/svg';
import * as S from './StartTournamentAnimation.style';

const StartTournamentAnimation = () => {
  return (
    <S.TournamentWrapper>
      <S.AnimatedTournament $animationDelay='0s' $style='0rem'>
        <Tournament04 />
      </S.AnimatedTournament>
      <S.AnimatedTournament $animationDelay='0.25s' $style='20rem'>
        <Tournament03 />
      </S.AnimatedTournament>
      <S.AnimatedTournament $animationDelay='0.5s' $style='40rem'>
        <Tournament02 />
      </S.AnimatedTournament>
      <S.AnimatedTournament $animationDelay='0.75s' $style='60rem'>
        <Tournament01 />
      </S.AnimatedTournament>
    </S.TournamentWrapper>
  );
};

export default StartTournamentAnimation;
