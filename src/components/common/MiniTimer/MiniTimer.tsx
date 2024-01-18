import IcClock from '../../../assets/svg/IcClock';
import { useCountDown } from '../../../hooks/useCountDown';
import * as S from './MiniTimer.styled';

interface MiniTimerProps {
  targetDate: string;
}

function MiniTimer({ targetDate }: MiniTimerProps) {
  const [days, hours, minutes, seconds] = useCountDown(targetDate);
  console.log(days);

  return (
    <S.MiniTimerWrapper>
      <IcClock style={{ width: '1.7rem', height: '1.7rem' }} />
      <S.MiniTimerNumbers>
        {hours}:{minutes}:{seconds}
      </S.MiniTimerNumbers>
    </S.MiniTimerWrapper>
  );
}

export default MiniTimer;
