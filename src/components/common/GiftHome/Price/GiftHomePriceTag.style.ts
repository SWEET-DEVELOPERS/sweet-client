import styled from 'styled-components';

export const Price = styled.p<{ $fonts: string }>`
  display: flex;
  column-gap: 0.2rem;
  ${({ theme, $fonts }) => `${theme}.fonts.${$fonts}`};
`;
