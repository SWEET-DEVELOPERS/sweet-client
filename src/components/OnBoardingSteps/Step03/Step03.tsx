import Title from '../../common/title/Title';
import { IcUnselectedCalender } from '../../../assets/svg';
import * as S from './Step03.style';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import OnBoardingBtn from '../onboardingBtn/OnBoardingBtn';
import 'react-day-picker/dist/style.css';
import useCalendarOpen from '../../../hooks/onboarding/useCalendarOpen';

interface GiftDeliveryProps {
  onNext: VoidFunction;
}

const GiftDelivery = (props: GiftDeliveryProps) => {
  const { onNext } = props;

  const { isOpen, isActivated, disabledDays, openCalendar, handleDateSelect, onboardingInfo } =
    useCalendarOpen();

  return (
    <>
      <Title userName={`${onboardingInfo.gifteeName}`}>님께</Title>
      <Title>
        언제 선물을
        <br />
        전달하실 예정인가요?
      </Title>
      <S.Wrapper $hasContent={isOpen}>
        <S.Input
          placeholder='날짜를 선택해주세요'
          value={
            onboardingInfo.deliveryDate ? format(onboardingInfo.deliveryDate, 'y년 M월 d일') : ''
          }
          onChange={(e) => e.preventDefault()}
        />
        <S.IconWrapper>
          <IcUnselectedCalender
            style={{ width: '2.4rem', height: '2.4rem' }}
            onClick={openCalendar}
          />
        </S.IconWrapper>
      </S.Wrapper>
      {isOpen && (
        <S.CalenderWrapper>
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
        </S.CalenderWrapper>
      )}

      <OnBoardingBtn isActivated={isActivated} setStep={onNext}>
        다음
      </OnBoardingBtn>
    </>
  );
};

export default GiftDelivery;
