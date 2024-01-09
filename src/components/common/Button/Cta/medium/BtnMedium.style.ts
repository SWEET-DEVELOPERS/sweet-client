import styled from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme: { mixin } }) => mixin.flexCenter({})}

  width: 30.3rem;
  height: 5.2rem;
  padding: 1.5rem 0rem 1.6rem 0rem;
  border-radius: 2.6rem;
  border: none;
  outline: none;

  background-color: ${({ theme: { colors } }) => colors.black};
  color: ${({ theme: { colors } }) => colors.white};
  ${({ theme: { fonts } }) => fonts.body_09};

  &:focus {
    background-color: ${({ theme: { colors } }) => colors.white};
    color: ${({ theme: { colors } }) => colors.black};
    border: none;
    outline: none;
  }
`;
