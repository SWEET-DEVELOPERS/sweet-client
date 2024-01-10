import styled from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme: { mixin } }) => mixin.flexCenter({})}

  width: 33.5rem;
  padding: 1.5rem 8.1rem 1.6rem 8.1rem;
  gap: 1rem;
  border-radius: 5.5rem;

  background-color: ${({ theme: { colors } }) => colors.black};
  color: ${({ theme: { colors } }) => colors.white};
  ${({ theme: { fonts } }) => fonts.body_09}
`;
