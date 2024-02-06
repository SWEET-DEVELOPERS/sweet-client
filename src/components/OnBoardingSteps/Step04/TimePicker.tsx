import { useRef, useState } from 'react';
import { IcUnselectedClock } from '../../../assets/svg';
import * as S from './Step04.style';

interface TimePickerProps {
  onSelect: (selectedTime: string) => void;
}

const TimePicker = ({ onSelect }: TimePickerProps) => {
  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<string>('');

  const clockRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    clockRef.current?.showPicker();
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
  );
};

export default TimePicker;
