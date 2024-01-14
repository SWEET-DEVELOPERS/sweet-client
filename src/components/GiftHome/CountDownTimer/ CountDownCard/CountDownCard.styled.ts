import styled from 'styled-components';

export const CountDownCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 5rem;
  height: 5.8rem;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.P_06};
  background: ${({ theme }) => theme.colors.P_01};
`;

export const CardMiddleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  width: 5.2rem;
`;

export const CardMiddle = styled.div`
  width: 0.1rem;
  height: 0.6rem;

  background: ${({ theme }) => theme.colors.P_10};
`;

export const DigitText = styled.span`
  ${({ theme }) => theme.fonts.timer_01};
  color: ${({ theme }) => theme.colors.P_06};
`;
