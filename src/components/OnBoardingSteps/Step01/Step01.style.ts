import styled, { css } from 'styled-components';
import theme from '../../../style/theme';

export const NameInputWrapper = styled.div<{ $hasContent: boolean; $maxLengthReached: boolean }>`
  ${({ theme }) => theme.mixin.flexBox({ align: 'center', justify: 'space-between' })}
  width: 100%;
  margin-top: 7.2rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.G_02};

  ${(props) =>
    props.$hasContent &&
    css`
      border-bottom: 0.1rem solid ${({ theme }) => theme.colors.P_06};
    `}

  ${(props) =>
    props.$maxLengthReached &&
    css`
      border-bottom: 0.1rem solid ${({ theme }) => theme.colors.G_02};
    `}
`;

export const TextField = styled.div`
  display: flex;
  flex: 1;
`;

export const IconField = styled.div`
  display: flex;
`;

export const Input = styled.input<{ $hasContent?: boolean; $maxLengthReached?: boolean }>`
  ${({ theme }) => theme.mixin.flexBox({ align: 'center', justify: 'space-between' })};
  width: 100%;
  height: 3.5rem;
  border: none;
  outline: none;
  padding: 0;
  ${({ theme }) => theme.fonts.body_05};
  color: ${({ theme }) => theme.colors.black};

  input::placeholder {
    color: ${({ theme }) => theme.colors.G_07};
    ${({ theme }) => theme.fonts.body_06};
  }
`;

export const LetterLength = styled.p`
  color: ${theme.colors.G_07};
  ${theme.fonts.body_10}color: ${({ theme }) => theme.colors.G_07};
  ${({ theme }) => theme.fonts.body_06};
  margin-top: 0.4rem;
`;

export const IconWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({ direction: 'row' })};
  width: 4rem;
  height: 4rem;
`;
