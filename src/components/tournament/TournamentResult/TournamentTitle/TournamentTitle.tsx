import styled from 'styled-components';

const TournamentTitle = () => {
  return (
    <>
      <Title>
        내가 고른 최종
        <PinkText>1위</PinkText>
      </Title>
    </>
  );
};

export default TournamentTitle;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.8rem;
  ${({ theme }) => theme.fonts.Title};
  ${({ theme }) => theme.colors.black};
`;

const PinkText = styled.p`
  margin-left: 0.5rem;
  ${({ theme }) => theme.fonts.Title};
  color: ${({ theme }) => theme.colors.P_06};
`;
