import styled from 'styled-components';

export const OnboardingFinalHeaderWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'flex-end', align: 'center' })};
  width: 100%;
  height: 5.6rem;
  padding: 0 1.8rem;
  z-index: 999;
  top: 0rem;
`;
