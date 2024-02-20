import styled from 'styled-components';

export const HomeMypageHeaderWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'flex-end' })};
  position: fixed;
  width: 100%;
  z-index: 999;
  top: 0rem;
  background-color: #fafafa;
`;
