import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type WrapperProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  $isSelected?: boolean;
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center' })}

  width: 33.5rem;
  height: 5.6rem;
  flex-shrink: 0;
  padding: 0 2rem;

  border-radius: 1.2rem;
  border: 1px solid ${({ theme: { colors } }) => colors.white};
  background-color: transparent;

  &:focus,
  &:active {
    border: 1px solid ${({ theme: { colors } }) => colors.P_06};
    background-color: ${({ theme: { colors } }) => colors.white};
  }

  ${({ $isSelected, theme: { colors } }) =>
    $isSelected &&
    css`
      /* 선택된 상태에서의 스타일 */
      border: 1px solid ${colors.P_06};
      background-color: ${colors.white};

      &:active {
        /* 선택된 상태에서 클릭할 때의 스타일 */
        border: 1px solid ${colors.P_06};
        background-color: ${colors.white};
        /* 추가로 필요한 스타일을 여기에 추가하세요 */
      }
    `}
`;

export const Time = styled.p`
  display: flex;
  padding-left: 1.6rem;
  width: 4.2rem;
  width: 60%;
  ${({ theme: { fonts } }) => fonts.body_09};
  color: black;
`;

export const Period = styled.p<{ $isAfterDelivery: boolean }>`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  /* color: ${({ theme: { colors } }) => colors.B_02};
  ${({ theme: { fonts } }) => fonts.caption_01}; */
  color: ${({ theme, $isAfterDelivery }) =>
    $isAfterDelivery ? theme.colors.R_02 : theme.colors.B_02};
`;
