import React, { useEffect } from 'react';
import * as S from './CountDownTimer.styled';
import { IcTimeColon } from '../../../assets/svg';
import CountDownCard from './ CountDownCard/CountDownCard';
import { useCountDown } from '../../../hooks/useCountDown';
import useHandleCountDownZero from '../../../hooks/gift/useHandleCountDownZero';

interface CountdownTimerProps {
  targetDate: Date;
  giftee: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, giftee }) => {
  const [days, hours, minutes, seconds] = useCountDown(targetDate.toISOString());
  const handleCountDownZero = useHandleCountDownZero(giftee);
  useEffect(() => {
    if (hours <= 0 && minutes <= 0 && seconds <= 0) {
      handleCountDownZero();
    }
  }, [hours, minutes, seconds, useHandleCountDownZero]);

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
