import styled, { css } from 'styled-components';
import theme from '../../../style/theme';

export const Wrapper = styled.div<{ hasContent: boolean; maxLengthReached: boolean }>`
  ${({ theme }) => theme.mixin.flexBox('center', 'center')}
  width: 100%;
  height: 3.6rem;
  margin-top: 7.2rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.G_02};

  ${(props) =>
    props.hasContent &&
    css`
      border-bottom: 0.1rem solid ${({ theme }) => theme.colors.P_06};
    `}

  ${(props) =>
    props.maxLengthReached &&
    css`
      border-bottom: 0.1rem solid ${({ theme }) => theme.colors.G_02};
    `}
`;

export const TextField = styled.div`
  width: 90%;
`;

export const IconField = styled.div`
  width: 10%;
`;

export const Input = styled.input<{ hasContent?: boolean; maxLengthReached?: boolean }>`
  ${({ theme }) => theme.mixin.flexBox('flex-center', 'center')};
  width: 100%;
  height: 3.5rem;
  border: none;
  outline: none;

  input::placeholder {
    color: ${({ theme }) => theme.colors.G_07};
    ${({ theme }) => theme.fonts.body_06};
  }
`;

export const LetterLength = styled.p`
  color: ${theme.colors.G_07};
  ${theme.fonts.body_10}
`;
