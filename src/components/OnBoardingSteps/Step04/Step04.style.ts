import styled, { css } from 'styled-components';

export const SetTournamentScheduleWrapper = styled.div<{ $hasContent: boolean }>`
  ${({ theme }) => theme.mixin.flexBox({ align: 'center', justify: 'space-between' })}
  width: 100%;
  height: 3.6rem;
  margin-top: 4.6rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.G_02};
  ${({ theme }) => theme.fonts.body_06};

  ${(props) =>
    props.$hasContent &&
    css`
      border-bottom: 0.1rem solid ${({ theme }) => theme.colors.P_06};
    `}
`;
export const TextField = styled.div`
  /* width: 90%; */
`;

export const IconField = styled.div`
  /* width: 10%; */
  /* input[type='time']::-webkit-calendar-picker-indicator {
    display: none;
  } */
`;

export const Input = styled.input`
  ${({ theme }) => theme.mixin.flexBox({ align: 'center', justify: 'space-between' })};
  width: 100%;
  height: 3.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  outline: none;
  ${({ theme }) => theme.fonts.body_06};
  input::placeholder {
    color: ${({ theme }) => theme.colors.G_07};
    ${({ theme }) => theme.fonts.body_06};
  }
`;

export const Container = styled.div<{ $hasContent: boolean }>`
  ${({ theme }) => theme.mixin.flexBox({ align: 'center', justify: 'space-between' })}
  width: 100%;
  height: 3.6rem;
  margin-top: 2.5rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.G_02};
  ${({ theme }) => theme.fonts.body_06};

  ${(props) =>
    props.$hasContent &&
    css`
      border-bottom: 0.1rem solid ${({ theme }) => theme.colors.P_06};
    `}
`;

export const TimeInput = styled.input<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  ${({ theme }) => theme.fonts.body_06};
  input::placeholder {
    color: ${({ theme }) => theme.colors.G_07};
    ${({ theme }) => theme.fonts.body_06};
  }
`;
