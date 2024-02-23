import styled from 'styled-components';

export const MiniTimerWrapper = styled.div`
  width: 10.3rem;
  height: 2.7rem;
  padding: 0 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1.4rem;
  background: ${({ theme }) => theme.colors.G_01};
`;

export const MiniTimerNumbers = styled.span`
  width: 6.2rem;
  text-align: center;
  ${({ theme }) => theme.fonts.body_09};
  color: ${({ theme }) => theme.colors.P_06};
`;
