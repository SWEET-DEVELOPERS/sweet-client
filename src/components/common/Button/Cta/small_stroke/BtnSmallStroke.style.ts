import styled from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme: { mixin } }) => mixin.flexCenter({})}

  padding: 1rem 2rem;
  gap: 1rem;
  border-radius: 9.9rem;

  background-color: ${({ theme: { colors } }) => colors.white};
  border: 1px solid ${({ theme: { colors } }) => colors.P_06};
  color: ${({ theme: { colors } }) => colors.P_06};
  ${({ theme: { fonts } }) => fonts.body_09}
`;
