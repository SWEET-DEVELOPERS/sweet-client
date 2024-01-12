import styled from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'space-between' })};
  width: 100%;
`;
export const Text = styled.div`
  ${({ theme: { fonts } }) => fonts.body_01};
  width: 100%;
`;
