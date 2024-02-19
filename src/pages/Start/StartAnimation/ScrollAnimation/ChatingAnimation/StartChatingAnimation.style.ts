import styled from 'styled-components';

export const PersonWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column' })};
  position: absolute;
  top: 86rem;
  z-index: 1;
  gap: 2.4rem;
`;
