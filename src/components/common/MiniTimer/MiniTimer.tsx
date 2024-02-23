import { useEffect } from 'react';
import IcClock from '../../../assets/svg/IcClock';
import { useCountDown } from '../../../hooks/useCountDown';
import * as S from './MiniTimer.styled';
import useHandleCountDownZero from '../../../hooks/gift/useHandleCountDownZero';

interface MiniTimerProps {
  targetDate: string;
  giftee: string;
}

const MiniTimer = ({ targetDate, giftee }: MiniTimerProps) => {
  const [days, hours, minutes, seconds] = useCountDown(targetDate);
  const handleCountDownZero = useHandleCountDownZero(giftee);
  useEffect(() => {
    if (hours <= 0 && minutes <= 0 && seconds <= 0) {
      handleCountDownZero();
    }
  }, [hours, minutes, seconds, useHandleCountDownZero]);

  return (
    <S.MiniTimerWrapper>
      <IcClock style={{ width: '1.7rem', height: '1.7rem', color: '#FF2176' }} />
      <S.MiniTimerNumbers>
        {days > 0 ? (
          <span>D - {days}</span>
        ) : (
          <span>
            {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:
            {seconds.toString().padStart(2, '0')}
          </span>
        )}
      </S.MiniTimerNumbers>
    </S.MiniTimerWrapper>
  );
};

export default MiniTimer;
