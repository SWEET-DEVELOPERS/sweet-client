import styled, { css } from 'styled-components';
import theme from '../../../style/theme';

export const Input = styled.input<{ hasContent: boolean; maxLengthReached: boolean }>`
  width: 100%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 7.2rem;
  gap: 0.8rem;
  outline: none;
  border-bottom: 0.1rem solid ${theme.colors.G_02};

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
