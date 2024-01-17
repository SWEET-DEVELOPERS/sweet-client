import * as S from './MiniTimer.styled';

interface MiniTimerProps {
  time: Date;
}

function MiniTimer({ time }: MiniTimerProps) {
  if (!time || !(time instanceof Date)) {
    return <div>Error: Invalid targetDate</div>;
  }

  const formattedTime = time.toLocaleTimeString();

  return (
    <S.MiniTimerWrapper>
      <S.MiniTimerNumbers>{formattedTime}</S.MiniTimerNumbers>
    </S.MiniTimerWrapper>
  );
}

export default MiniTimer;
