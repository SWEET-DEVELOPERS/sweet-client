import styled from 'styled-components';

export const TimerWrapper = styled.article`
  display: flex;
  column-gap: 0.8rem;
  align-items: center;
  justify-content: center;

  margin-bottom: 1.8rem;
`;

export const DashDiv = styled.div`
  width: 1rem;
  height: 0.1rem;

  border-radius: 4.7549rem;
  background: ${({ theme }) => theme.colors.G_07};
`;
