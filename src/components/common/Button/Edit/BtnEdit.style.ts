import styled from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center', justify: 'center' })}

  height: 3.2rem;
  padding: 0.4rem 0.6rem;
  border-radius: 1rem;
  column-gap: 0.4rem;

  background-color: ${({ theme: { colors } }) => colors.black};
`;

export const Text = styled.p`
  display: flex;
  width: 100%;
  color: ${({ theme: { colors } }) => colors.white};
  ${({ theme: { fonts } }) => fonts.body_10};
`;
