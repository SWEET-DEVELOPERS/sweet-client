import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ $hasContent: boolean; $maxLengthReached: boolean }>`
  ${({ theme }) => theme.mixin.flexBox({ align: 'center', justify: 'space-between' })}
  width: 100%;
  height: 3.6rem;
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
  /* width: 90%; */
`;

export const IconField = styled.div`
  display: flex;
  /* width: 10%; */
`;

export const Input = styled.input<{ $hasContent?: boolean; $maxLengthReached?: boolean }>`
  ${({ theme }) => theme.mixin.flexBox({ align: 'center', justify: 'space-between' })};
  flex-wrap: nowrap;
  width: 100%;
  height: 3.5rem;
  border: none;
  outline: none;
  padding: 0;
  ${({ theme }) => theme.fonts.body_05};

  input::placeholder {
    color: ${({ theme }) => theme.colors.G_07};
    ${({ theme }) => theme.fonts.body_06};
  }
`;

export const LetterLength = styled.p`
  color: ${({ theme }) => theme.colors.G_07};
  ${({ theme }) => theme.fonts.body_06};
  margin-top: 0.4rem;
`;
