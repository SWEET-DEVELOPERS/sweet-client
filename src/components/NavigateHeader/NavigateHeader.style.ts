import styled from 'styled-components';

export const NavigateHeaderWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center' })};
  position: fixed;
  width: 100%;
  z-index: 999;
  top: 0rem;
  background-color: white;
`;

export const IconWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'flex-end', align: 'center' })};
  width: 37.5rem;
`;
