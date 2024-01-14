import styled from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center', justify: 'space-between' })};
  width: 37.5rem;
  height: 5.6rem;
  margin: 0 1rem;
`;

export const Title = styled.p`
  ${({ theme: { fonts } }) => fonts.body_01};
`;
