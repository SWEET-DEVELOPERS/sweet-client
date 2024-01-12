import styled from 'styled-components';

export const CountDownCardWrapper = styled.div`
  position: relative;
`;

export const DigitText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 5rem;
  height: 5.8rem;
  flex-shrink: 0;

  ${({ theme }) => theme.fonts.timer_01};
  color: ${({ theme }) => theme.colors.P_06};

  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.P_06};
  background: ${({ theme }) => theme.colors.P_01};
`;
