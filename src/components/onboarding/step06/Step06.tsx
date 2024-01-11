import Title from '../../common/title/Title';
import BtnNext from '../../common/Button/Next/BtnNext';
import * as S from './Step06.style';

const OnboardingFinal = () => {
  // TODO 추후 이전 STEP에서 유저가 입력한 값으로 변경
  const infoDetails = [
    { title: '선물 받을 사람', detail: '가나다라마바사아자차님' },
    { title: '선물 등록 마감', detail: '2023.12.29(금) 13시' },
    { title: '토너먼트 진행 시간', detail: '6시간' },
    { title: '선물 전달일', detail: '2023.12.31(일)' },
  ];

  return (
    <>
      <S.Wrapper>
        <S.GradientImg>
          <S.TitleContainer>
            <div>
              <Title userName='가나다라마사아자차' title='님을 위한' />
              <Title title='선물 준비방이 개설됐어요' />
            </div>
            <BtnNext customStyle={{ marginBottom: '1.6rem' }} disabled={false}>
              입장
            </BtnNext>
          </S.TitleContainer>
        </S.GradientImg>
      </S.Wrapper>
      <S.InfoWrapper>
        {infoDetails.map((item, index) => (
          <S.InfoDetailWrapper key={index}>
            <S.InfoTitle>{item.title}</S.InfoTitle>
            <S.InfoDetail>{item.detail}</S.InfoDetail>
          </S.InfoDetailWrapper>
        ))}
      </S.InfoWrapper>
    </>
  );
};
export default OnboardingFinal;
