import styled from 'styled-components';

export const InputUrlWrapper = styled.div<{ $isInputFocused: boolean }>`
  ${({ theme }) => theme.mixin.flexBox('center', 'center')}
  width: 100%;
  height: 3.6rem;
  margin-top: 7.2rem;
  border-bottom: 0.1rem solid
    ${({ theme, $isInputFocused }) => ($isInputFocused ? theme.colors.P_06 : theme.colors.G_02)};
`;

export const TextField = styled.div`
  width: 90%;
`;

export const IconField = styled.div`
  width: 10%;
`;

export const Input = styled.input<{ hasContent?: boolean }>`
  ${({ theme }) => theme.mixin.flexBox('flex-center', 'center')};
  width: 100%;
  height: 3.5rem;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body_05};

  &::placeholder {
    color: ${({ theme }) => theme.colors.G_07};
    ${({ theme }) => theme.fonts.body_06};
  }
`;
