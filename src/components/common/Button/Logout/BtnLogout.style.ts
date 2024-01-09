import styled from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme: { mixin } }) => mixin.flexCenter({})}

  padding: 0.4rem 1rem;
  gap: 1rem;
  border-radius: 1.6rem;

  background-color: ${({ theme: { colors } }) => colors.G_01};
  border-color: ${({ theme: { colors } }) => colors.G_02};
  color: ${({ theme: { colors } }) => colors.G_08};
  ${({ theme: { fonts } }) => fonts.caption_02}
`;
