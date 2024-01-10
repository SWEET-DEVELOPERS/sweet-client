import BtnNext from '../../common/Button/Next/BtnNext';
import SubTitle from '../../common/title/SubTitle';
import Title from '../../common/title/Title';
import * as S from './Step05.style';
import TimeBox from './TimeBox';

interface SetTournamentDurationProps {
  onNext: VoidFunction;
}

const SetTournamentDuration = (props: SetTournamentDurationProps) => {
  // TODO 오늘 기준 날짜로 수정 & map함수로 수정
  const { onNext } = props;
  return (
    <>
      <div>
        <Title title='선물 토너먼트' />
        <Title title='진행 시간을 설정해주세요' />
      </div>
      <div style={{ marginTop: '0.8rem' }}>
        <SubTitle subTitle='토너먼트가 아래 시간 동안 진행돼요.' />
      </div>
      <S.SetTournamentDurationWrapper>
        <TimeBox />
      </S.SetTournamentDurationWrapper>
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

export default SetTournamentDuration;
