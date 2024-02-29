import styled from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme: { mixin } }) => mixin.flexCenter({})}

  padding: 0.4rem 1rem;
  border-radius: 1.6rem;
  width: 6.4rem;
  height: 2.6rem;
  background-color: ${({ theme: { colors } }) => colors.G_01};
  border: 1px solid ${({ theme: { colors } }) => colors.G_02};
  color: ${({ theme: { colors } }) => colors.G_08};

  ${({ theme: { fonts } }) => fonts.caption_02};
`;
