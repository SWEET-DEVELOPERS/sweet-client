import styled from 'styled-components';

export const LeftIconHeaderWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center' })};
  position: fixed;
  top: 0;
  width: 100%;
  height: 5.6rem;
  background-color: white;
  z-index: 888;
`;

export const Title = styled.p`
  ${({ theme: { fonts } }) => fonts.body_01};
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center', justify: 'center' })};
  position: relative;
  left: -1.7rem;
  width: 100%;
`;
