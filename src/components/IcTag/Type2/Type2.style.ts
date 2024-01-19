import styled from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.inlineFlexBox({})};
  padding: 0.5rem 0.8rem 0.4rem 0.8rem;
  border-radius: 1.3rem;

  color: ${({ theme: { colors } }) => colors.P_06};
  background-color: ${({ theme: { colors } }) => colors.P_01};
  ${({ theme: { fonts } }) => fonts.caption_03};
`;
