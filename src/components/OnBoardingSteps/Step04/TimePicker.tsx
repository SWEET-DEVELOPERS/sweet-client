import { useRef, useState } from 'react';
import { IcUnselectedClock } from '../../../assets/svg';
import * as S from './Step04.style';
import { useOnboardingContext } from '../../../context/Onboarding/OnboardingContext';
import { toast } from 'react-toastify';
import { MESSAGE } from '../../../core/toast-messages';

interface TimePickerProps {
  onSelect: (selectedTime: string) => void;
}

const TimePicker = ({ onSelect }: TimePickerProps) => {
  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);
  const { onboardingInfo, selectedTime, setSelectedTime } = useOnboardingContext();
  const clockRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    if (!onboardingInfo.tournamentStartDate) {
      toast(MESSAGE.UNSELECT_DATE);
    } else {
      clockRef.current?.showPicker();
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    onSelect(time);
    setIsPickerOpen(false);

    /**@todo 사용하는 곳 없는 것을 방지하기 위한 콘솔 */
    console.log(selectedTime);
    console.log(isPickerOpen);
  };

  return (
    <>
      <S.TextField onClick={handleIconClick}>
        <S.Input
          placeholder='시작 시간을 선택해주세요'
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        />
      </S.TextField>
      <S.IconField>
        <input
          ref={clockRef}
          type='time'
          id='clock'
          onChange={(e) => handleTimeSelect(e.target.value)}
          style={{ display: 'flex', opacity: 0 }}
        />
        <label htmlFor='clock'>
          <IcUnselectedClock
            style={{ width: '2.4rem', height: '2.4rem' }}
            onClick={handleIconClick}
          />
        </label>
      </S.IconField>
    </>
  );
};

export default TimePicker;
