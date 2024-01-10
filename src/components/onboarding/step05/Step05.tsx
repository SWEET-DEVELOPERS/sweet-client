import SubTitle from '../../common/title/SubTitle';
import Title from '../../common/title/Title';
import { IcGroup } from '../../../assets/svg';
import * as S from './Step05.style';

const SetTournamentDuration = () => {
  // TODO 오늘 기준 날짜로 수정 & map함수로 수정

  const timeOptions = [
    { text: '6시간', dateType: 'today' },
    { text: '12시간', dateType: 'today' },
    { text: '18시간', dateType: 'nottoday' },
    { text: '24시간', dateType: 'nottoday' },
  ];

  return (
    <div>
      <div>
        <Title title='선물 토너먼트' />
        <Title title='진행 시간을 설정해주세요' />
      </div>
      <div style={{ marginTop: '0.8rem' }}>
        <SubTitle subTitle='토너먼트가 아래 시간 동안 진행돼요.' />
      </div>
      <S.Wrapper>
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
      </S.Wrapper>
    </div>
  );
};

export default SetTournamentDuration;
