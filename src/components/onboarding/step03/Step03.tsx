import Title from '../../common/title/Title';
import { IcUnselectedCalender } from '../../../assets/svg';
import * as S from './Step03.style';
import BtnNext from '../../common/Button/Next/BtnNext';
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';
import { useState } from 'react';
import { format } from 'date-fns';

interface GiftDeliveryProps {
  onNext: VoidFunction;
}

const GiftDelivery = (props: GiftDeliveryProps) => {
  const { onNext } = props;
  const disabledDays = { before: new Date() };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const openCalendar = () => {
    setIsOpen(!isOpen);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setIsOpen(false);
  };

  return (
    <>
      {/* TODO 추후 로그인된 유저네임으로 변경*/}
      <Title userName='시동훈' title='님께' />
      <Title title='언제 선물을' />
      <Title title='전달하실 예정인가요?' />
      <S.Wrapper hasContent={isOpen}>
        <S.TextField>
          <S.Input
            placeholder='날짜를 선택해주세요'
            value={selectedDate ? format(selectedDate, 'y년 M월 d일') : ''}
          />
        </S.TextField>
        <S.IconField>
          <IcUnselectedCalender
            style={{ width: '2.4rem', height: '2.4rem' }}
            onClick={openCalendar}
          />
        </S.IconField>
      </S.Wrapper>
      {isOpen && (
        <DayPicker
          defaultMonth={new Date()}
          mode='single'
          onDayClick={handleDateSelect}
          disabled={disabledDays}
        />
      )}

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <BtnNext
          type='button'
          onClick={onNext}
          customStyle={{
            position: 'absolute',
            bottom: '0',
          }}
        >
          다음
        </BtnNext>
      </div>
    </>
  );
};

export default GiftDelivery;
