import styled, { css } from 'styled-components';

export const ItemTextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 0.8rem;
`;

export const CategoryTitle = styled.span`
  ${({ theme }) => theme.fonts.caption_04};
  color: ${({ theme }) => theme.colors.G_07};
`;

export const Wrapper = styled.div<{ $hasContent: boolean }>`
  ${({ theme }) => theme.mixin.flexBox('center', 'center')}
  width: 100%;
  height: 3.6rem;
  row-gap: 1.2rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.G_02};

  ${(props) =>
    props.$hasContent &&
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

  input::placeholder {
    color: ${({ theme }) => theme.colors.G_07};
    ${({ theme }) => theme.fonts.body_06};
  }
`;
