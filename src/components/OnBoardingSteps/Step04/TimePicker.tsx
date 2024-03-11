import { useEffect, useRef, useState } from 'react';
import { IcUnselectedClock } from '../../../assets/svg';
import * as S from './Step04.style';
import { useOnboardingContext } from '../../../context/Onboarding/OnboardingContext';
import { toast } from 'react-toastify';
import { MESSAGE } from '../../../core/toast-messages';
import ClockPicker from './ClockPicker';

interface TimePickerProps {
  onSelect: (selectedTime: string) => void;
}

const TimePicker = ({ onSelect }: TimePickerProps) => {
  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);
  const { onboardingInfo, selectedTime, setSelectedTime } = useOnboardingContext();
  const clockRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (clockRef.current && !clockRef.current.contains(event.target as Node)) {
        setIsPickerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const handleIconClick = () => {
    if (!onboardingInfo.tournamentStartDate) {
      toast(MESSAGE.UNSELECT_DATE);
    } else {
      setIsPickerOpen(!isPickerOpen);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    onSelect(time);
    setIsPickerOpen(false);

    /**@todo 사용하는 곳 없는 것을 방지하기 위한 콘솔 */
    console.log('timepicker 속 selectedTime', selectedTime);
  };

  return (
    <>
      <S.Container $hasContent={isPickerOpen}>
        <S.TextField onClick={handleIconClick}>
          <S.Input
            placeholder='시작 시간을 선택해주세요'
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            inputMode='none'
          />
        </S.TextField>
        <S.IconField>
          <IcUnselectedClock
            style={{ width: '2.4rem', height: '2.4rem' }}
            onClick={handleIconClick}
          />
        </S.IconField>
      </S.Container>
      {isPickerOpen && <ClockPicker onTimeSelect={handleTimeSelect} />}
    </>
  );
};

export default TimePicker;
