import styled from 'styled-components';

export const Price = styled.p<{ $fonts: string }>`
  ${({ theme, $fonts }) => `${theme}.fonts.${$fonts}`};
`;
