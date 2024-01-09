import styled from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center' })}

  width: 33.5rem;
  height: 5.6rem;
  flex-shrink: 0;
  padding: 0 2rem;

  border-radius: 1.2rem;
  border: 1px solid ${({ theme: { colors } }) => colors.white};
  background-color: transparent;

  &:focus {
    border: 1px solid ${({ theme: { colors } }) => colors.P_06};
    background-color: ${({ theme: { colors } }) => colors.white};
  }
`;

export const Time = styled.p`
  display: flex;
  padding-left: 1.6rem;
  width: 4.2rem;
  width: 100%;
  ${({ theme: { fonts } }) => fonts.body_09};
`;

export const Period = styled.p`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  color: ${({ theme: { colors } }) => colors.B_02};
  ${({ theme: { fonts } }) => fonts.caption_01};
`;
