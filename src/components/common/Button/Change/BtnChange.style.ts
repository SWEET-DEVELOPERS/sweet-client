import styled from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme: { mixin } }) => mixin.inlineFlexBox({ align: 'center', justify: 'center' })}

  padding: 0.8rem 1.2rem;
  gap: 0.4rem;
  border-radius: 2.4rem;

  border: none;
  background-color: ${({ theme: { colors } }) => colors.white};
  color: ${({ theme: { colors } }) => colors.black};
`;

export const Text = styled.p`
  display: flex;
  width: 100%;
  color: ${({ theme: { colors } }) => colors.black};
  ${({ theme: { fonts } }) => fonts.caption_02};
`;
