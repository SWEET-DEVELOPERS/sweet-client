import React, { useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';
import { IcUnselectedClock } from '../../../assets/svg';
import * as S from './Step04.style';

interface TimePickerProps {
  onSelect: (selectedTime: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ onSelect }) => {
  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isPickerOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isPickerOpen]);

  const handleIconClick = () => {
    setIsPickerOpen(!isPickerOpen);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    onSelect(time);
    setIsPickerOpen(false);
  };

  return (
    <S.IconField>
      <label htmlFor='clock'>
        <IcUnselectedClock
          style={{ width: '2.4rem', height: '2.4rem', position: 'relative' }}
          onClick={handleIconClick}
        />
      </label>
      {isPickerOpen ? (
        <div className='custom-time-picker' style={{ display: isPickerOpen ? 'flex' : 'none' }}>
          <input
            type='time'
            id=''
            onChange={(e) => handleTimeSelect(e.target.value)}
            style={{ display: 'block' }}
          />
        </div>
      ) : null}
    </S.IconField>
  );
};

export default TimePicker;
