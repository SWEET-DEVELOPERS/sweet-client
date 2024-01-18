import { useCountDown } from '../../../hooks/useCountDown';
import * as S from './MiniTimer.styled';

interface MiniTimerProps {
  targetDate: string;
}

function MiniTimer({ targetDate }: MiniTimerProps) {
  const [hours, minutes, seconds] = useCountDown(targetDate);
  console.log('Countdown:', hours, 'hours', minutes, 'minutes', seconds, 'seconds');

  return (
    <S.MiniTimerWrapper>
      <S.MiniTimerNumbers>
        {hours}:{minutes}:{seconds}
      </S.MiniTimerNumbers>
    </S.MiniTimerWrapper>
  );
}

export default MiniTimer;
