import styled from 'styled-components';

export const LogoHeaderWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({})};
  position: fixed;
  width: 100%;
  padding: 0 2rem;
  height: 5.6rem;
  gap: 21.2rem;
  z-index: 999;
  top: 0rem;
  background-color: #fafafa;
`;
