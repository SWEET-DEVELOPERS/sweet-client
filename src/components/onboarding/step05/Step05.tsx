import SubTitle from '../../common/title/SubTitle';
import Title from '../../common/title/Title';
import * as S from '../../common/title/Title.style';

const SetTournamentDuration = () => {
  return (
    <S.TitleWrapper>
      <Title title='선물 토너먼트' />
      <Title title='진행 시간을 설정해주세요' />
      <SubTitle subTitle='토너먼트가 아래 시간 동안 진행돼요.' />
    </S.TitleWrapper>
  );
};

export default SetTournamentDuration;
