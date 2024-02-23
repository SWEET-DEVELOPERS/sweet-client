import { ToastContainer } from 'react-toastify';
import { styled } from 'styled-components';

export const StyledToastContainer = styled(ToastContainer)`
  display: flex;
  justify-content: center;
  margin-bottom: 2.3rem;
  .Toastify__toast {
    width: 33.5rem;
    height: 5.2rem;
    text-align: center;
    border-radius: 1.6rem;
    background-color: rgba(255, 233, 241, 0.9);
    color: ${({ theme }) => theme.colors.P_06};
    ${({ theme }) => theme.fonts.body_09};
  }
`;
