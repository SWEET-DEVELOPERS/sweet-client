import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ $hasContent: boolean }>`
  ${({ theme }) => theme.mixin.flexBox({ align: 'center', justify: 'space-between' })}
  width: 100%;
  /* height: 3.6rem; */
  margin-top: 7.2rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.G_02};
  ${(props) =>
    props.$hasContent &&
    css`
      border-bottom: 0.1rem solid ${({ theme }) => theme.colors.P_06};
    `}
`;
export const CalenderWrapper = styled.div`
  font-size: 17px;
  display: flex;
  justify-content: center;
`;
export const TextField = styled.div`
  /* width: 90%; */
`;

export const IconField = styled.div`
  /* width: 10%; */
`;

export const Input = styled.input`
  ${({ theme }) => theme.mixin.flexBox({ align: 'center', justify: 'space-between' })};
  width: 100%;
  height: 3.5rem;
  border: none;
  outline: none;
  padding: 0;
  ${({ theme }) => theme.fonts.body_05};
  color: ${({ theme }) => theme.colors.black};

  input::placeholder {
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body_06};
  }
`;

export const IconWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({ direction: 'row' })};
  width: 4rem;
  height: 4rem;
`;
