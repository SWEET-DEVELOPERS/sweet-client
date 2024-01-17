import React, { useEffect, useState } from 'react';
import * as S from './CountDownTimer.styled';
import { IcTimeColon } from '../../../assets/svg';
import CountDownCard from './ CountDownCard/CountDownCard';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  if (!targetDate || !(targetDate instanceof Date)) {
    return <div>Error: Invalid targetDate</div>;
  }

  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const formatDigit = (digit: number): string => (digit < 10 ? `0${digit}` : `${digit}`);

  useEffect(() => {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
  }, [targetDate]);

  return (
    <S.TimerWrapper>
      {days > 0 ? (
        <>
          <CountDownCard text={'D'} />
          <S.DashDiv />
          <CountDownCard text={formatDigit(Math.floor(days / 10))} />
        </>
      ) : (
        <>
          <CountDownCard text={formatDigit(Math.floor(hours / 10))} />
          <IcTimeColon style={{ width: '0.3rem' }} />
          <CountDownCard text={formatDigit(Math.floor(minutes / 10))} />
          <IcTimeColon style={{ width: '0.3rem' }} />
          <CountDownCard text={formatDigit(Math.floor(seconds / 10))} />
        </>
      )}
    </S.TimerWrapper>
  );
};

export default CountdownTimer;
