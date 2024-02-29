import styled from 'styled-components';

export const Price = styled.p<{ $fonts: string; $colors: string; $gap: number }>`
  display: flex;
  column-gap: ${({ $gap }) => $gap}rem;
  ${({ theme, $fonts, $colors }) => `
    ${theme.fonts[$fonts]};
    color: ${theme.colors[$colors]};
 `}
`;
