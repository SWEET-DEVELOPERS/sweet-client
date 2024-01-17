import * as S from './MiniTimer.styled';

interface MiniTimerProps {
  time: Date;
}

function MiniTimer({ time }: MiniTimerProps) {
  const formattedTime = time.toLocaleTimeString();

  return (
    <S.MiniTimerWrapper>
      <S.MiniTimerNumbers>{formattedTime}</S.MiniTimerNumbers>
    </S.MiniTimerWrapper>
  );
}

export default MiniTimer;
