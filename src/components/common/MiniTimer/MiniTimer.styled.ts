import styled from 'styled-components';

export const MiniTimerWrapper = styled.div`
  width: 10.3rem;
  height: 2.7rem;

  padding: 0.3rem 1rem;
  /* margin: 2.2rem 0 1.2rem 0; */

  display: flex;
  justify-content: center;
  align-items: center;

  column-gap: 0.4rem;

  border-radius: 1.4rem;
  background: ${({ theme }) => theme.colors.G_01};
`;

export const MiniTimerNumbers = styled.span`
  ${({ theme }) => theme.fonts.body_09};
  color: ${({ theme }) => theme.colors.P_06};
`;
