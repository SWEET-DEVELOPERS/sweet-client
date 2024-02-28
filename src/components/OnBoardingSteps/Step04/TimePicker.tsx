import { useEffect, useRef, useState } from 'react';
import { IcUnselectedClock } from '../../../assets/svg';
import * as S from './Step04.style';

interface TimePickerProps {
  onSelect: (selectedTime: string) => void;
}

const TimePicker = ({ onSelect }: TimePickerProps) => {
  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<string>('');

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
    setIsPickerOpen(!isPickerOpen);
    console.log('isPickerOpen', isPickerOpen);
    clockRef.current?.showPicker();
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    onSelect(time);
    setIsPickerOpen(false);

    /**@todo 사용하는 곳 없는 것을 방지하기 위한 콘솔 */
    console.log(selectedTime);
  };

  return (
    <>
      <S.Container $hasContent={isPickerOpen}>
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
            inputMode='none'
          />
          <label htmlFor='clock'>
            <IcUnselectedClock
              style={{ width: '2.4rem', height: '2.4rem' }}
              onClick={handleIconClick}
            />
          </label>
        </S.IconField>
      </S.Container>
    </>
  );
};

export default TimePicker;
