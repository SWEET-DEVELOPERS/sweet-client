import Title from '../../common/title/Title';
import { IcUnselectedCalender } from '../../../assets/svg';
import * as S from './Step03.style';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import 'react-day-picker/dist/style.css';
import { NextBtnText } from '../Step01/Step01';

interface GiftDeliveryProps {
  onNext: VoidFunction;
  deliveryDate: string;
  setDeliveryDate: React.Dispatch<React.SetStateAction<string>>;
  onboardingInfo: {
    gifteeName: string;
    deliveryDate: string;
    tournamentStartDate: string;
    tournamentDuration: string;
  };
}

const GiftDelivery = (props: GiftDeliveryProps) => {
  const { onNext, deliveryDate, setDeliveryDate, onboardingInfo } = props;

  const disabledDays = { before: new Date() };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isActivated, setIsActivated] = useState<boolean>(false);
  const time = new Date();

  const openCalendar = () => {
    setIsOpen(!isOpen);
  };

  //TODO 이거 step04에서도 쓰이니 분리하면 좋겠다
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
  }, [deliveryDate]);

  return (
    <>
      {/* TODO 추후 로그인된 유저네임으로 변경 및 인풋창 클릭 시 켈린더 호출*/}
      <Title userName={`${onboardingInfo.gifteeName}`} title='님께' />
      <Title title='언제 선물을' />
      <Title title='전달하실 예정인가요?' />
      <S.Wrapper $hasContent={isOpen}>
        <S.TextField>
          <S.Input
            placeholder='날짜를 선택해주세요'
            value={selectedDate ? format(selectedDate, 'y년 M월 d일') : ''}
            onChange={(e) => e.preventDefault()}
          />
        </S.TextField>
        <S.IconField>
          <div
            style={{
              width: '4rem',
              height: '4rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <IcUnselectedCalender
              style={{ width: '2.4rem', height: '2.4rem' }}
              onClick={openCalendar}
            />
          </div>
        </S.IconField>
      </S.Wrapper>
      {isOpen && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <DayPicker
            defaultMonth={new Date()}
            mode='single'
            onDayClick={handleDateSelect}
            disabled={disabledDays}
            modifiersClassNames={{
              selected: 'my-selected',
              today: 'my-today',
            }}
            modifiersStyles={{
              disabled: { fontSize: '75%' },
            }}
          />
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <OnBoardingBtn isActivated={isActivated} setStep={onNext}>
          <NextBtnText isActivated={isActivated}>다음</NextBtnText>
        </OnBoardingBtn>
      </div>
    </>
  );
};

export default GiftDelivery;
