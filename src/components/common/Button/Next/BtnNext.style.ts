import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme: { mixin } }) => mixin.inlineFlexBox({ align: 'center', justify: 'center' })}

  height: 4.4rem;
  padding: 1rem 1.1rem 1rem 2rem;
  border-radius: 9.9rem;

  background-color: ${({ theme: { colors } }) => colors.G_02};
  color: ${({ theme: { colors } }) => colors.G_07};
  border: none;
  /* border-color: ${({ theme: { colors } }) => colors.G_07}; */

  ${({ theme: { fonts } }) => fonts.body_09}

  &:focus {
    background-color: ${({ theme: { colors } }) => colors.P_06};
    color: ${({ theme: { colors } }) => colors.white};
    border: none;
    outline: none;
  }
`;

interface NextBtnTextProps {
  isActivated: boolean;
}

export const NextBtnText = styled.p<NextBtnTextProps>`
  ${({ theme }) => theme.fonts.body_09};
  ${({ isActivated, theme }) =>
    isActivated
      ? css`
          color: ${theme.colors.white};
        `
      : css`
          color: ${theme.colors.G_07};
        `}
`;
