import styled from 'styled-components';

export const TournamentStartTextWrapper = styled.section`
  text-align: left;
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
