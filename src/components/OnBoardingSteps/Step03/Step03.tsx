import Title from '../../common/title/Title';
import { IcUnselectedCalender } from '../../../assets/svg';
import * as S from './Step03.style';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import 'react-day-picker/dist/style.css';
import OnBoardingHeader from '../onboardingHeader/OnBoardingHeader';

interface GiftDeliveryProps {
  onNext: VoidFunction;
  deliveryDate: string;
  setDeliveryDate: React.Dispatch<React.SetStateAction<string>>;
}

const GiftDelivery = (props: GiftDeliveryProps) => {
  const { onNext, deliveryDate, setDeliveryDate } = props;

  const disabledDays = { before: new Date() };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isActivated, setIsActivated] = useState<boolean>(false);
  const time = new Date();

  const openCalendar = () => {
    setIsOpen(!isOpen);
  };

  const handleDateSelect = (date: Date) => {
    const padTwoDigits = (value: number) => String(value).padStart(2, '0');

    const formattedDate =
      format(date, 'y-MM-dd') +
      'T' +
      `${padTwoDigits(time.getHours())}:${padTwoDigits(time.getMinutes())}:${padTwoDigits(
        time.getSeconds(),
      )}`;

    setSelectedDate(date);
    setIsOpen(false);
    setDeliveryDate(formattedDate);
    console.log('날짜', formattedDate);
  };

  useEffect(() => {
    deliveryDate ? setIsActivated(true) : setIsActivated(false);
    // console.log('useEffect 선택된 날짜', deliveryDate);
  }, [deliveryDate]);

  return (
    <>
      {/* TODO 추후 로그인된 유저네임으로 변경 및 인풋창 클릭 시 켈린더 호출*/}
      <OnBoardingHeader step={3} />
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
        <OnBoardingBtn isActivated={isActivated} setStep={onNext}>
          다음
        </OnBoardingBtn>
      </div>
    </>
  );
};

export default GiftDelivery;
