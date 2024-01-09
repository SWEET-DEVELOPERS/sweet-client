import styled, { css } from 'styled-components';
import theme from '../../../style/theme';

export const Input = styled.input<{ hasContent: boolean; maxLengthReached: boolean }>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-top: 7.2rem;
  border: none;
  border-bottom: 0.1rem solid ${theme.colors.G_02};
  outline: none;
  gap: 0.8rem;

  ${(props) =>
    props.hasContent &&
    css`
      border-bottom: 0.1rem solid ${theme.colors.P_06};
    `}

  ${(props) =>
    props.maxLengthReached &&
    css`
      border-bottom: 0.1rem solid ${theme.colors.G_02};
    `}

    input::placeholder {
    color: ${theme.colors.G_07};
    ${theme.fonts.body_06}
  }

  &::-webkit-input-placeholder {
    color: ${theme.colors.G_07};
    ${theme.fonts.body_06}
  }

  &:-ms-input-placeholder {
    color: ${theme.colors.G_07};
    ${theme.fonts.body_06}
  }
`;

export const LetterLength = styled.p`
  color: ${theme.colors.G_07};
  ${theme.fonts.body_10}
`;
