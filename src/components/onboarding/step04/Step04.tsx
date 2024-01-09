import SubTitle from '../../common/title/SubTitle';
import Title from '../../common/title/Title';
import * as S from '../../common/title/Title.style';

const SetTournamentSchedule = () => {
  return (
    <S.TitleWrapper>
      <Title title='선물 토너먼트' />
      <Title title='시작 일정을 설정해주세요' />
      <SubTitle subTitle='너먼트 시작 전까지 선물을 등록할 수 있어요.' />
    </S.TitleWrapper>
  );
};

export default SetTournamentSchedule;
