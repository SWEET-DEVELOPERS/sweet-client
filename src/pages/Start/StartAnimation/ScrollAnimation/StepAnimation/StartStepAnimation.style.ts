import styled from 'styled-components';

export const StepWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column' })};
  position: absolute;
  top: 230rem;
  z-index: 1;
  gap: 4rem;
  padding-left: 2rem;
`;
