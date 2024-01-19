import React from 'react';
import * as S from './CountDownTimer.styled';
import { IcTimeColon } from '../../../assets/svg';
import CountDownCard from './ CountDownCard/CountDownCard';
import { useCountDown } from '../../../hooks/useCountDown';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountDown(targetDate.toISOString());
  return (
    <S.TimerWrapper>
      {days > 0 ? (
        <>
          <CountDownCard text={'D'} />
          <S.DashDiv />
          <CountDownCard text={days.toString()} />
        </>
      ) : (
        <>
          <CountDownCard text={hours.toString().padStart(2, '0')} />
          <IcTimeColon style={{ width: '0.3rem' }} />
          <CountDownCard text={minutes.toString().padStart(2, '0')} />
          <IcTimeColon style={{ width: '0.3rem' }} />
          <CountDownCard text={seconds.toString().padStart(2, '0')} />
        </>
      )}
    </S.TimerWrapper>
  );
};

export default CountdownTimer;
