import SubTitle from '../../common/title/SubTitle';
import Title from '../../common/title/Title';
import { IcGroup } from '../../../assets/svg';
import * as S from './Step05.style';

const SetTournamentDuration = () => {
  // TODO 오늘 기준 날짜로 수정 & map함수로 수정
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
        <S.DetailBox>
          <S.RadioBox>
            <IcGroup style={{ width: '2.4rem', height: '2.4rem' }} />
            <S.TimeText>6시간</S.TimeText>
          </S.RadioBox>
          <S.InTodayDate>6월 23일 당일</S.InTodayDate>
        </S.DetailBox>
        <S.DetailBox>
          <S.RadioBox>
            <IcGroup style={{ width: '2.4rem', height: '2.4rem' }} />
            <S.TimeText>12시간</S.TimeText>
          </S.RadioBox>
          <S.InTodayDate>6월 23일 당일</S.InTodayDate>
        </S.DetailBox>
        <S.DetailBox>
          <S.RadioBox>
            <IcGroup style={{ width: '2.4rem', height: '2.4rem' }} />
            <S.TimeText>18시간</S.TimeText>
          </S.RadioBox>
          <S.NotTodayDate>6월 23일 이후</S.NotTodayDate>
        </S.DetailBox>
        <S.DetailBox>
          <S.RadioBox>
            <IcGroup style={{ width: '2.4rem', height: '2.4rem' }} />
            <S.TimeText>24시간</S.TimeText>
          </S.RadioBox>
          <S.NotTodayDate>6월 23일 이후</S.NotTodayDate>
        </S.DetailBox>
      </S.Wrapper>
    </div>
  );
};

export default SetTournamentDuration;
