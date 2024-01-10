import styled from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme: { mixin } }) => mixin.inlineFlexBox({ align: 'center', justify: 'center' })}

  height: 4.4rem;
  padding: 1rem 1.1rem 1rem 2rem;
  border-radius: 9.9rem;

  background-color: ${({ theme: { colors } }) => colors.G_02};
  color: ${({ theme: { colors } }) => colors.G_07};
  border-color: ${({ theme: { colors } }) => colors.G_07};

  ${({ theme: { fonts } }) => fonts.body_09}

  &:focus {
    background-color: ${({ theme: { colors } }) => colors.P_06};
    color: ${({ theme: { colors } }) => colors.white};
    border: none;
    outline: none;
  }
`;
