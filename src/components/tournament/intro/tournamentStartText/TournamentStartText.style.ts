import styled from 'styled-components';

export const TournamentStartTextWrapper = styled.article`
  text-align: left;
  margin-bottom: 2rem;
`;

export const Title = styled.p`
  ${({ theme }) => theme.fonts.Title};
`;

export const SubTitle = styled.p`
  ${({ theme }) => theme.fonts.body_07};
`;

export const UserName = styled.span`
  color: ${({ theme }) => theme.colors.P_06};
`;
