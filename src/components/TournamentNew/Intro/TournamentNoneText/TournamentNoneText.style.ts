import styled from 'styled-components';

export const TournamentStartTextWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 2rem;

  text-align: left;
`;

export const Title = styled.p`
  ${({ theme }) => theme.fonts.Title};
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body_07};
`;

export const UserName = styled.span`
  color: ${({ theme }) => theme.colors.P_06};
`;
