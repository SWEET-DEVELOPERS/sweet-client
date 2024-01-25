import React, { useRef, useState } from 'react';
import { IcUnselectedClock } from '../../../assets/svg';
import * as S from './Step04.style';

interface TimePickerProps {
  onSelect: (selectedTime: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ onSelect }) => {
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
    console.log(selectedTime);
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

      <div
        className='custom-time-picker'
        // style={{ display: 'flex' }}
      ></div>
    </S.IconField>
  );
};

export default TimePicker;
