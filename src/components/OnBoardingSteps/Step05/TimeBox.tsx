import * as S from './Step05.style';
import { IcGroup } from '../../../assets/svg';

const TimeBox = () => {
  const timeOptions = [
    { text: '6시간', dateType: 'today' },
    { text: '12시간', dateType: 'today' },
    { text: '18시간', dateType: 'nottoday' },
    { text: '24시간', dateType: 'nottoday' },
  ];
  return (
    <>
      {timeOptions.map((option, index) => (
        <S.DetailBox key={index}>
          <S.RadioBox>
            <IcGroup style={{ width: '2.4rem', height: '2.4rem' }} />
            <S.TimeText>{option.text}</S.TimeText>
          </S.RadioBox>
          {option.dateType === 'today' ? (
            <S.InTodayDate>6월 23일 당일</S.InTodayDate>
          ) : (
            <S.NotTodayDate>6월 23일 이후</S.NotTodayDate>
          )}
        </S.DetailBox>
      ))}
    </>
  );
};

export default TimeBox;
