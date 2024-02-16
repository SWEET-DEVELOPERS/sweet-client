import styled from 'styled-components';

const TournamentTitleSub = () => {
  return (
    <>
      <Title>
        <PinkText>제출 완료!</PinkText>
        토너먼트 종료 시간이 지나면 최종 순위를 볼 수 있어요
      </Title>
    </>
  );
};

export default TournamentTitleSub;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 15.7rem;
  margin: 0 auto;
  margin-bottom: 1.3rem;
  ${({ theme }) => theme.fonts.body_09};
  color: ${({ theme }) => theme.colors.G_09};
`;

const PinkText = styled.p`
  margin-left: 0.5rem;
  margin-bottom: 0.3rem;
  ${({ theme }) => theme.fonts.Title};
  color: ${({ theme }) => theme.colors.P_06};
`;
