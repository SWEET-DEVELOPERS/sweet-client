import styled from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.inlineFlexBox({})};
  padding: 0.4rem 0.5rem;
  border-radius: 1.3rem;

  color: ${({ theme: { colors } }) => colors.P_06};
  background-color: ${({ theme: { colors } }) => colors.P_01};
`;
