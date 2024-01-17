import styled from 'styled-components';

export const StartHeaderWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({})};
  padding: 0 2rem;
  height: 5.6rem;
  gap: 21.2rem;
`;
