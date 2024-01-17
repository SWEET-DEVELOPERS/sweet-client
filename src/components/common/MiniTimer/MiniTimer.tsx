import { useCountDown } from '../../../hooks/useCountDown';
import * as S from './MiniTimer.styled';

interface MiniTimerProps {
  targetDate: string;
}

function MiniTimer({ targetDate }: MiniTimerProps) {
  const today = new Date();
  const formattedTargetDate = new Date(targetDate);
  // const navigate = useNavigate();
  if (formattedTargetDate < today) {
    // 이따가 토너먼트 뷰로 연결!
    console.log('시간 지남~!');
  }

  console.log('Formatted Date:', targetDate);

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
