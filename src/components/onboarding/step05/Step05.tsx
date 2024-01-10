import SubTitle from '../../common/title/SubTitle';
import Title from '../../common/title/Title';
import { IcGroup } from '../../../assets/svg';
import * as S from './Step05.style';
import TimeBox from './TimeBox';

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
        <TimeBox />
      </S.Wrapper>
    </div>
  );
};

export default SetTournamentDuration;
