import styled from 'styled-components';

export const TournamentItemCountWrapper = styled.article`
  margin-bottom: 5.5rem;
`;

export const TotalItems = styled.p`
  ${({ theme }) => theme.fonts.body_09};
  color: ${({ theme }) => theme.colors.G_09};
`;
