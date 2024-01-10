import SubTitle from '../../common/title/SubTitle';
import Title from '../../common/title/Title';
import { IcUnselectedCalender, IcUnselectedClock } from '../../../assets/svg';
import * as S from './Step04.style';

const SetTournamentSchedule = () => {
  // TODO 인풋창 클릭 시 캘린더 & 시간 선택 창 구현
  return (
    <>
      <div>
        <div>
          <Title title='선물 토너먼트' />
          <Title title='시작 일정을 설정해주세요' />
        </div>
        <div style={{ marginTop: '0.8rem' }}>
          <SubTitle subTitle='토너먼트 시작 전까지 선물을 등록할 수 있어요.' />
        </div>
      </div>
      <S.SetTournamentScheduleWrapper>
        <S.TextField>
          <S.Input placeholder='날짜를 선택해주세요' />
        </S.TextField>
        <S.IconField>
          <IcUnselectedCalender style={{ width: '2.4rem', height: '2.4rem' }} />
        </S.IconField>
      </S.SetTournamentScheduleWrapper>
      <S.Container>
        <S.TextField>
          <S.Input placeholder='시작 시간을 선택해주세요' />
        </S.TextField>
        <S.IconField>
          <IcUnselectedClock style={{ width: '2.4rem', height: '2.4rem' }} />
        </S.IconField>
      </S.Container>
    </>
  );
};

export default SetTournamentSchedule;
