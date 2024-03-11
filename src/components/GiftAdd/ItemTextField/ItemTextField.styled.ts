import styled, { css } from 'styled-components';

export const ItemTextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryTitle = styled.span`
  ${({ theme }) => theme.fonts.caption_04};
  color: ${({ theme }) => theme.colors.G_07};
`;

export const Wrapper = styled.div<{ $isInputFocused: boolean }>`
  ${({ theme }) => theme.mixin.flexBox('center', 'center')}
  width: 100%;
  height: 3.6rem;
  row-gap: 1.2rem;
  justify-content: space-between;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.G_02};

  ${(props) =>
    props.$isInputFocused &&
    css`
      border-bottom: 0.1rem solid ${({ theme }) => theme.colors.P_06};
    `}
`;

export const TextField = styled.div`
  width: 90%;
`;

export const IconField = styled.div`
  width: 10%;
`;

export const Input = styled.input<{ $hasContent?: boolean }>`
  ${({ theme }) => theme.mixin.flexBox('flex-center', 'center')};
  width: 100%;
  height: 3.5rem;
  border: none;
  outline: none;

  ${({ theme }) => theme.fonts.body_05};

  &::placeholder {
    color: ${({ theme }) => theme.colors.G_07};
    ${({ theme }) => theme.fonts.body_06};
  }
  /* 인풋 창 옆 기본 화살표 안 보이도록 설정 */
  &[type='number'] {
    -moz-appearance: textfield; /* Firefox */
    -webkit-appearance: none; /* Webkit browsers */
    appearance: textfield; /* Other browsers */
    margin: 0;

    /*  Webkit browsers */
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
`;
