import styled from 'styled-components';

export const CompleteBtnWrapper = styled.div<{ isCompleted: boolean }>`
  display: flex;
  padding: 1rem 1.1rem 1rem 2rem;
  margin-bottom: 2rem;

  border-radius: 9.9rem;

  background-color: ${({ isCompleted, theme }) =>
    isCompleted ? theme.colors.P_06 : theme.colors.G_02};
`;

export const Body09Text = styled.span<{ isCompleted: boolean }>`
  ${({ theme }) => theme.mixin.flexBox({ align: 'center', justify: 'center' })};
  ${({ theme }) => theme.fonts.body_09};
  color: ${({ isCompleted, theme }) => (isCompleted ? theme.colors.white : theme.colors.G_07)};
`;
