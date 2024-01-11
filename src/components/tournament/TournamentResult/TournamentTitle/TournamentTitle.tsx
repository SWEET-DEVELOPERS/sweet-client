import styled from 'styled-components';

const TournamentTitle = () => {
  return <Title>내가 고른 최종 1위</Title>;
};

export default TournamentTitle;

const Title = styled.p`
  ${({ theme }) => theme.fonts.Title};
`;
