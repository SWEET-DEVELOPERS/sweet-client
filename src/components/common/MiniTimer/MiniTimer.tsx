import React from 'react';
import * as S from './MiniTimer.styled';

interface MiniTimerProps {
  time: string;
}

function MiniTimer({ time }: MiniTimerProps) {
  return (
    <S.MiniTimerWrapper>
      <S.MiniTimerNumbers>{time}</S.MiniTimerNumbers>
    </S.MiniTimerWrapper>
  );
}

export default MiniTimer;
